import { services } from "../variables/index"
import ServiceCardComponent from "../components/ServiceCardComponent"

const Services = () => {
  return (
    <section 
      className="max-container flex flex-col"
    >
      <h1 className="text-center text-4xl font-bold font-palanquin">
        What are
        <span className="text-coral-red"> Services </span> 
        we offering?
      </h1>
      <div className="flex justify-center flex-wrap gap-16 mt-10">
        {services.map(service => (
          <ServiceCardComponent service={service} />
        ))}
      </div>
    </section>
  )
}

export default Services