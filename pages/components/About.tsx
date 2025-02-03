import Image from "next/image"
export default function About() {
    return (
      <section id="about" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://images.unsplash.com/photo-1428515613728-6b4607e44363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Chef preparing a dish"
                width={300}
                height={200}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-12">
              <p className="text-lg text-stone-700 mb-6">
                La Belle Époque was born from a passion for exquisite flavors and a desire to create unforgettable dining
                experiences. Our journey began in the heart of the city, where we set out to blend traditional techniques
                with innovative culinary artistry.
              </p>
              <p className="text-lg text-stone-700">
                Today, we continue to push the boundaries of gastronomy, sourcing the finest ingredients and crafting
                dishes that not only please the palate but also tell a story. Join us for a meal, and become part of our
                ongoing culinary adventure.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  