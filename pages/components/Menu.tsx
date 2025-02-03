import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const menuItems = [
  {
    name: "Lobster Bisque",
    description: "Creamy lobster soup with a touch of brandy",
    price: "$18",
    image:
      "https://images.unsplash.com/photo-1583835746434-cf1534674b41?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    name: "Beef Wellington",
    description: "Tender beef fillet wrapped in puff pastry",
    price: "$42",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    name: "Crème Brûlée",
    description: "Classic French dessert with a caramelized sugar crust",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1470324161839-ce2bb6fa6bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
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
              <Image src={item.image || "/placeholder.svg"} alt={item.name} height={300} width={300} className="w-full h-48 object-cover" />
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

