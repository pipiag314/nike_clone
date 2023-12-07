import { products } from "../variables";
import ProductCard from "../components/ProductCard"

const Products = () => {
  return (
    <div
      id="products"
      className="
      max-container
      max-sm:mt-12
    ">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold">
          <span className="text-coral-red">Popular </span>
          Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">
          Whether you're a trendsetter, a minimalist,or a bohemian spirit, find
          outfits that resonate with your unique style. Our diverse range
          ensures there's something for everyone, no matter your taste or mood.
        </p>
      </div>

      <div
        className="
        grid
        lg:grid-cols-4
        md:grid-cols-3
        sm:grid-cols-2
        mt-12
        justify-start
        md:gap-4
        gap-12
      ">
        {products.map((product) => (
          <div key={product.name}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
