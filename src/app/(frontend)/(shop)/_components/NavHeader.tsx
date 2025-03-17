'use client'

import { Button } from '@/components/ui/button'
import { Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import Authentication from '../../(auth)/_components/authentication'
import SignInButton from '../../(auth)/_components/sign-in-button'
import NavLinks from './NavLinks'
import { Profile } from './Profile'
import { Category } from '@/payload-types'
type NavHeaderProps = {
  me: {
    user: {
      id: string
      email: string
      firstName: string
      lastName: string
    }
  }
  categories: {
    docs: Category[]
  }
}

export const NavHeader = ({ me, categories }: NavHeaderProps) => {
  const user = me?.user

  return (
    <header className="w-full fixed top-0 left-0 px-4 z-50 transition-colors duration-300 bg-white py-2">
      <div className="flex justify-between items-center h-full container mx-auto">
        <picture className="flex-shrink-0">
          <Image src="/logo-dark-img.png" alt="Santine Logo" width={120} height={30} />
        </picture>
        <div className="flex items-center gap-6 h-full justify-center flex-1">
          <Link href="/shop/all" className="px-4 py-2 text-primary transition-colors">
            Shop
          </Link>
          {categories.docs.map((category) => (
            <Link
              key={category.id}
              href={`/shop/${category.slug}`}
              className="px-4 py-2 text-primary transition-colors"
            >
              {category.name}
            </Link>
          ))}
          <Link href="/blog" className="px-4 py-2 text-primary transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="px-4 py-2 text-primary transition-colors">
            Contato
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search />
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full">
            <ShoppingCart />
          </Button>
          {user ? <Profile user={user} /> : <SignInButton />}
        </div>
      </div>
      <Authentication />
    </header>
  )
}

export default NavHeader
