import { CollectionCards } from '@payloadcms/next/rsc'
import { DoulaInvitationCard } from '../../../payload/DoulaInvitationCard'

export const importMap = {
  '@payloadcms/next/rsc#CollectionCards': CollectionCards,
  './src/payload/DoulaInvitationCard#DoulaInvitationCard': DoulaInvitationCard,
}
