import { formatSlug, generateId } from '../utils/functions'
import { CollectionConfig } from 'payload'

export const ProductCollection: CollectionConfig = {
  slug: 'product-collection',
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
      name: 'eyebrow',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      unique: true,
      required: true,
      admin: {
        disabled: true,
      },
      hooks: {
        beforeValidate: [formatSlug],
      },
    },

    {
      name: 'description',
      type: 'text',
      required: true,
    },
    {
      name: 'type',
      type: 'select',
      options: ['summer', 'winter', 'spring', 'autumn', 'trending', 'new'],
      required: true,
    },
    {
      name: 'products',
      type: 'join',
      collection: 'products',
      on: 'productCollection',
      hasMany: true,
      maxDepth: 2,
      admin: {
        components: {
          Field: undefined,
        },
      },
    },
  ],
}
