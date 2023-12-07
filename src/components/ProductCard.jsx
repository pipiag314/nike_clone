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
      <div className="mt-6 gap-1 flex justify-between px-4 font-bold">
        <p className="flex gap-2">
            <img src={star} width={24} height={24} />
            {product.rating}
        </p>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
