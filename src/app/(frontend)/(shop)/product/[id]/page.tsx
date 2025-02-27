import { use } from 'react'
import ProductClient from './ProductClient'

// This is a Server Component that unwraps the params
export default function ProductPage({ params }: { params: { id: string } }) {
  // Unwrap params using React.use() in the server component
  const unwrappedParams = use(Promise.resolve(params))
  const productId = unwrappedParams.id

  // Pass the unwrapped ID to the client component
  return <ProductClient productId={productId} />
}
