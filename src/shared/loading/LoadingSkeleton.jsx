export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col w-[300px] h-[400px] p-4 rounded-3xl animate-pulse">
      <div className="w-full h-[180px] bg-gray-200 rounded-2xl flex items-center justify-center mb-4"></div>
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
      <div className="h-5 bg-gray-300 rounded w-3/4 mb-2"></div>
      <div className="flex items-center gap-2 mt-8">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
        <div className="h-4 w-10 bg-gray-200 rounded"></div>
      </div>
      <div className="flex justify-between items-center w-full mt-auto">
        <div className="h-5 w-16 bg-gray-300 rounded"></div>
        <div className="h-8 w-24 bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}
