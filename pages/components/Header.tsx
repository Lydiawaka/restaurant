import Link from "next/link"


export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-90 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold text-stone-800">
          La Belle Époque
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="#about" className="text-stone-600 hover:text-stone-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/menu" className="text-stone-600 hover:text-stone-900">
                Menu
              </Link>
            </li>
            <li>
              <Link href="#reservation" className="text-stone-600 hover:text-stone-900">
                Reservation
              </Link>
            </li>
          </ul>
        </nav>
        <Link href="/components/Reservation" className="font-serif">
          Book a Table
        </Link>
      </div>
    </header>
  )
}

