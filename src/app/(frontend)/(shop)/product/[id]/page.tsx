'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Heart, Minus, Plus, Share2, Star } from 'lucide-react'
import { mockProducts, Product } from '@/app/(frontend)/(shop)/_components/ProductModel'
import { Separator } from '@/components/ui/separator'
import { CartDrawer } from '@/app/(frontend)/(shop)/_components/CartDrawer'
import { useCartStore } from '@/lib/store'

export default function ProductPage({ params }: { params: { id: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [quantity, setQuantity] = useState(1)
  const router = useRouter()

  const { addItem, openCart, isCartOpen, closeCart } = useCartStore()

  useEffect(() => {
    const productId = parseInt(params.id)
    const foundProduct = mockProducts.find((p: Product) => p.id === productId)

    if (foundProduct) {
      setProduct(foundProduct)
    } else {
      // Redirect to home if product not found
      router.push('/')
    }
  }, [params.id, router])

  const handleAddToCart = () => {
    if (!product) return

    // Add to cart using Zustand store
    addItem(product, quantity)

    // Open cart drawer
    openCart()
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  if (!product) {
    return (
      <div className="container py-20 text-center">
        <p>Loading product...</p>
      </div>
    )
  }

  return (
    <>
      <div className="container py-10">
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2"
          onClick={() => router.back()}
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Products
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Product Image */}
          <div className="relative aspect-square overflow-hidden rounded-md">
            <Image src={product.image} alt={product.name} fill className="object-cover" priority />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-6">
            <div>
              <div className="flex justify-between items-start">
                <h1 className="text-3xl font-bold">{product.name}</h1>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <p className="text-2xl font-medium mt-2">${product.price}</p>

              <div className="flex items-center gap-2 mt-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="font-medium mb-2">Description</h2>
              <p className="text-muted-foreground">{product.description}</p>
            </div>

            <Separator />

            <div>
              <h2 className="font-medium mb-4">Quantity</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none"
                    onClick={decreaseQuantity}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-10 w-10 rounded-none"
                    onClick={increaseQuantity}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <span className="text-sm text-muted-foreground">
                  {product.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>
            </div>

            <Button
              className="mt-4"
              size="lg"
              disabled={!product.inStock}
              onClick={handleAddToCart}
            >
              Add to Cart
            </Button>

            <div className="text-sm text-muted-foreground mt-4">
              <p>Category: {product.category}</p>
            </div>
          </div>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </>
  )
}
