import React from 'react'
import { Hero } from './_components'

export default async function HomePage() {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-12">
        <Hero />
      </div>
    </div>
  )
}
