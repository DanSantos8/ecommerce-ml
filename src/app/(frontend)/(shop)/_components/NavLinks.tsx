import { Category, SubCategory } from '@/payload-types'
import Link from 'next/link'

interface NavLinksProps {
  categories: {
    docs: Category[]
  }
}

export const NavLinks = ({ categories }: NavLinksProps) => {
  return (
    <div className="grid grid-cols-12 gap-4">
      {categories.docs.map((category: Category) => {
        const subCategories = category?.subCategories?.docs as SubCategory[]

        return (
          <div className="col-span-3" key={category.id}>
            <div className="flex flex-col gap-4">
              <Link href={`/shop/${category.slug}`} className="text-sm font-bold uppercase">
                {category.name}
              </Link>
              {subCategories.map((subcategory) => (
                <Link
                  key={subcategory?.id}
                  href={`/shop/${category.slug}/${subcategory?.slug}`}
                  className="text-base capitalize text-muted-foreground font-light"
                >
                  {subcategory?.name}
                </Link>
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default NavLinks
