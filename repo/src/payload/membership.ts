export const membershipFormId = '93258823040253'
export const membershipSubmissionsUrl = `https://www.jotform.com/tables/${membershipFormId}`

export function canInviteDoula(user: object | null | undefined) {
  return Boolean(user && 'role' in user && user.role === 'admin' &&
    'activeStatus' in user && user.activeStatus === 'active')
}
