import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'name',
  },
  auth: false,
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
    },
    {
      name: 'description',
      type: 'text',
    },
    {
      name: 'price',
      type: 'number',
    },
    {
      label: 'SubCategory',
      name: 'sub_category_id',
      relationTo: 'sub-categories',
      type: 'relationship',
    },
    {
      label: 'Product Collection',
      name: 'productCollection',
      relationTo: 'product-collection',
      type: 'relationship',
      hasMany: true,
    },
  ],
}
