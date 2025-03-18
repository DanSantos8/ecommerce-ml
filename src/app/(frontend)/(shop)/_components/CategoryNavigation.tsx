import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const CategoryNavigation = () => {
  const categories = [
    {
      name: 'Casual',
      image: '/categories/casual.jpg',
      href: '/shop/category/casual',
    },
    {
      name: 'Essentials',
      image: '/categories/essentials.jpg',
      href: '/shop/category/essentials',
    },
    {
      name: 'Golden Hour',
      image: '/categories/any-occasion.jpg',
      href: '/shop/category/golden-hour',
    },
  ]
  return (
    <section className="grid md:grid-cols-3">
      {categories.map((category, index) => (
        <Link
          key={index}
          href={category.href}
          className="bg-gray-100 h-[635px] relative group overflow-hidden"
        >
          <div className="absolute inset-0">
            <Image
              src={category.image}
              alt="Category"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <h2 className="text-white text-2xl uppercase">{category.name}</h2>
          </div>
          <div className="absolute bottom-0 left-0 p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 w-full flex justify-center">
            <p className="text-white text-sm uppercase flex items-center gap-2">
              See collections <ArrowUpRight className="w-4 h-4" />
            </p>
          </div>
        </Link>
      ))}
    </section>
  )
}

export default CategoryNavigation
