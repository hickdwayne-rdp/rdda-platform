import type { CollectionConfig, Where } from 'payload'

const ownEventRequestAccess = (userId: string | number): Where => ({
  requestingUser: {
    equals: userId,
  },
})

const editableOwnEventRequestAccess = (userId: string | number): Where => ({
  and: [
    {
      requestingUser: {
        equals: userId,
      },
    },
    {
      status: {
        in: ['draft', 'revisionRequested'],
      },
    },
  ],
})

export const EventRequests: CollectionConfig = {
  slug: 'eventRequests',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'eventDate', 'submittedAt'],
    group: 'Events',
  },
  access: {
    create: ({ req }) =>
      req.user?.role === 'admin' ||
      req.user?.role === 'siteManager' ||
      req.user?.role === 'doula' ||
      req.user?.role === 'trainer',
    read: ({ req }) => {
      if (
        req.user?.role === 'admin' ||
        req.user?.role === 'siteManager' ||
        req.user?.role === 'boardMember'
      ) {
        return true
      }

      if (req.user) {
        return ownEventRequestAccess(req.user.id)
      }

      return false
    },
    update: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager') {
        return true
      }

      if (req.user) {
        return editableOwnEventRequestAccess(req.user.id)
      }

      return false
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'requestingUser',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'relatedDoulaProfile',
      type: 'relationship',
      relationTo: 'doulaProfiles',
    },
    {
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'startTime',
      type: 'text',
      admin: {
        description: 'Human-readable start time, for example 6:30 PM.',
      },
    },
    {
      name: 'endTime',
      type: 'text',
      admin: {
        description: 'Human-readable end time, if applicable.',
      },
    },
    {
      name: 'location',
      type: 'text',
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
    },
    {
      name: 'host',
      type: 'text',
    },
    {
      name: 'cost',
      type: 'text',
    },
    {
      name: 'registrationLink',
      type: 'text',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'doulaMessage',
      type: 'textarea',
      admin: {
        description: 'Optional message from the requester to the reviewer.',
      },
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'draft',
      options: [
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Pending Review',
          value: 'pendingReview',
        },
        {
          label: 'Revision Requested',
          value: 'revisionRequested',
        },
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
        {
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Cancelled',
          value: 'cancelled',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'submittedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'reviewedBy',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'reviewedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'reviewerNotes',
      type: 'textarea',
      access: {
        read: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
  ],
}
