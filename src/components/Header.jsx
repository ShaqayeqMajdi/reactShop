import { useEffect, useState } from "react";
import api from "../configs/api";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    api.get("products/categories")
      .then((response) => setCategories(response.data))
      .catch((error) => setError("Failed to load categories!"));
  }, []);

  const categoryPath = (cat) => {
    switch (cat) {
      case "men's clothing":
        return "men";
      case "women's clothing":
        return "women";
      case "jewelery":
        return "jewelry";
      case "electronics":
        return "electronics";
      default:
        return cat;
    }
  };
  return (
    <>
      <div className="bg-black p-2 text-white text-center font-Quicksand">
        <p className="font-normal text-sm">
          Sign up and get 20% off to your first order.
          <a href="#" className="ml-1 border-b font-medium">Sign Up Now</a>
        </p>
        <button className="hidden md:block absolute top-1.5 right-20 cursor-pointer">
          <img src="/icons/close.svg" className="w-7 h-7" alt="close" />
        </button>
      </div>

      {/* NavBar */}
      <nav className="flex justify-between items-center px-4 py-6 font-Quicksand container mx-auto">
        {/* Left Side: Logo + Menu */}
        <div className="flex items-center gap-4">
          <button onClick={() => setMenuOpen(true)}>
            <img className="w-7 h-7 md:hidden cursor-pointer" src="/icons/menu.svg" alt="mobile-menu"/>
          </button>

          <img src="/images/header/logo.png" alt="logo" onClick={() => navigate("/")} className="md:w-36 w-28"/>
          <ul className="hidden md:flex items-center gap-4 whitespace-nowrap text-black font-medium">
            <li className="relative group flex items-center gap-1 cursor-pointer hover:text-neutral-600">Shop
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
              <img src="/icons/chevron-down.svg" alt="down-icon" className="w-4 h-4"/>
              {/*Dropdown for Categories */}
              <div className="absolute top-full -left-5 mt-2 w-56 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-md rounded-2xl p-3 flex flex-col
               gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                {error ? (
                  <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg shadow-inner">
                    <div className="font-bold text-sm text-red-600">
                      {error}
                    </div>
                  </div>
                ) : (
                  <nav className="flex flex-col divide-y divide-gray-100 space-y-1">
                      {categories?.map((cat) => (
                      <a href={`/${categoryPath(cat)}`}
                        className="flex items-center justify-between text-gray-800 font-Quicksand text-[15px] font-medium capitalize 
                        px-3 py-2 rounded-lg transition-all duration-500 hover:bg-gray-50">
                        {cat}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-70 flex-none" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"/>
                        </svg>
                      </a>
                    ))}
                  </nav>
                )}
              </div>
            </li>
            <li onClick={() => navigate("/allproducts")} className="cursor-pointer relative group hover:text-neutral-600">Products
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
            <li className="cursor-pointer relative group hover:text-neutral-600">New arrivals
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
            <li className="cursor-pointer relative group hover:text-neutral-600">Brands
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
          </ul>
        </div>

          {/* Mobile Menu */}
  <div
  className={`md:hidden fixed top-0 left-0 h-full w-72 bg-white shadow-2xl flex flex-col z-50 p-6 transition-transform duration-500 ease-in-out rounded-r-3xl overflow-hidden
    ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
>
  <div className="flex justify-between items-center mb-8">
    <img src="/images/header/logo.png" alt="logo" className="w-40" />
    <button
      onClick={() => setMenuOpen(false)}
      className="p-3 rounded-xl bg-Cultured/50 hover:bg-Cultured transition duration-300 group"
    >
      <img
        className="w-6 h-6 filter grayscale group-hover:grayscale-0 transition"
        src="/icons/close-black.svg"
        alt="close-menu"
      />
    </button>
  </div>
  <nav className="space-y-1 font-Quicksand font-semibold text-gray-700">
    
    <div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-Cultured transition-all duration-300 cursor-pointer border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-linear-to-r from-gray-400 to-gray-600 rounded-full group-hover:from-gray-400 group-hover:to-neutral-400 transition-all duration-300"></div>
        <span className="text-lg group-hover:text-gray-900 transition">Shop</span>
      </div>
      <i className="fa-solid fa-chevron-right text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-600 transition-all duration-300"></i>
    </div>

    <div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-Cultured transition-all duration-300 cursor-pointer border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-linear-to-r from-gray-400 to-gray-600 rounded-full group-hover:from-gray-400 group-hover:to-neutral-400 transition-all duration-300"></div>
        <span className="text-lg group-hover:text-gray-900 transition">On Sale</span>
      </div>
      <i className="fa-solid fa-chevron-right text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-600 transition-all duration-300"></i>
    </div>


    <div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-Cultured transition-all duration-300 cursor-pointer border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-linear-to-r from-gray-400 to-gray-600 rounded-full group-hover:from-gray-400 group-hover:to-neutral-400 transition-all duration-300"></div>
        <span className="text-lg group-hover:text-gray-900 transition">New Arrivals</span>
      </div>
      <i className="fa-solid fa-chevron-right text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-600 transition-all duration-300"></i>
    </div>


    <div className="group flex items-center justify-between p-4 rounded-2xl hover:bg-Cultured transition-all duration-300 cursor-pointer border-b border-gray-100">
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 bg-linear-to-r from-gray-400 to-gray-600 rounded-full group-hover:from-gray-400 group-hover:to-neutral-400 transition-all duration-300"></div>
        <span className="text-lg group-hover:text-gray-900 transition">Brands</span>
      </div>
      <i className="fa-solid fa-chevron-right text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-hover:text-gray-600 transition-all duration-300"></i>
    </div>

  </nav>

</div>

        {/* Right Side: Search, Cart, Profile */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center bg-Cultured px-4 py-2.5 rounded-full font-bold text-neutral-600">
            <img src="/icons/search.svg" alt="search" className="w-5 h-5 mr-2 cursor-pointer"/>
            <input type="text" placeholder="Search for products..." className="bg-transparent w-[300px] xl:w-[450px] 2xl:[650px] focus:outline-none"/>
          </div>
          <button className="lg:hidden">
            <img src="/icons/mobile-search.svg" alt="search" className="w-6 h-6 ml-4 cursor-pointer"/>
          </button>

          <button onClick={() => navigate("/cart")}>  
            <img src="/icons/cart.svg" alt="cart" className="w-6 h-6 cursor-pointer"/>
          </button>

          <button>
            <img src="/icons/user.svg" alt="profile" className="w-6 h-6 cursor-pointer"/>
          </button>
        </div>
      </nav>
    </>
  );
}
