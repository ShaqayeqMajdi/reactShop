import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate()
  return (
    <>
      <section className="py-20 px-4 md:px-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative w-full h-fit overflow-hidden rounded-xl shadow-lg">
              <img src="/images/about.png" className="object-cover"/>
            </div>

            <div className="flex flex-col justify-center space-y-8">
              <div className="flex items-center gap-3 text-black/60 font-Quicksand font-semibold text-sm uppercase tracking-widest">
                <div className="w-12 h-px bg-black/30"></div>
                Who We Are
                <div className="w-12 h-px bg-black/30"></div>
              </div>
              <h2 className="font-Inter font-black text-5xl text-black/95 leading-tight">
                Welcome to Shop.co
              </h2>
              <div className="space-y-5 text-gray-700 font-Quicksand text-base md:text-lg leading-relaxed text-justify max-w-xl">
                <p>
                  your one-stop destination for quality products at great
                  prices. We’re passionate about providing our customers with a
                  smooth and enjoyable shopping experience, from browsing to
                  delivery. Our team is dedicated to offering the best service,
                  reliable products, and a customer-first approach. Thank you
                  for choosing us — we’re here to make your shopping simple,
                  secure, and satisfying.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-Inter font-bold text-black"> 20+ </div>
                  <div className="text-sm text-gray-600 font-Quicksand"> Collections </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-Inter font-bold text-black"> 4.9★ </div>
                  <div className="text-sm text-gray-600 font-Quicksand"> Customer Rating </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-Inter font-bold text-black"> 24/7 </div>
                  <div className="text-sm text-gray-600 font-Quicksand"> Global Support </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <button onClick={() => navigate("/allProducts")} className="bg-black/90 text-white rounded-lg px-8 py-4 font-Quicksand font-bold shadow-md hover:shadow-xl hover:translate-y-px transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer">
                  Start Shopping<i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button className="border cursor-pointer border-black/30 text-black rounded-lg px-8 py-4 font-Quicksand font-bold hover:bg-black/5 duration-300">
                  Get in Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center gap-4 mb-6 animation-fade-in">
            <div className="w-16 h-px bg-black/20"></div>
            <span class="font-Quicksand font-semibold text-black/60 uppercase tracking-widest text-sm">
              Our Promise
            </span>
            <div class="w-16 h-px bg-black/20"></div>
          </div>

          <h2 className="text-4xl md:text-7xl font-Inter font-black text-center text-black mb-16 leading-tight animation-slide-up">
            WhyShop.co?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group ">
              <div className="relative transition-all duration-700 group-hover:-rotate-y-12 group-hover:translate-z-8 ">
                <div className="bg-Cultured backdrop-blur-md rounded-3xl p-8  h-full flex flex-col items-center text-center border border-white/30">
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 rounded-full bg-linear-to-br from-black/10 to-black/5 flex items-center justify-center text-4xl ">
                      <i className="fas fa-crown text-black"></i>
                    </div>
                  </div>
                  <h3 className="font-Inter font-bold text-2xl text-black mb-3">Unrivaled Quality</h3>
                  <p className="text-gray-600 font-Quicksand text-sm leading-relaxed">
                    Designed with precision and built to last. <br />
                    <span className="text-black font-bold">
                      Perfection is our baseline.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group ">
              <div className="relative  transition-all duration-700 group-hover:-rotate-y-12 group-hover:translate-z-8 ">
                <div className="bg-Cultured backdrop-blur-md rounded-3xl p-8  h-full flex flex-col items-center text-center border border-white/30">
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl ">
                      <i className="fas fa-bolt text-black"></i>
                    </div>
                  </div>
                  <h3 className="font-Inter font-bold text-2xl text-black mb-3">Swift & Reliable Delivery</h3>
                  <p className="text-gray-600 font-Quicksand text-sm leading-relaxed">
                    Your order is handled with precision and care. <br />
                    <span className="text-black font-bold">
                      Seamless. Secure. On time.
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group ">
              <div className="relative  transition-all duration-700 group-hover:-rotate-y-12 group-hover:translate-z-8 ">
                <div className="bg-Cultured backdrop-blur-md rounded-3xl p-8  h-full flex flex-col items-center text-center border border-white/30">
                  <div className="relative mb-6">
                    <div className="relative w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-4xl ">
                      <i className="fas fa-lock text-black"></i>
                    </div>
                  </div>
                  <h3 className="font-Inter font-bold text-2xl text-black mb-3">Secure Checkout</h3>
                  <p className="text-gray-600 font-Quicksand text-sm leading-relaxed">
                    Protected payments at every step. <br />
                    <span className="text-black font-bold">
                      Your privacy is inviolable.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
