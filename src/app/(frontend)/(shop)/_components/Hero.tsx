'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const carouselItems = [
  {
    id: 1,
    imageUrl: '/hero/hero-slide-1.jpg',
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 2,
    imageUrl: '/hero/hero-slide-1.jpg',
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    id: 3,
    imageUrl: '/hero/hero-slide-1.jpg',
    title: 'Lorem Ipsum',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
]

export const Hero = () => {
  return (
    <div>
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div
                className="w-full h-[60dvh] lg:h-[65dvh] relative bg-gray-200"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 flex flex-col justify-center items-center gap-3 md:gap-4 bg-gradient-to-b from-transparent to-black/50">
                  <div className="border border-solid px-2 md:px-4 py-0.5 border-gray-100">
                    <span className="text-gray-100 text-xs">Shopping With Style</span>
                  </div>
                  <h2 className="text-primary text-4xl md:text-7xl">{item.title}</h2>
                  <p className="text-sm md:text-xl text-gray-200 max-w-2xl px-4 text-center">
                    {item.description}
                  </p>

                  <Button variant="secondary" className="rounded-none mt-6 group">
                    Shop now{' '}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-all" />
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}

export default Hero
