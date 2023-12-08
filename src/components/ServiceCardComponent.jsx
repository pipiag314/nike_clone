const ServiceCardComponent = ({ service }) => {
  return (
    <div 
        className="w-[300px] md:w-[350px] rounded-2xl shadow-3xl px-10 py-16"
    >
        <div>
            <img className="bg-coral-red rounded-md p-1" src={service.imgURL} />
        </div>
        <h1 className="text-xl font-bold font-palanquin mt-3">{service.label}</h1>
        <p className="mt-3 font-montserrat text-slate-gray">{service.subtext}</p>
    </div>
  )
}

export default ServiceCardComponent