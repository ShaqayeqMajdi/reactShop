export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6">
      <div className="relative mb-6">
        <div className="absolute inset-0 blur-2xl bg-red-400/80 rounded-full w-24 h-24 animate-pulse"></div>
        <div className="relative bg-red-200 text-red-600 p-5 rounded-full shadow-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12" fill="none"
            viewBox="0 0 24 24" stroke="currentColor"  strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"/>
          </svg>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-gray-800 mb-2 tracking-tight font-Inter whitespace-nowrap">
        Oops! Something went wrong
      </h2>
      <p className="text-gray-500 mb-6 font-Quicksand">
        We couldn’t load the products right now. <br /> Please check your
        connection and try again.
      </p>

      <button className="px-5 py-2.5 cursor-pointer bg-red-500 hover:bg-red-600 font-Inter text-white font-medium rounded-xl shadow-md transition duration-200">
        Try Again
      </button>
    </div>
  );
}
