import type { CollectionConfig, Where } from 'payload'

const publicPublishedEvents: Where = {
  status: {
    equals: 'published',
  },
}

export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'eventDate', 'status', 'featuredStatus'],
    group: 'Events',
  },
  access: {
    create: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
    read: ({ req }) => {
      if (
        req.user?.role === 'admin' ||
        req.user?.role === 'siteManager' ||
        req.user?.role === 'boardMember'
      ) {
        return true
      }

      return publicPublishedEvents
    },
    update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
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
      name: 'eventDate',
      type: 'date',
      required: true,
    },
    {
      name: 'startTime',
      type: 'text',
    },
    {
      name: 'endTime',
      type: 'text',
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
      name: 'sourceRequest',
      type: 'relationship',
      relationTo: 'eventRequests',
      admin: {
        description: 'Optional link to the request that created this event.',
      },
    },
    {
      name: 'featuredStatus',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        position: 'sidebar',
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
        {
          label: 'Cancelled',
          value: 'cancelled',
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
        read: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
  ],
}
