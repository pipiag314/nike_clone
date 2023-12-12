import CostumerReviews from "./sections/CostumerReviews"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Offer from "./sections/Offer"
import Products from "./sections/Products"
import Quality from "./sections/Quality"
import Services from "./sections/Services"
import Subscribe from "./sections/Subscribe"
import Navbar from "./components/Navbar"
import HamburgerMenu from "./components/HamburgerMenu"
import { navLinks } from "./variables"
import { useState } from "react"

const App = () => {

  const [isMenuOpened, setMenuIsOpened] = useState(false);
  
  return (
    <main className="relative">
      <Navbar setMenuIsOpened={setMenuIsOpened} />
      <HamburgerMenu navLinks={navLinks} setMenuIsOpened={setMenuIsOpened} className={isMenuOpened ? "block" : "hidden"} />
      <section className="xl:padding-large  padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding">
        <Services />
      </section>
      <section className="padding">
        <Offer />
      </section>
      <section className="padding bg-pale-blue">
        <CostumerReviews />
      </section>
      <section className="padding">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;
