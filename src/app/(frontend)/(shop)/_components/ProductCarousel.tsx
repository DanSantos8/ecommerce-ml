'use client'
import { Product, ProductCollection } from '@/payload-types'
import { ProductCard } from './ProductCard'
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

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
            <div className=" flex justify-between items-center">
              <div className="flex justify-center flex-col items-start gap-2">
                <span className="text-muted-foreground text-sm uppercase tracking-widest">
                  {collection.eyebrow}
                </span>
                <h2 className="text-primary font-cormorant text-xl md:text-4xl font-medium uppercase">
                  {collection.name}
                </h2>
              </div>
              <Link href={`/shop/${collection.slug}`} className="flex items-center gap-2">
                <span className="text-muted-foreground text-sm uppercase tracking-widest">
                  See all
                </span>
                <ArrowRight className="h-4 w-4" />
              </Link>
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
