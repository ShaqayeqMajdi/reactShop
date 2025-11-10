import { useNavigate } from "react-router-dom";

export default function CartPage(){
    const navigate = useNavigate()
     return (
    <div className="bg-white min-h-screen px-4 py-8 flex flex-col gap-6 md:flex-row md:items-start md:justify-center md:gap-8 font-Quicksand">
      <div className="w-full max-w-3xl bg-white rounded-2xl p-4 md:p-6 border border-gray-200">
          <div className="flex flex-col items-center justify-center text-center text-gray-500">
            <img src="/images/emptyCart.jpg" alt="Empty cart" className="w-72 h-72 mb-6 object-contain opacity-80"/>
            <h2 className="text-xl font-semibold text-gray-700">
              Your Cart is Empty!
            </h2>
            <button onClick={() => navigate("/")}
              className="px-4 py-2 rounded-xl bg-gray-200 font-bold text-cyan-900 opacity-80 hover:shadow-md duration-500 mt-4 cursor-pointer">
              continue shopping
            </button>
          </div>
      </div>

      {/* Order Summary */}
      <div className="w-full md:w-[410px] bg-white rounded-2xl border border-gray-200 p-4 md:p-6">
        <h3 className="text-xl font-bold mb-4">Order Summary</h3>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Subtotal</span>
          <span className="font-semibold text-black">$565</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-2">
          <span>Discount (-20%)</span>
          <span className="font-semibold text-red-500">-$113</span>
        </div>
        <div className="flex justify-between text-gray-700 mb-4">
          <span>Delivery Fee</span>
          <span className="font-semibold text-black">$15</span>
        </div>

        <div className="border border-gray-200/50 my-3 rounded-3xl"></div>

        <div className="flex justify-between items-center mb-4">
          <span className="font-medium text-lg">Total</span>
          <span className="text-xl font-extrabold">$</span>
        </div>

        {/* Promo code & Apply button */}
        <div className="flex items-center gap-3 mb-5">
          <div className="flex items-center bg-gray-100 rounded-full px-3 py-3 flex-1">
            <img src="/icons/tag.svg" alt="promo" className="w-5 h-5 opacity-70 mr-2"/>
            <input type="text" placeholder="Add promo code" className="flex-1 bg-transparent outline-none text-sm text-gray-700  font-medium"/>
          </div>

          <button className="bg-black text-white px-6 py-3 cursor-pointer rounded-full text-sm font-medium hover:font-black duration-500">
            Apply
          </button>
        </div>

        <button className="relative group bg-black text-white w-full py-4 cursor-pointer rounded-full font-medium text-base flex items-center justify-center gap-2">
          Go to Checkout
          <img src="./icons/arrow-right.svg" alt="arrow" className="w-5 h-5 group-hover:translate-x-2 duration-700"/>
        </button>
      </div>
    </div>
  );
}