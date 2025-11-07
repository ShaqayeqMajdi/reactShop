export default function Header() {
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
          <button>
            <img className="w-7 h-7 md:hidden cursor-pointer" src="/icons/menu.svg" alt="mobile-menu"/>
          </button>

          <img src="/images/header/logo.png" alt="logo" className="md:w-36 w-28"/>
          <ul className="hidden md:flex items-center gap-4 whitespace-nowrap text-black font-medium">
            <li className="relative group flex items-center gap-1 cursor-pointer hover:text-neutral-600">
              Shop
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
              <img src="/icons/chevron-down.svg" alt="down-icon" className="w-4 h-4"/>
              {/*Dropdown for Categories */}
              <div className="absolute top-full -left-5 mt-2 w-56 bg-white/95 backdrop-blur-sm border border-gray-100 shadow-md rounded-2xl p-3 flex flex-col
               gap-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <nav></nav>
              </div>
            </li>
            <li className="cursor-pointer relative group hover:text-neutral-600">
              on sale
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
            <li className="cursor-pointer relative group hover:text-neutral-600">
              new arrivals
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
            <li className="cursor-pointer relative group hover:text-neutral-600">
              brands
              <span className="absolute left-0 -bottom-1 h-px w-0 transition-all duration-500 ease-out group-hover:w-full bg-neutral-600"></span>
            </li>
          </ul>
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

          <button>
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
