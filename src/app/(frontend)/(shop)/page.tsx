import React from 'react'
import { Hero } from './_components'
import ProductGrid from './_components/ProductGrid'

export default async function HomePage() {
  return (
    <div className="grid grid-cols-12 gap-y-20 pb-10">
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12 px-4">
        <div className="flex flex-col gap-12">
          <div className="flex justify-center flex-col items-center gap-4">
            <div className="border border-solid px-2 md:px-4 py-0.5 border-gray-400">
              <span className="text-gray-400 text-xs">Best Fashion Deals</span>
            </div>
            <h2 className="text-primary text-2xl md:text-4xl">New Summer Collection </h2>
            <p className="text-sm md:text-xl text-gray-400 px-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper
            </p>
          </div>
          <ProductGrid />
        </div>
      </div>
    </div>
  )
}
