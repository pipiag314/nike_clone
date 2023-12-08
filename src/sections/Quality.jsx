import Button from "../components/Button";
import { shoe8 } from "../assets/images/index";

const Quality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-5 w-full max-container">
      <div className="flex flex-1 flex-col text-center">
        <h2 className="xl:text-8xl text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Quality </span>
          Meets Affordability
        </h2>
        <p className="font-montserrat font-normal text-slate-gray mt-5">
          We believe in offering the best of both worlds. Revel in high-quality
          fabrics, impeccable craftsmanship, and on-trend designs without
          breaking the bank. Your style evolution starts here.
        </p>
        <div className="w-full flex justify-center">
          <Button className="w-2/3 mt-5 py-5 hover:text-black transition duration-200" content="View Details" />
        </div>
      </div>
      <div>
        <img src={shoe8} className="overflow-hidden" />
      </div>
    </section>
  );
};

export default Quality;
