import type { CollectionConfig, Where } from 'payload'

const publicPublishedProfiles: Where = {
  and: [
    {
      publishedStatus: {
        equals: 'published',
      },
    },
    {
      activeStatus: {
        equals: 'active',
      },
    },
  ],
}

export const DoulaProfiles: CollectionConfig = {
  slug: 'doulaProfiles',
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'businessName', 'activeStatus', 'publishedStatus', 'featuredStatus'],
    group: 'Doula Portal',
  },
  access: {
    create: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
    read: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager' || req.user?.role === 'boardMember') {
        return true
      }

      if (req.user?.role === 'doula') {
        return {
          ownerUser: {
            equals: req.user.id,
          },
        }
      }

      return publicPublishedProfiles
    },
    update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'businessName',
      type: 'text',
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'URL-safe profile identifier.',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      required: true,
    },
    {
      name: 'headshot',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'phone',
      type: 'text',
    },
    {
      name: 'email',
      type: 'email',
    },
    {
      name: 'website',
      type: 'text',
    },
    {
      name: 'serviceAreas',
      type: 'array',
      fields: [
        {
          name: 'area',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'servicesOffered',
      type: 'array',
      fields: [
        {
          name: 'service',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'careCategories',
      type: 'select',
      hasMany: true,
      options: [
        {
          label: 'Birth',
          value: 'birth',
        },
        {
          label: 'Postpartum',
          value: 'postpartum',
        },
        {
          label: 'Fertility',
          value: 'fertility',
        },
        {
          label: 'Loss',
          value: 'loss',
        },
        {
          label: 'Family Transitions',
          value: 'familyTransitions',
        },
        {
          label: 'End-of-Life Grief',
          value: 'endOfLifeGrief',
        },
      ],
    },
    {
      name: 'certifications',
      type: 'array',
      fields: [
        {
          name: 'certification',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'yearsExperience',
      type: 'text',
    },
    {
      name: 'languages',
      type: 'array',
      fields: [
        {
          name: 'language',
          type: 'text',
          required: true,
        },
      ],
    },
    {
      name: 'pricing',
      type: 'textarea',
    },
    {
      name: 'availability',
      type: 'textarea',
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
          required: true,
        },
        {
          name: 'url',
          type: 'text',
          required: true,
        },
      ],
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
          label: 'Hidden',
          value: 'hidden',
        },
      ],
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'publishedStatus',
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
      name: 'ownerUser',
      type: 'relationship',
      relationTo: 'users',
      admin: {
        position: 'sidebar',
        description: 'The doula user account that owns this profile.',
      },
    },
    {
      name: 'lastApprovedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'lastApprovedBy',
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
      admin: {
        description: 'Internal admin/site manager notes only. Not public.',
      },
    },
  ],
}
