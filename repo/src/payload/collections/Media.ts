import type { CollectionConfig, Where } from 'payload'

const authenticatedMediaAccess: Where = {
  publicVisibility: {
    not_equals: 'adminOnly',
  },
}

const publicMediaAccess: Where = {
  and: [
    {
      approvalStatus: {
        equals: 'approved',
      },
    },
    {
      publicVisibility: {
        equals: 'public',
      },
    },
  ],
}

export const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
  },
  admin: {
    useAsTitle: 'altText',
    defaultColumns: ['altText', 'mediaType', 'approvalStatus', 'publicVisibility'],
  },
  access: {
    create: ({ req }) => Boolean(req.user),
    read: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager') {
        return true
      }

      if (req.user) {
        return authenticatedMediaAccess
      }

      return publicMediaAccess
    },
    update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'altText',
      type: 'text',
      required: true,
      admin: {
        description: 'Required for accessibility when images are displayed publicly.',
      },
    },
    {
      name: 'mediaType',
      type: 'select',
      required: true,
      defaultValue: 'general',
      options: [
        {
          label: 'Headshot',
          value: 'headshot',
        },
        {
          label: 'Logo',
          value: 'logo',
        },
        {
          label: 'Event Image',
          value: 'eventImage',
        },
        {
          label: 'Training File',
          value: 'trainingFile',
        },
        {
          label: 'Archive',
          value: 'archive',
        },
        {
          label: 'General',
          value: 'general',
        },
      ],
    },
    {
      name: 'approvalStatus',
      type: 'select',
      required: true,
      defaultValue: 'pending',
      options: [
        {
          label: 'Pending',
          value: 'pending',
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
          label: 'Archived',
          value: 'archived',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
    {
      name: 'publicVisibility',
      type: 'select',
      required: true,
      defaultValue: 'adminOnly',
      options: [
        {
          label: 'Public',
          value: 'public',
        },
        {
          label: 'Authenticated Only',
          value: 'authenticatedOnly',
        },
        {
          label: 'Admin Only',
          value: 'adminOnly',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
    {
      name: 'adminNotes',
      type: 'textarea',
      access: {
        read: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
  ],
}
