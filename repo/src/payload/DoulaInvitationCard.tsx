'use client'

import { useAuth, useConfig } from '@payloadcms/ui'
import { useState } from 'react'
import type { FormEvent } from 'react'

import { canInviteDoula, membershipSubmissionsUrl } from './membership'

export function DoulaInvitationCard() {
  const { user } = useAuth()
  const { config } = useConfig()
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [invite, setInvite] = useState('')
  const [copied, setCopied] = useState(false)

  if (!canInviteDoula(user)) return null

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const fields = new FormData(event.currentTarget)
    setBusy(true)
    setError('')
    try {
      const response = await fetch(`${config.routes.api}/users/invite-doula`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName: fields.get('firstName'),
          lastName: fields.get('lastName'),
          email: fields.get('email'),
          submissionId: fields.get('submissionId'),
          approved: fields.has('approved'),
          policiesComplete: fields.has('policiesComplete'),
          paymentVerified: fields.has('paymentVerified'),
        }),
      })
      const result = await response.json()
      if (!response.ok) {
        setError(result.message || 'The invitation could not be completed.')
        return
      }
      setInvite(new URL(result.path, window.location.origin).href)
    } catch {
      setError('The invitation result could not be loaded. Check Users for the email before trying again.')
    } finally {
      setBusy(false)
    }
  }

  return (
    <section aria-labelledby="invite-doula-heading" style={{ marginBlockEnd: '2rem' }}>
      <h2 id="invite-doula-heading">Invite a doula</h2>
      <p>
        Review the application in <a href={membershipSubmissionsUrl} target="_blank" rel="noreferrer">
          Jotform submissions
        </a> and confirm the membership requirements before creating an account.
      </p>
      {invite ? (
        <div>
          <p role="status">Account created. Send this private link directly to the applicant’s verified email. It expires in one hour.</p>
          <label style={{ display: 'grid', maxWidth: '40rem' }}>
            Password setup link
            <input readOnly value={invite} onFocus={(event) => event.currentTarget.select()} />
          </label>
          <button type="button" onClick={async () => {
            try {
              await navigator.clipboard.writeText(invite)
              setCopied(true)
            } catch {
              setError('Select the link and copy it manually.')
            }
          }}>{copied ? 'Copied' : 'Copy link'}</button>{' '}
          <button type="button" onClick={() => {
            setInvite('')
            setCopied(false)
            setError('')
          }}>Invite another doula</button>
        </div>
      ) : (
        <form onSubmit={submit} style={{ maxWidth: '28rem' }}>
          <fieldset disabled={busy} style={{ display: 'grid', gap: '0.75rem' }}>
            <legend>Approved applicant</legend>
            <label style={{ display: 'grid' }}>First name<input name="firstName" maxLength={100} required /></label>
            <label style={{ display: 'grid' }}>Last name<input name="lastName" maxLength={100} required /></label>
            <label style={{ display: 'grid' }}>Email<input name="email" type="email" maxLength={254} required /></label>
            <label style={{ display: 'grid' }}>
              Jotform submission ID
              <input name="submissionId" inputMode="numeric" pattern="[0-9]{1,30}" required />
            </label>
            <label><input name="approved" type="checkbox" required /> Membership approval is documented.</label>
            <label><input name="policiesComplete" type="checkbox" required /> Required policies and onboarding documents are complete.</label>
            <label><input name="paymentVerified" type="checkbox" required /> Membership payment is verified.</label>
            <button type="submit">{busy ? 'Creating invitation…' : 'Create account and generate link'}</button>
          </fieldset>
        </form>
      )}
      {error && <p role="alert">{error}</p>}
    </section>
  )
}
