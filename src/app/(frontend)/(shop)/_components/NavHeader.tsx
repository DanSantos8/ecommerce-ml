import { Button } from '@/components/ui/button'
import { Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Authentication from '../../(auth)/_components/authentication'
import SignInButton from '../../(auth)/_components/sign-in-button'
import NavLinks from './NavLinks'
import { Profile } from './Profile'
import { getMe } from '@/server/actions/auth'
const fetchUsers = async () => {
  'use server'
  const response = await fetch('http://localhost:3000/api/categories?depth=2')

  return response.json()
}

export const NavHeader = async () => {
  const me = await getMe()
  const categories = await fetchUsers()
  const user = me?.user

  return (
    <header className="w-full h-24 bg-background content-center px-4 z-50">
      <div className="flex justify-between items-center h-full container mx-auto">
        <picture>
          <Image src="/logo-dark-img.png" alt="Santine Logo" width={164} height={41} />
        </picture>
        <div className="flex items-center gap-4 h-full">
          <div className="flex group h-full">
            <Button variant="ghost" className="h-full">
              Categorias
            </Button>
            <div
              className="shadow-lg absolute top-24 left-0 w-full bg-background z-50 border-t border-border py-12 
            opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200"
            >
              <div className="container mx-auto">
                <NavLinks categories={categories} />
              </div>
            </div>
          </div>
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
