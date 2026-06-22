import type { CollectionConfig, Where } from 'payload'

const publishedTrainingAccess: Where = {
  status: {
    equals: 'published',
  },
}

export const TrainingModules: CollectionConfig = {
  slug: 'trainingModules',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'status', 'requiredForDoulas', 'renewalRequired'],
    group: 'Training',
  },
  access: {
    create: ({ req }) =>
      req.user?.role === 'admin' ||
      req.user?.role === 'siteManager' ||
      req.user?.role === 'trainer',
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
        return publishedTrainingAccess
      }

      return false
    },
    update: ({ req }) =>
      req.user?.role === 'admin' ||
      req.user?.role === 'siteManager' ||
      req.user?.role === 'trainer',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'textarea',
      admin: {
        description: 'Basic module text for now. Richer lesson content can be added later.',
      },
    },
    {
      name: 'trainingFile',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'externalUrl',
      type: 'text',
      admin: {
        description: 'Optional link to external video, document, or course material.',
      },
    },
    {
      name: 'estimatedMinutes',
      type: 'number',
      min: 0,
    },
    {
      name: 'requiredForDoulas',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'renewalRequired',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'renewalMonths',
      type: 'number',
      min: 0,
      admin: {
        position: 'sidebar',
        description: 'Number of months before renewal is required. Leave blank or 0 if not applicable.',
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
          label: 'Published',
          value: 'published',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedBy',
      type: 'relationship',
      relationTo: 'users',
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
