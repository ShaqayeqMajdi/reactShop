import { useNavigate } from "react-router-dom";

export default function Category(){
  const navigate = useNavigate()
     return (
    <section className=" px-4 py-12 w-full bg-Cultured">
      <h1 className="text-4xl md:text-5xl text-center text-black font-bold mb-12 font-Inter">
        Shop by Category
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-Quicksand font-bold max-w-7xl mx-auto">
        <div className="bg-white/50 rounded-2xl p-4 card-shadow flex flex-col">
          <div className="w-full h-56 md:h-64 overflow-hidden rounded-l-full bg-gray-200 flex items-center justify-center">
            <img src="public/images/category/men.png" alt="product" className="object-cover w-full h-full"/>
          </div>
          <button onClick={() => navigate("/men")}
          className="text-lg text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-400 hover:text-xl duration-1000">
            Men
          </button>
        </div>

        <div className="bg-white/50 rounded-2xl p-4 card-shadow flex flex-col ">
          <div className="w-full h-56 md:h-64 overflow-hidden rounded-t-full bg-gray-200 flex items-center justify-center">
            <img src="public/images/category/women.png" alt="product" className="object-cover w-full h-full"/>
          </div>
          <button onClick={() => navigate("/women")}
          className="text-lg text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-400 hover:text-xl duration-1000">
            Women
          </button>
        </div>

        <div className="bg-white/50 rounded-2xl p-4 card-shadow flex flex-col ">
          <div className="w-full h-56 md:h-64 overflow-hidden rounded-b-full bg-gray-200 flex items-center justify-center">
            <img src="public/images/category/Jewelry.png" alt="product" className="object-contain w-4/5 h-full"/>
          </div>
          <button onClick={() => navigate("/jewelry")}
          className="text-lg text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-400 hover:text-xl duration-1000">
            Jewelry
          </button>
        </div>

        <div className="bg-white/50 rounded-2xl p-4 card-shadow flex flex-col ">
          <div className="w-full h-56 md:h-64 overflow-hidden rounded-r-full  bg-gray-200 flex items-center justify-center">
            <img src="public/images/category/Electronics.png" alt="product" className="object-contain w-3/5 h-full -ml-8"/>
          </div>
          <button onClick={()=> navigate("/electronics")}
          className="text-lg text-center text-gray-600 mt-4 cursor-pointer hover:text-gray-400 hover:text-xl duration-1000">
            Electronics
          </button>
        </div>
      </div>
    </section>
  );
}