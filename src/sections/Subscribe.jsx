import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="
        max-container
        flex
        justify-center
        items-center
        max-lg:flex-col
        gap-10
      ">
      <h2 className="text-xl lg:max-w-md font-bold font-palanquin">
        Sign Up for
        <span className="text-coral-red"> Updates </span>& Newsletter
      </h2>
      <div className="flex max-sm:flex-col max-sm:gap-5 items-center w-full lg:max-w-[40%] sm:border sm:border-slate-gray p-1 rounded-full">
        <input type="text" placeholder="Subscribe@nike.com" className="input" />
        <Button content="Subscribe" className="max-sm:w-full" />
      </div>
    </section>
  );
};

export default Subscribe;
