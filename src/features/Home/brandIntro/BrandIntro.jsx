export default function BrandIntro() {
  return (
    <section className="w-full bg-white py-10 px-8 mt-18 md:px-12 font-Quicksand">
      <div className="container mx-auto flex flex-col md:flex-row items-center md:items-start">
        <div className="w-full md:w-1/2">
          <div className="w-full overflow-hidden h-[220px] md:h-80 lg:h-[420px] roundedfull">
            <img src="/images/home/avatar.png" alt="avatar" className="w-full h-full object-cover rounded-full"/>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col justify-center mt-8 md:mt-20 md:ml-18">
          <h2 className="font-bold font-Inter text-2xl md:text-[42px] lg:text-[56px] text-black/90 leading-tight md:leading-tight mb-4">
            Why You’ll Love It
          </h2>

          <p className="text-gray-700 text-sm md:text-lg max-w-xl md:text-justify">
            Our fashion product is crafted from premium quality fabric that
            feels soft, breathable, and built to last through every season. It
            features a tailored fit that beautifully contours your body while
            providing maximum comfort.
          </p>

          <div className="mt-6">
            <button className="inline-block bg-black/90 cursor-pointer text-white rounded-lg px-6 py-3 
            text-sm md:text-base shadow-md hover:translate-y-px transition-transform">
              View More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
