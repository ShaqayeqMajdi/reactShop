import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../configs/api";
import Loading from "../../../shared/loading/Loading";
import Error from "../../../shared/error/Error";
import ProductsCard from "../../../shared/productsCard/ProductsCard";

export default function Electronics() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    api.get("products/category/electronics")
      .then((response) => {setProducts(response.data);
      })
      .catch((error) => {setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="relative flex flex-col items-center justify-center w-full py-28 text-center font-Quicksand 
      overflow-hidden bg-linear-to-b from-white via-[#f5f5f5] to-[#e8e8e8]">
        <div className="absolute inset-x-0 -bottom-px">
          <svg viewBox="0 0 1440 320" className="w-full" preserveAspectRatio="none">
            <path fill="#fff" d="M0,320 Q720,160 1440,320Z"></path>
          </svg>
        </div>
        
        <div className="relative z-10 flex flex-col items-center gap-3">
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 drop-shadow-sm">
            Electronics
          </h1>
          <p className="text-gray-500 flex items-center gap-2 text-base">
            <i onClick={() => navigate("/")} 
            className="fa-solid fa-house cursor-pointer text-gray-400 hover:text-gray-600 transition-colors duration-300"></i>
            <span className="text-gray-400 font-bold">&gt;</span>
            <span className="font-semibold text-gray-500">Electronics</span>
          </p>
        </div>
      </div>

      {loading && (
        <div className="flex items-center justify-center">
          <Loading />
        </div>
      )}

      {error && (
        <div className="flex items-center justify-center my-10">
          <Error />
        </div>
      )}

      <div className="flex gap-2 container mx-auto my-5 p-4 justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
          {products.map(({ title, image, id, price, category, rating }) => (
            <ProductsCard id={id} title={title} image={image}key={id}    
            price={price} category={category} rating={rating}/>
          ))}
        </div>
      </div>
    </>
  );
}
