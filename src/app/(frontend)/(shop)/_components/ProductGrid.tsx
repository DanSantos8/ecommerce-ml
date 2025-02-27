'use client'

import { Button } from '@/components/ui/button'
import { EyeIcon, HeartIcon } from 'lucide-react'
import Image from 'next/image'
import { mockProducts } from './ProductModel'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export const ProductGrid = () => {
  const router = useRouter()

  const handleProductClick = (productId: number) => {
    router.push(`/product/${productId}`)
  }

  return (
    <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      {mockProducts.map((product) => (
        <li
          className="flex flex-col gap-4 rounded-sm overflow-hidden relative cursor-pointer"
          key={product.id}
          onClick={() => handleProductClick(product.id)}
        >
          <div className="absolute right-4 top-4 z-10 lg:hidden">
            <Button
              className="bg-white rounded-full w-8 h-8 cursor-pointer"
              size="sm"
              variant="ghost"
            >
              <HeartIcon />
            </Button>
          </div>
          <div className="group relative h-80 overflow-hidden">
            <Image fill src={product.image} alt={product.name} className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-white h-0 group-hover:h-8 transition-all duration-300">
              <div className="hidden lg:gap-0.5 lg:flex">
                <Button
                  className="rounded-none bg-black text-white flex-1 text-xs cursor-pointer"
                  size="sm"
                  onClick={(e) => {
                    e.stopPropagation()
                    router.push(`/product/${product.id}`)
                  }}
                >
                  Quicklook <EyeIcon />
                </Button>
                <Button
                  className="rounded-none bg-black text-white flex-1 text-xs cursor-pointer"
                  size="sm"
                  onClick={(e) => e.stopPropagation()}
                >
                  Wishlist <HeartIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-primary text-xl">{product.name}</h2>
            <span className="text-muted-foreground text-sm">${product.price}</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid
