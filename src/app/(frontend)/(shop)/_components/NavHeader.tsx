'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingBag, Search } from 'lucide-react'
import CartDrawer from './CartDrawer'
import { useCartStore } from '@/lib/store'

export const NavHeader = () => {
  const { isCartOpen, openCart, closeCart, getItemsCount } = useCartStore()

  const navLinks = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Shop',
      href: '/shop',
    },
    {
      label: 'Blog',
      href: '/blog',
    },
  ]

  return (
    <header className="container w-full h-24 bg-background content-center mx-auto px-4">
      <div className="flex justify-between container mx-auto items-center">
        <picture>
          <Image src="/logo-dark-img.png" alt="Santine Logo" width={164} height={41} />
        </picture>
        <div className="flex items-center gap-4">
          <ul className="flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="px-4 text-sm hover:text-muted-foreground transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button variant="ghost" size="icon" className="rounded-full">
            <Search className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full cursor-pointer relative"
            onClick={openCart}
          >
            <ShoppingBag className="h-5 w-5" />
            {getItemsCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {getItemsCount()}
              </span>
            )}
          </Button>
        </div>
      </div>

      <CartDrawer isOpen={isCartOpen} onClose={closeCart} />
    </header>
  )
}

export default NavHeader
