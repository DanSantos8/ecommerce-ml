import { stringify } from 'qs-esm'
import React from 'react'
import { Hero } from './_components'
import ProductCarousel from './_components/ProductCarousel'
import type { Where } from 'payload'
import { ProductCollection } from '@/payload-types'
import CategoryNavigation from './_components/CategoryNavigation'
import Testimonials from './_components/Testimonials'
import Banner from './_components/Banner'

const query: Where = {
  type: {
    equals: 'winter',
  },
}
const fetchCollections = async () => {
  'use server'
  const stringifiedQuery = stringify(
    {
      where: query,
    },
    { addQueryPrefix: true },
  )
  const res = await fetch(`http://localhost:3000/api/product-collection${stringifiedQuery}&depth=1`)
  const data = await res.json()

  return data.docs as ProductCollection[]
}

export default async function HomePage() {
  const collections = await fetchCollections()

  return (
    <div className="grid grid-cols-12 pb-10">
      <div className="col-span-12">
        <Hero />
      </div>
      <div className="col-span-12 px-10 py-20">
        <ProductCarousel collections={collections} />
      </div>
      <div className="col-span-12">
        <Banner />
      </div>
      <div className="col-span-12">
        <Testimonials />
      </div>
      <div className="col-span-12">
        <CategoryNavigation />
      </div>
    </div>
  )
}
