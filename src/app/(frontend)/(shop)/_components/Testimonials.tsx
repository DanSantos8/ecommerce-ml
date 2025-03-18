import { cn } from '@/lib/utils'
import { Star } from 'lucide-react'

export const Testimonials = () => {
  const renderTestimonial = () => {
    return (
      <div className="flex flex-col gap-10 items-center justify-center h-96">
        <div className="flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="w-5 h-5 text-white fill-white" />
          ))}
        </div>
        <p className="text-white font-light ">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        </p>
        <p className="text-muted-foreground">John Doe</p>
      </div>
    )
  }

  return (
    <section className="bg-primary px-6 py-20">
      <h2 className="text-white text-4xl uppercase text-center pb-10 font-cormorant">
        WHAT OUR CUSTOMERS SAID
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 border-y border-muted-foreground">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index}>{renderTestimonial()}</div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
