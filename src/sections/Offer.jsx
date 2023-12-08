import Button from "../components/Button";
import { offer } from "../assets/images/index";
import { arrowRight } from "../assets/icons/index";

const Offer = () => {
  return (
    <section className="flex items-center max-xl:flex-col-reverse max-xl:gap-10 max-container">
      <div className="">
        <img src={offer} width={773} height={687} className="object-contain" />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="xl:text-8xl text-4xl font-bold font-palanquin">
          <span className="text-coral-red">Special </span>
          Offer
        </h2>
        <p className="font-montserrat font-normal text-slate-gray mt-5">
          Ready to elevate your shoe game? Dive into the ultimate footwear
          experience with [Your Shoe Store Name]! For a limited time, we're
          delighted to offer you an exclusive 30% discount on our entire range
          of stylish shoes
          <br />
          <br />
          Walk with confidence in our trendsetting collection that seamlessly
          blends style and comfort. From casual kicks to statement heels, we
          have the perfect pair for every occasion.
        </p>
        <div className="w-full flex justify-start px-10 gap-5">
          <Button
            className="mt-5 py-5 hover:text-black transition duration-200"
            content="View Details"
            icon={arrowRight}
          />
          <Button
            className="mt-5 py-5 px-7 bg-white text-coral-red hover:text-black transition duration-200"
            content="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
