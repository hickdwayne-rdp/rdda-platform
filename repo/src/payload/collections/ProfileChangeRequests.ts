import type { CollectionConfig, Where } from 'payload'

const ownProfileRequestAccess = (userId: string | number): Where => ({
  requestingUser: {
    equals: userId,
  },
})

const editableOwnProfileRequestAccess = (userId: string | number): Where => ({
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

export const ProfileChangeRequests: CollectionConfig = {
  slug: 'profileChangeRequests',
  admin: {
    useAsTitle: 'requestTitle',
    defaultColumns: ['requestTitle', 'status', 'submittedAt', 'reviewedAt'],
    group: 'Doula Portal',
  },
  access: {
    create: ({ req }) =>
      req.user?.role === 'admin' ||
      req.user?.role === 'siteManager' ||
      req.user?.role === 'doula',
    read: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager' || req.user?.role === 'boardMember') {
        return true
      }

      if (req.user?.role === 'doula') {
        return ownProfileRequestAccess(req.user.id)
      }

      return false
    },
    update: ({ req }) => {
      if (req.user?.role === 'admin' || req.user?.role === 'siteManager') {
        return true
      }

      if (req.user?.role === 'doula') {
        return editableOwnProfileRequestAccess(req.user.id)
      }

      return false
    },
    delete: ({ req }) => req.user?.role === 'admin',
  },
  fields: [
    {
      name: 'requestTitle',
      type: 'text',
      required: true,
      admin: {
        description: 'Short internal title for the requested profile change.',
      },
    },
    {
      name: 'requestingUser',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'relatedProfile',
      type: 'relationship',
      relationTo: 'doulaProfiles',
      required: true,
    },
    {
      name: 'requestedChanges',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'businessName',
          type: 'text',
        },
        {
          name: 'bio',
          type: 'textarea',
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
          name: 'pricing',
          type: 'textarea',
        },
        {
          name: 'availability',
          type: 'textarea',
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
      ],
    },
    {
      name: 'requestedHeadshot',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'requestedLogo',
      type: 'upload',
      relationTo: 'media',
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
          label: 'Applied',
          value: 'applied',
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
    {
      name: 'doulaMessage',
      type: 'textarea',
      admin: {
        description: 'Optional message from the doula to the reviewer.',
      },
    },
    {
      name: 'rejectionReason',
      type: 'textarea',
      access: {
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
    {
      name: 'revisionRequestNotes',
      type: 'textarea',
      access: {
        update: ({ req }) => req.user?.role === 'admin' || req.user?.role === 'siteManager',
      },
    },
    {
      name: 'approvedAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
    {
      name: 'appliedToProfileAt',
      type: 'date',
      admin: {
        position: 'sidebar',
      },
    },
  ],
}
