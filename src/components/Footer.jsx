export default function Footer() {
  return (
    <footer className="bg-Cultured mt-14 p-6 font-Quicksand">
      <div className="bg-black text-white font-Inter rounded-2xl px-4 lg:px-12 py-10 mt-10 -translate-y-1/2 
      flex flex-col lg:flex-row items-center justify-between gap-6 max-w-6xl mx-auto">
        <h3 className="text-xl md:text-[43px] font-extrabold text-left max-w-xl md:leading-12">
          STAY UP TO DATE ABOUT OUR LATEST OFFERS
        </h3>

        <div className="flex flex-col items-center gap-4 w-full max-w-xs">
          <div className="flex items-center bg-white rounded-full px-4 py-3 w-full">
            <img src="/icons/mail.svg" alt="email" className="w-5 h-5 mr-2" />
            <input type="email" placeholder="Enter your email address" 
            className="flex-1 outline-none text-black text-sm bg-transparent"/>
          </div>
          <button className="bg-white text-black rounded-full px-6 py-3 
          hover:bg-gray-200 transition w-full cursor-pointer">
            Subscribe to Newsletter
          </button>
        </div>
      </div>

      <div className="px-4 lg:px-20 pb-12 max-w-7xl mx-auto -mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div>
            <h3 className="font-extrabold text-3xl font-Inter mb-4">SHOP.CO</h3>
            <p className="text-gray-600 text-sm mb-4">
              We have clothes that suit your style and which you're proud towear. From women to men.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-9 h-9 bg-white rounded-full p-1.5 flex items-center border 
              border-gray-300 hover:-translate-y-1 transition-transform duration-700">
                <img src="/icons/twitter.svg" alt="twitter" className="w-8 h-8 ml-px"/>
              </a>
              <a href="#" className="w-9 h-9 bg-black rounded-full p-1.5 
              hover:-translate-y-1 transition-transform duration-700">
                <img src="/icons/facebook.svg" alt="facebook"/>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full p-1.5 flex items-center border 
              border-gray-300 hover:-translate-y-1 transition-transform duration-700">
                <img className="w-8 h-8 ml-px" src="/icons/instagram.svg" alt="instagram"/>
              </a>
              <a href="#" className="w-9 h-9 bg-white rounded-full p-1.5 border 
              border-gray-300 hover:-translate-y-1 transition-transform duration-700">
                <img src="/icons/github.svg" alt="github" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">COMPANY</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 hover:underline">About</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Features</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Works</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Career</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">HELP</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Customer Support</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Delivery Details</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">FAQ</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Account</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Manage Deliveries</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Orders</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Payments</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-lg">RESOURCES</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><a href="#" className="hover:text-gray-900 hover:underline">Free eBooks</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Development Tutorial</a> </li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">How to - Blog</a></li>
              <li><a href="#" className="hover:text-gray-900 hover:underline">Youtube Playlist</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between border-t border-gray-300 mt-12 pt-6 gap-4">
          <p className="text-gray-500 text-sm text-center lg:text-left">
            Shop.co © 2000-2023, All Rights Reserved
          </p>
          <div className="flex gap-3 flex-wrap justify-center">
            <img src="/icons/visa.svg" alt="Visa" className="h-8 w-12 px-1 bg-white rounded border border-gray-100"/>
            <img src="/icons/mastercard.svg" alt="Mastercard" className="h-8 w-12 px-1 bg-white rounded border border-gray-100"/>
            <img src="/icons/paypal.svg" alt="Paypal" className="h-8 w-12 px-1 bg-white rounded border border-gray-100"/>
            <img src="/icons/applepay.svg" alt="ApplePay" className="h-8 w-12 px-1 bg-white rounded border border-gray-100"/>
            <img src="/icons/googlepay.svg" alt="GooglePay" className="h-8 w-12 px-1 bg-white rounded border border-gray-100"/>
          </div>
        </div>
      </div>
    </footer>
  );
}
