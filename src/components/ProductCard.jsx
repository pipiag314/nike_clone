import { star } from "../assets/icons";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        flex
        flex-1
        flex-col
        w-[310px]
    ">
      <img
        className="
            w-[300px]
            h-[300px]
        "
        src={product.imgURL}
      />
      <div className="mt-3 gap-1 flex flex-col px-4 font-bold">
        <p className="flex gap-2 text-slate-gray">
            <img src={star} width={24} height={24} />
            {product.rating}
        </p>
        <h2 className="text-xl leading-normal font-medium font-palanquin">{product.name}</h2>
        <p className="font-bold font-montserrat text-coral-red">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
