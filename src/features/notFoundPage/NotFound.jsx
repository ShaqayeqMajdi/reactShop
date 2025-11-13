export default function NotFound() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-100 via-gray-200 to-gray-300 flex items-center justify-center p-4 font-Quicksand">
      <div className="text-center space-y-8">
        <div className="relative">
          <h1 className="text-9xl md:text-[12rem] font-black animate-pulse text-gray-600 tracking-tighter drop-shadow-2xl">
            404
          </h1>
        </div>
        <div className="space-y-3">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-500 drop-shadow-lg">
            Page Not Found
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-md mx-auto">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
        </div>
        <a href="/" className="inline-block px-8 py-4 bg-gray-700 text-white font-semibold text-lg rounded-full 
        shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-700">
          Back Home
        </a>
      </div>
    </div>
  );
}
