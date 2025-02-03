import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/res.jpg"
          alt="Elegant restaurant interior"
          width={500}
          height={300}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-serif mb-4">La Belle Époque</h1>
        <p className="text-xl md:text-2xl mb-8">Experience culinary excellence</p>
        <Button size="lg" className="font-serif text-lg">
          Reserve a Table
        </Button>
      </div>
    </section>
  )
}

