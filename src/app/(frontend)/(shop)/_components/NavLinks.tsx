import {
  NavigationMenu,
  NavigationMenuTrigger,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuContent,
} from '@/components/ui/navigation-menu'
import Link from 'next/link'

export const NavLinks = ({ categories }: { categories: any }) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {categories.docs.map((category: any) => (
        <div className="col-span-4">
          <div key={category.id} className="flex flex-col gap-4">
            <Link href={`/shop/${category.slug}`} className="text-sm font-bold uppercase">
              {category.name}
            </Link>
            {category.subcategories.docs.map((subcategory: any) => (
              <Link
                key={subcategory.id}
                href={`/shop/${category.slug}/${subcategory.slug}`}
                className="text-base capitalize text-muted-foreground font-light"
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default NavLinks
