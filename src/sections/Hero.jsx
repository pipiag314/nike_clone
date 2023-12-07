import { arrowRight } from "../assets/icons";
import Button from "../components/Button";
import { statistics, shoes } from "../variables";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images/index";
import ShoeComponent from "../components/ShoeComponent";
import { useState } from "react";

const Hero = () => {
  const [imgSrc, setImgSrc] = useState(bigShoe1);


  const changeBigImage = (src) => {
    setImgSrc(src)
  }
  
  return (
    <section
      id="home"
      className="flex flex-col lg:flex-row justify-center min-h-screen max-container">
      <div
        className="relative
                  xl:w-2/5 
                  flex flex-col 
                  justify-center 
                  items-start 
                  w-full 
                  max-xl:padding-x 
                  pt-28">
        <p className="text-xl font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-coral-red inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike Arrivals, Quality
          <br />
          Comfort, and innovation for your active life
        </p>

        <Button content="Show now" icon={arrowRight} />

        <div
          className="flex justify-start items-start flex-wrap w-full 
                        mt-20 gap-16">
          {statistics.map((statistic, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-bold">
                {statistic.value}
              </p>
              <p className="leading-7 font-montserrat text-slate-gray">
                {statistic.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex-1 flex justify-center items-center min-h-screen max-lg:py-40 bg-primary xl:bg-hero xl:bg-cover xl:bg-center bg-hero bg-cover bg-center">
        <img
          src={imgSrc}
          alt="shoe"
          width={610}
          height={500}
          className="object-contain relative z-10 max-w-none"
        />
        <div className="flex sm:gap-6 gap-3 absolute bottom-[-30px] sm:left-[50px] sm:bottom-[-50px]">
            {shoes.map(shoe => (
              <div className={`border-2 rounded-2xl ${imgSrc === shoe.bigShoe ? "border-coral-red" : ""}`} key={shoe.thumbnail} onClick={() => changeBigImage(shoe.bigShoe)}>
                <ShoeComponent shoe={shoe} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
