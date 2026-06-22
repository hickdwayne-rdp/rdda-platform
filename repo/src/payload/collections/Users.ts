import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: true,
  admin: {
    useAsTitle: 'email',
    defaultColumns: ['email', 'firstName', 'lastName', 'role', 'activeStatus'],
  },
  access: {
    create: ({ req }) => req.user?.role === 'admin',
    read: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager') {
        return true
      }

      if (req.user) {
        return {
          id: {
            equals: req.user.id,
          },
        }
      }

      return false
    },
    update: ({ req }) => {
      if (req.user?.role === 'admin') {
        return true
      }

      if (req.user) {
        return {
          id: {
            equals: req.user.id,
          },
        }
      }

      return false
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'firstName',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'lastName',
      type: 'text',
      required: true,
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'doula',
      options: [
        {
          label: 'Admin',
          value: 'admin',
        },
        {
          label: 'Site Manager',
          value: 'siteManager',
        },
        {
          label: 'Doula',
          value: 'doula',
        },
        {
          label: 'Board Member',
          value: 'boardMember',
        },
        {
          label: 'Trainer',
          value: 'trainer',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'activeStatus',
      type: 'select',
      required: true,
      defaultValue: 'active',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Inactive',
          value: 'inactive',
        },
        {
          label: 'Suspended',
          value: 'suspended',
        },
      ],
      access: {
        update: ({ req }) => req.user?.role === 'admin',
      },
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'notes',
      type: 'textarea',
      access: {
        read: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
      admin: {
        description: 'Internal admin/site manager notes only. Not public.',
      },
    },
  ],
}
