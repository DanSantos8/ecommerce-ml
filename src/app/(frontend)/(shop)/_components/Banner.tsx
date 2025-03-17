import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
export const Banner = () => {
  return (
    <section className="h-screen w-full relative">
      <div className="flex items-center justify-center">
        <Image src="/banner.jpg" alt="Banner" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-primary/50"></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col gap-10 px-6">
        <h2 className="text-white text-5xl uppercase font-cormorant max-w-5xl text-center">
          Fashion That Stands the Test of Time
        </h2>
        <Button variant="outline">
          Shop Now <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </section>
  )
}

export default Banner
