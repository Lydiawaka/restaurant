import Image from "next/image"
export default function About() {
    return (
      <section id="about" className="py-20 bg-stone-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif text-center mb-12">Our Story</h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <Image
                src="/images/chf.jpg"
                alt="Chef preparing a dish"
                width={400}
                height={300}
                className="px-6 rounded-lg shadow-lg"
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
  
  