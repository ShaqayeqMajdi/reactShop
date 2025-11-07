import { useEffect, useState } from "react";
import api from "../../configs/api";
import ProductsCard from "../../shared/productsCard/ProductsCard";
import Error from "../../shared/error/Error";
import LoadingSkeleton from "../../shared/loading/LoadingSkeleton";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get("products")
      .then((response) => setProducts(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
    <div className="flex items-center flex-col md:flex-row justify-end  gap-2 -mb-5 mt-5 ext-base font-bold text-gray-600 font-Quicksand max-w-7xl mx-auto">
        <div>Showing 1-10 of 100 Products</div>
        <div className="flex items-center gap-2">
          <span>Sort by:</span>
          <select className="bg-transparent text-base outline-none text-black font-semibold cursor-pointer">
            <option>Most Popular</option>
            <option>Newest</option>
            <option>Price: Low to High</option>
          </select>
        </div>
      </div>
      
      <div className="flex justify-center gap-2 p-4 my-5 ">
        {error && (
          <div>
            <Error />
          </div>
        )}
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {loading &&
            [...Array(20)].map(() => {
              return <LoadingSkeleton />;
            })}
          {products.map(({ id, title, image, price, category, rating }) => (
            <ProductsCard key={id} id={id} title={title} image={image}
              price={price} category={category} rating={rating}
              />
          ))}
        </div>
      </div>
    </>
  );
}
