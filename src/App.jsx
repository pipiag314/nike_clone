import CostumerReviews from "./sections/CostumerReviews"
import Footer from "./sections/Footer"
import Hero from "./sections/Hero"
import Offer from "./sections/Offer"
import Products from "./sections/Products"
import Quality from "./sections/Quality"
import Services from "./sections/Services"
import Subscribe from "./sections/Subscribe"
import Navbar from "./components/Navbar"

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-large  padding-b">
        <Hero />
      </section>
      <section className="padding">
        <Products />
      </section>
      <section className="padding">
        <Quality />
      </section>
      <section className="padding-x">
        <Services />
      </section>
      <section className="padding">
        <Offer />
      </section>
      <section className="padding bg-pale-blue">
        <CostumerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  )
}

export default App;
