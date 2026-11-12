import { randomBytes } from 'node:crypto'
import { commitTransaction, initTransaction, killTransaction } from 'payload'
import type { Endpoint } from 'payload'

import { canInviteDoula, membershipFormId } from './membership'

function respond(body: object, status = 200) {
  return Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } })
}

export const inviteDoula: Endpoint = {
  path: '/invite-doula',
  method: 'post',
  handler: async (req) => {
    if (req.user?.collection !== 'users' || !canInviteDoula(req.user)) {
      return respond({ message: 'Only active RDDA admins can invite a doula.' }, 403)
    }

    if (req.headers.get('sec-fetch-site') !== 'same-origin' ||
        req.headers.get('content-type')?.split(';')[0] !== 'application/json') {
      return respond({ message: 'Submit the invitation from the RDDA admin dashboard.' }, 403)
    }

    const body = await req.json?.().catch(() => null)
    if (!body || typeof body !== 'object') {
      return respond({ message: 'Enter the required invitation details.' }, 400)
    }

    const firstName = typeof body.firstName === 'string' ? body.firstName.trim() : ''
    const lastName = typeof body.lastName === 'string' ? body.lastName.trim() : ''
    const email = typeof body.email === 'string' ? body.email.trim().toLowerCase() : ''
    const submissionId = typeof body.submissionId === 'string' ? body.submissionId.trim() : ''

    if (!firstName || firstName.length > 100 || !lastName || lastName.length > 100 ||
        email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
        !/^\d{1,30}$/.test(submissionId) || body.approved !== true ||
        body.policiesComplete !== true || body.paymentVerified !== true) {
      return respond({ message: 'Enter the applicant details and confirm approval, policies and payment.' }, 400)
    }

    const { payload, user } = req
    const existing = await payload.find({
      collection: 'users',
      where: { email: { equals: email } },
      limit: 1,
      depth: 0,
      select: { id: true },
      req,
      overrideAccess: false,
    })
    if (existing.docs.length) {
      return respond({ message: 'A user already has this email. Review their account in Users.' }, 409)
    }

    try {
      if (!await initTransaction(req)) {
        return respond({ message: 'Invitations are temporarily unavailable.' }, 503)
      }

      await payload.create({
        collection: 'users',
        data: {
          firstName,
          lastName,
          email,
          password: randomBytes(32).toString('hex'),
          role: 'doula',
          activeStatus: 'active',
          notes: [
            `Jotform ${membershipFormId}, submission ${submissionId}`,
            `Admin ${user.id} confirmed documented approval, completed policies and verified payment on ${new Date().toISOString()}.`,
          ].join('\n'),
        },
        depth: 0,
        overrideAccess: false,
        req,
      })
      const token = await payload.forgotPassword({
        collection: 'users',
        data: { email },
        disableEmail: true,
        req,
      })
      if (!token) throw new Error('Missing password setup token')

      await commitTransaction(req)
      const { admin } = payload.config.routes
      const { reset } = payload.config.admin.routes
      return respond({ path: `${admin}${reset}/${encodeURIComponent(token)}` }, 201)
    } catch {
      await killTransaction(req)
      return respond({
        message: 'The invitation could not be completed. Check Users for the email before trying again.',
      }, 500)
    }
  },
}
