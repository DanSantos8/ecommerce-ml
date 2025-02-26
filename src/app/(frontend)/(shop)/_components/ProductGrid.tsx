import { Button } from '@/components/ui/button'
import { EyeIcon, HeartIcon } from 'lucide-react'
import Image from 'next/image'

export const ProductGrid = () => {
  return (
    <ul className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
      {Array.from({ length: 8 }).map((_, index) => (
        <li className="flex flex-col gap-4 rounded-sm overflow-hidden relative" key={index}>
          <div className="absolute right-4 top-4 z-10 lg:hidden">
            <Button className="bg-white rounded-full w-8 h-8" size="sm" variant="ghost">
              <HeartIcon />
            </Button>
          </div>
          <div className="group relative h-80 overflow-hidden">
            <Image fill src="/hero/hero-slide-1.jpg" alt="Product 1" className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-white h-0 group-hover:h-8 transition-all duration-300">
              <div className="hidden lg:gap-0.5 lg:flex">
                <Button className="rounded-none bg-black text-white flex-1 text-xs" size="sm">
                  Quicklook <EyeIcon />
                </Button>
                <Button className="rounded-none bg-black text-white flex-1 text-xs" size="sm">
                  Wishlist <HeartIcon />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <h2 className="text-primary text-xl">Leather Purse</h2>
            <span className="text-muted-foreground text-sm">$60</span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ProductGrid
