import type { CollectionConfig, Where } from 'payload'

const ownTrainingProgressAccess = (userId: string | number): Where => ({
  user: {
    equals: userId,
  },
})

export const TrainingProgress: CollectionConfig = {
  slug: 'trainingProgress',
  admin: {
    useAsTitle: 'status',
    defaultColumns: ['user', 'module', 'status', 'completedAt', 'expiresAt'],
    group: 'Training',
  },
  access: {
    create: ({ req }) =>
      req.user?.role === 'admin' ||
      req.user?.role === 'siteManager' ||
      req.user?.role === 'trainer' ||
      req.user?.role === 'doula',
    read: ({ req }) => {
      if (
        req.user?.role === 'admin' ||
        req.user?.role === 'siteManager' ||
        req.user?.role === 'boardMember' ||
        req.user?.role === 'trainer'
      ) {
        return true
      }

      if (req.user?.role === 'doula') {
        return ownTrainingProgressAccess(req.user.id)
      }

      return false
    },
    update: ({ req }) => {
      if (
        req.user?.role === 'admin' ||
        req.user?.role === 'siteManager' ||
        req.user?.role === 'trainer'
      ) {
        return true
      }

      if (req.user?.role === 'doula') {
        return ownTrainingProgressAccess(req.user.id)
      }

      return false
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'module',
      type: 'relationship',
      relationTo: 'trainingModules',
      required: true,
    },
    {
      name: 'status',
      type: 'select',
      required: true,
      defaultValue: 'notStarted',
      options: [
        {
          label: 'Not Started',
          value: 'notStarted',
        },
        {
          label: 'In Progress',
          value: 'inProgress',
        },
        {
          label: 'Completed',
          value: 'completed',
        },
        {
          label: 'Expired',
          value: 'expired',
        },
        {
          label: 'Waived',
          value: 'waived',
        },
      ],
    },
    {
      name: 'startedAt',
      type: 'date',
    },
    {
      name: 'completedAt',
      type: 'date',
    },
    {
      name: 'expiresAt',
      type: 'date',
    },
    {
      name: 'completionNotes',
      type: 'textarea',
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
      name: 'adminNotes',
      type: 'textarea',
      access: {
        read: ({ req }) =>
          req.user?.role === 'admin' ||
          req.user?.role === 'siteManager' ||
          req.user?.role === 'trainer',
        update: ({ req }) =>
          req.user?.role === 'admin' ||
          req.user?.role === 'siteManager' ||
          req.user?.role === 'trainer',
      },
    },
  ],
}
