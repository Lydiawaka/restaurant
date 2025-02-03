import React from 'react'
import Image from 'next/image'
import Header from './components/Header'
import Footer from './components/Footer'

const menu = () => {
    const dishes = [
        {
          name: "Foie Gras Terrine",
          description: "Duck liver pâté with fig compote and toasted brioche",
          price: "$24",
          image: "/images/fchic.jpg",
        },
        {
          name: "Lobster Bisque",
          description: "Creamy lobster soup with cognac and crème fraîche",
          price: "$18",
          image: "/images/lobster.jpg",
        },
        {
          name: "Beef Wellington",
          description: "Tender filet mignon wrapped in puff pastry with mushroom duxelles",
          price: "$42",
          image: "/images/beef.jpg",
        },
        {
          name: "Coq au Vin",
          description: "Classic French braised chicken with red wine, bacon, and pearl onions",
          price: "$32",
          image: "/images/pan.jpg",
        },
        {
          name: "Truffle Risotto",
          description: "Arborio rice with black truffle, porcini mushrooms, and Parmigiano-Reggiano",
          price: "$36",
          image: "/images/fchic.jpg",
        },
        {
          name: "Pan-Seared Sea Bass",
          description: "With saffron beurre blanc, asparagus, and fingerling potatoes",
          price: "$38",
          image: "/images/chc.jpg",
        },
        {
          name: "Rack of Lamb",
          description: "Herb-crusted New Zealand lamb with rosemary jus and ratatouille",
          price: "$44",
          image: "/images/chips.jpg",
        },
        {
          name: "Chateaubriand for Two",
          description: "Center-cut beef tenderloin with béarnaise sauce and chateau potatoes",
          price: "$85",
          image: "/images/lobster.jpg",
        },
        {
          name: "Crème Brûlée",
          description: "Classic vanilla custard with caramelized sugar crust",
          price: "$12",
          image: "/images/chc.jpg",
        },
        {
          name: "Chocolate Soufflé",
          description: "Warm chocolate soufflé with Grand Marnier crème anglaise",
          price: "$14",
          image: "/images/pan.jpg",
        },
      ]
  return (
    <div>
      <Header />
      <div className="min-h-screen bg-cream-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl text-center text-gray-900 mb-8">
          La Maison Élégante
        </h1>
        <div className="bg-stone-800 shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className=" text-3xl text-center text-white mb-6">Menu</h2>
            <div className="flex justify-center">
                <Image
                    src="/images/terrine.jpg"
                    alt="menu"
                    width={300}
                    height={100}
                    className="rounded-lg"
                />
            </div>
            <ul className="space-y-8">
              {dishes.map((dish, index) => (
                <li key={index} className="border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
                  <div className="md:flex md:items-center">
                    <div className="md:flex-shrink-0">
                      <Image
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        width={300}
                        height={200}
                        className="h-48 w-full object-cover md:w-60 rounded-lg"
                      />
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <div className="flex justify-between items-baseline">
                        <h3 className="text-xl text-gray-100" >{dish.name}</h3>
                        <span className="text-lg text-gray-100">{dish.price}</span>
                      </div>
                      <p className="mt-2 text-gray-100">{dish.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </div>
  )
}

export default menu
