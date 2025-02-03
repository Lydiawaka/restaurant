import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const menuItems = [
  {
    name: "Lobster Bisque",
    description: "Creamy lobster soup with a touch of brandy",
    price: "$18",
    image: "/images/lobster.jpg",
  },
  {
    name: "Beef Wellington",
    description: "Tender beef fillet wrapped in puff pastry",
    price: "$42",
    image: "/images/beef.jpg",
  },
  {
    name: "Crème Brûlée",
    description: "Classic French dessert with a caramelized sugar crust",
    price: "$12",
    image: "/images/chc.jpg",
  },
]

export default function Menu() {
  return (
    <section id="menu" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-serif text-center mb-12">Our Signature Dishes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <Image src={item.image} alt={item.name} height={300} width={300} className="w-full h-48 object-cover" />
              <CardContent className="p-6">
                <h3 className="text-xl font-serif mb-2">{item.name}</h3>
                <p className="text-stone-600 mb-4">{item.description}</p>
                <p className="text-lg font-semibold">{item.price}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

