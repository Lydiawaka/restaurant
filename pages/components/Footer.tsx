export default function Footer() {
    return (
      <footer className="bg-stone-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between">
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-serif mb-4">La Belle Époque</h3>
              <p>123 Gourmet Street</p>
              <p>Culinary City, CC 12345</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div className="w-full md:w-1/3 mb-6 md:mb-0">
              <h3 className="text-xl font-serif mb-4">Hours</h3>
              <p>Monday - Thursday: 5pm - 10pm</p>
              <p>Friday - Saturday: 5pm - 11pm</p>
              <p>Sunday: 4pm - 9pm</p>
            </div>
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-serif mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-stone-300">
                  Facebook
                </a>
                <a href="#" className="hover:text-stone-300">
                  Instagram
                </a>
                <a href="#" className="hover:text-stone-300">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-stone-400">
            <p>&copy; 2025 La Belle Époque. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }
  
  