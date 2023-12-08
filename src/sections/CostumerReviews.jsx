import { reviews } from "../variables";
import ReviewCardComponent from "../components/ReviewCardComponent";

const CostumerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-4xl text-center font-bold">
        What Our
        <span className="text-coral-red"> Costumers </span>
        Are Saying?
      </h3>
      <p className="text-center text-slate-gray font-normal font-montserrat mt-3">
        We take immense pride in curating an unparalleled shopping experience,
        and our customers' <br /> feedback speaks volumes about their journey with us
      </p>

      <div className="mt-20 flex flex-1 justify-evenly items-center max-lg:flex-col gap-12">
        {reviews.map(review => (
          <ReviewCardComponent key={review.customerName} review={review} />
        ))}
      </div>
      
    </section>
  );
};

export default CostumerReviews;
