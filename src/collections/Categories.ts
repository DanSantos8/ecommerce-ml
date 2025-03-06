import { formatSlug, generateId } from '@/utils/functions'
import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'categories',
  admin: {
    useAsTitle: 'name',
  },
  auth: false,
  access: {
    read: () => true,
  },
  hooks: {
    beforeValidate: [generateId],
  },
  fields: [
    {
      name: 'id',
      type: 'text',
      required: true,
      unique: true,
      defaultValue: '',
      admin: {
        components: {
          Field: undefined,
        },
      },
    },
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      label: 'Slug',
      type: 'text',
      admin: {
        readOnly: true,
      },
      hooks: {
        beforeValidate: [formatSlug],
      },
    },
    {
      name: 'subcategories',
      type: 'join',
      collection: 'sub-categories',
      on: 'category',
      maxDepth: 1,
      admin: {
        components: {
          Field: undefined,
        },
      },
    },
  ],
}
