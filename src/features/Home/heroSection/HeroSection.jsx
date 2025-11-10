import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate()
  return (
    <section className="w-full bg-Cultured h-fit">
      <div className="max-w-7xl mx-auto flex flex-col  items-center justify-between p-10 lg:px-20 py-8">
        <div className="lg:w-full flex flex-col items-center">

          {/* Main hero heading and description */}
          <h1 className="text-4xl lg:text-7xl font-extrabold lg:leading-20 text-black font-Inter text-left md:text-center">
            FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
          </h1>
          <p className="text-gray-600 mt-4 text-xl leading-relaxed text-left font-Quicksand">
            Browse through our diverse range of meticulously crafted garments,
            <br />
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button onClick={()=> navigate("/allProducts")}
          className="bg-black text-white px-10 py-3 mt-6 rounded-full text-base font-medium font-Quicksand hover:scale-105 transition duration-700 cursor-pointer">
            Shop Now
          </button>

          {/* Brand stats */}
          <div className="flex items-center gap-2 md:gap-6 mt-7 mb-4 text-center md:text-left font-Quicksand">
            <div className="border-r-2 border-gray-300">
              <p className="text-xl md:text-4xl text-black mr-4 font-medium">200+</p>
              <p className="text-gray-600 text-xs mt-1 mr-4">International Brands</p>
            </div>
            <div className="border-r-2 border-gray-300">
              <p className="text-xl md:text-4xl text-black mr-4 font-medium">2,000+</p>
              <p className="text-gray-600 text-xs mt-1 mr-4">Hight-Quality Products</p>
            </div>
            <div>
              <p className="text-xl md:text-4xl text-black mr-4 font-medium">30,000+</p>
              <p className="text-gray-600 text-xs mt-1 mr-4">Happy Customers</p>
            </div>
          </div>
        </div>

        {/* HeroImage */}
        {/* <div className="w-full lg:max-w-[600px] flex justify-center relative mt-12 lg:mt-0">
          <img src="/images/header/hero-image.png" alt="Models" className="object-contain relative border-b"/>
        </div> */}
      </div>

      {/* Brands */}
      <div className="w-full overflow-hidden bg-black py-8 -mt-">
        <div className="flex whitespace-nowrap animate-scroll container mx-auto">
          <img src="/images/header/zara.png" className="h-6 md:h-9 mx-6 inline-block"/>
          <img src="/images/header/gucci.png" className="h-6 md:h-9 mx-6 inline-block"/>
          <img src="/images/header/prada.png" className="h-6 md:h-8 mx-6 inline-block"/>
          <img src="/images/header/versace.png" className="h-6 md:h-8 mx-6 inline-block"/>
          <img src="/images/header/calvinKlein.png" className="h-6 md:h-8 mx-6 inline-block"/>
          <img src="/images/header/zara.png" className="h-6 md:h-9 mx-6 inline-block"/>
          <img src="/images/header/gucci.png" className="h-6 md:h-9 mx-6 inline-block"/>
          <img src="/images/header/prada.png" className="h-6 md:h-8 mx-6 inline-block"/>
          <img src="/images/header/versace.png" className="h-6 md:h-8 mx-6 inline-block"/>
          <img src="/images/header/calvinKlein.png" className="h-6 md:h-8 mx-6 inline-block"/>
        </div>
      </div>
    </section>
  );
}
