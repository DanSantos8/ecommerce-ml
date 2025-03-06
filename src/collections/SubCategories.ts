import { formatSlug, generateId } from '@/utils/functions'
import type { CollectionConfig } from 'payload'

export const SubCategories: CollectionConfig = {
  slug: 'sub-categories',
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
      required: true,
      hooks: {
        beforeValidate: [formatSlug],
      },
    },
    {
      label: 'Category',
      name: 'category',
      type: 'relationship',
      required: true,
      relationTo: 'categories',
      maxDepth: 1,
    },
  ],
}
