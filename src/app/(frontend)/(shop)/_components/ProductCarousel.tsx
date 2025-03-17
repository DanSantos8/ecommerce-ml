'use client'
import { Product, ProductCollection } from '@/payload-types'
import { ProductCard } from './ProductCard'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface ProductCollectionProps {
  collections: ProductCollection[]
}

export const ProductCarousel = (props: ProductCollectionProps) => {
  const { collections } = props
  const [api, setApi] = useState<CarouselApi>()

  const btnClasses =
    'absolute top-1/2 h-8 w-8 -translate-y-1/2 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-sm hover:bg-white transition-all shadow-sm'
  return (
    <div>
      {collections.map((collection) => {
        const products = collection.products?.docs as Product[]

        return (
          <div className="flex flex-col gap-12" key={collection.id}>
            <div className="flex justify-center flex-col items-center gap-4">
              <div className="border border-solid px-2 md:px-4 py-0.5 border-gray-400">
                <span className="text-gray-400 text-xs capitalize">{collection.eyebrow}</span>
              </div>
              <h2 className="text-primary font-playfair text-2xl md:text-4xl">{collection.name}</h2>
              <p className="text-sm font-playfair md:text-xl text-gray-400 px-4 text-center">
                {collection.description}
              </p>
            </div>
            <section className="grid col-span-12 gap-x-6 gap-y-12">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {products.map((product) => (
                    <CarouselItem key={product.id} className="basis-1/3">
                      <ProductCard {...product} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <Button
                  onClick={() => api?.scrollPrev()}
                  variant="ghost"
                  className={cn(btnClasses, 'left-3')}
                >
                  <ChevronLeft className="h-5 w-5 text-neutral-700" />
                </Button>
                <Button
                  onClick={() => api?.scrollNext()}
                  variant="ghost"
                  className={cn(btnClasses, 'right-3')}
                >
                  <ChevronRight className="h-5 w-5 text-neutral-700" />
                </Button>
              </Carousel>
            </section>
          </div>
        )
      })}
    </div>
  )
}

export default ProductCarousel
