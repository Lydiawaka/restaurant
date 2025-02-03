"use client"
import About from "./components/About"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Menu from "./components/Menu"
import Reservation from "./components/Reservation"
import Footer from "./components/Footer"
export default function Index() {
  return (
    <main>
      <div>
        <Header />
        <Hero />
        <About />
        <Menu />
        <Reservation />
        <Footer />
      </div>
    </main>
  )
}