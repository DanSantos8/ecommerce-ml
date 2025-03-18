'use client'

import * as React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const carouselItems = [
  {
    id: 1,
    imageUrl: '/banner.jpg',
    title: 'Fashion That Stands the Test of Time',
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
    <div className="mt-14">
      <Carousel
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {carouselItems.map((item) => (
            <CarouselItem key={item.id}>
              <div
                className="w-full h-[calc(100dvh-56px)] relative bg-gray-200"
                style={{
                  backgroundImage: `url(${item.imageUrl})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tl from-transparent to-black/40" />
                <div className="absolute inset-0 flex  gap-3 md:gap-4 bg-gradient-to-b from-transparent to-black/60 pb-20 px-10">
                  <div className="flex-1 mt-auto flex flex-col  justify-center gap-3 md:gap-4">
                    <h2 className="text-4xl md:text-6xl font-cormorant text-secondary max-w-2xl uppercase">
                      {item.title}
                    </h2>
                  </div>
                  <div className="mt-auto flex-1 flex flex-col justify-center max-w-[400px] gap-4">
                    <p className="text-xs md:text-base text-secondary font-light">
                      {item.description}
                    </p>
                    <Button variant="secondary" className="uppercase py-5">
                      <span className="font-light"> Shop Now</span>{' '}
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
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
