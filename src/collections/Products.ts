import { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
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
  ],
}
