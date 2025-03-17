import { EyeIcon, HeartIcon, ShoppingBagIcon } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Product } from '@/payload-types'
import { cn } from '@/lib/utils'

export const ProductCard = (props: Product) => {
  const { name, price, id } = props

  // Usar a primeira imagem do produto ou uma imagem padrão
  /*   const productImage =
    Array.isArray(images) && images.length > 0
      ? typeof images[0] === 'string'
        ? images[0]
        : images[0]?.url
      : '/hero/hero-slide-1.jpg' */

  return (
    <div className="group relative flex flex-col">
      <div className="absolute left-4 top-4 z-10">
        <span className="bg-black text-white text-xs px-2 py-1 font-light">NOVO</span>
      </div>

      <div className="absolute right-4 top-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <Button
          className="bg-white hover:bg-white/90 rounded-full w-9 h-9 shadow-md"
          size="sm"
          variant="ghost"
        >
          <HeartIcon className="w-5 h-5 text-gray-700" />
        </Button>
      </div>

      <div className="relative h-[400px] overflow-hidden pb-4">
        <Link href={`/products/${id}`}>
          <div className="w-full h-full">
            <Image
              fill
              src="/shirt.jpg"
              alt={name || 'Product image'}
              className="object-cover transition-all duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </Link>

        <div className="absolute bottom-0 left-0 right-0 flex opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0">
          <Button className="flex-1 rounded-none bg-black hover:bg-gray-800 text-white py-3 text-sm font-light">
            <ShoppingBagIcon className="w-4 h-4 mr-2" /> Adicionar
          </Button>
          <Button className="flex-1 rounded-none bg-gray-100 hover:bg-gray-200 text-black py-3 text-sm font-light">
            <EyeIcon className="w-4 h-4 mr-2" /> Detalhes
          </Button>
        </div>
      </div>

      <div className="flex flex-col space-y-2 px-1 pt-2">
        <Link href={`/products/${id}`} className="group-hover:underline">
          <h3 className="text-base font-medium text-gray-900 tracking-wider">{name}</h3>
        </Link>
        <p className="text-sm font-light text-gray-800">R$ {price?.toFixed(2)}</p>
      </div>
    </div>
  )
}
