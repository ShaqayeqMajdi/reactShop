export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center my-20 font-Quicksand">
      <div className="relative w-16 h-16">
        <div className="absolute w-16 h-16 border-4 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
        <div className="absolute w-12 h-12 top-2 left-2 border-4 border-gray-200 border-b-transparent rounded-full animate-spin"></div>
      </div>
      <p className="mt-6 text-lg font-bold text-gray-700 tracking-wider font-Quicksand animate-pulse">
        Loading...
      </p>
    </div>
  );
}
