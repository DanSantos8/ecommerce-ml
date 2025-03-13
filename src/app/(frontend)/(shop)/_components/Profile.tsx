import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { User, MapPin, ShoppingBag } from 'lucide-react'
import Link from 'next/link'
import { LogoutButton } from '@/app/(frontend)/(auth)/_components/logout-button'
interface ProfileProps {
  user: {
    firstName: string
    email: string
  }
}

export const Profile = ({ user }: ProfileProps) => {
  const { firstName, email } = user

  const profileLinks = [
    {
      label: 'Minha conta',
      href: '/profile/account',
      icon: <User className="w-4 h-4" />,
    },
    {
      label: 'Meus endereços',
      href: '/profile/addresses',
      icon: <MapPin className="w-4 h-4" />,
    },
    {
      label: 'Meus pedidos',
      href: '/profile/orders',
      icon: <ShoppingBag className="w-4 h-4" />,
    },
  ]
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="rounded-full">
          <User />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 divide-border border-b-foreground divide-y-2 divide-y-border">
            <div className="flex items-center pb-2">
              <p className="text-sm capitalize">Olá, {firstName}</p>
            </div>
            <ul className="flex flex-col gap-3">
              {profileLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-foreground pl-1"
                  >
                    {link.icon} {link.label}
                  </Link>
                </li>
              ))}
              <li className="flex items-center gap-2 text-sm text-foreground">
                <LogoutButton />
              </li>
            </ul>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default Profile
