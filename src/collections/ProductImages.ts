import { CollectionConfig } from 'payload'

export const ProductImages: CollectionConfig = {
  slug: 'product-images',
  fields: [
    {
      name: 'alt',
      type: 'text',
    },
    {
      label: 'Product',
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
  ],
  upload: true,
}
