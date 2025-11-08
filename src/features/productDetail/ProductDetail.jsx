import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import api from "../../configs/api";
import Loading from "../../shared/loading/Loading";
import Error from "../../shared/error/Error";
import { useState } from "react";
import { Tabs, Tab, Box, Rating } from "@mui/material";

export default function ProductDetail() {
  const { productId } = useParams();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function queryFn() {
    return api.get(`products/${productId}`).then((response) => response.data);
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: [`productDetail/${productId}`],
    queryFn,
  });

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 py-8 font-Quicksand selection:bg-Cultured">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex gap-4">
            <div className="flex flex-col gap-3">
              <div className="w-16 h-16 md:w-20 md:h-20  lg:w-32 lg:h-32 rounded-xl bg-Cultured border p-2 flex items-center justify-center">
                <img src={data.image} alt={data.title} className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-32 lg:h-32 rounded-xl bg-Cultured p-2 flex items-center justify-center">
                <img src={data.image} alt={data.title} className="max-w-full max-h-full object-contain"/>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20  lg:w-32 lg:h-32 rounded-xl bg-Cultured p-2 flex items-center justify-center">
                <img src={data.image} alt={data.title} className="max-w-full max-h-full object-contain"/>
              </div>
            </div>

            {/* Main Image */}
            <div>
              <div className="w-full aspect-square bg-Cultured rounded-3xl p-7 flex items-center justify-center">
                <img src={data.image} alt={data.title} className="max-h-full max-w-full object-contain rounded-lg"/>
              </div>
            </div>
          </div>

          {/* Products Titile */}
          <div>
            <h1 className="text-xl md:text-3xl font-extrabold mb-2 font-Inter line-clamp-2">
              {data.title}
            </h1>

            {/* Products Rate */}
            <div className="flex items-center gap-2 mb-4">
              <Rating name="product-rating" value={data?.rating?.rate} precision={0.5} readOnly/>
              <span className="text-base text-gray-500">
                {data.rating.rate}/5
              </span>
            </div>

            {/* Products Price */}
            <div className="flex items-center gap-4 mb-4">
              <p className="text-2xl font-extrabold">${data.price}</p>
            </div>

            {/* Products Category */}
            <p className="text-gray-600 text-left text-base line-clamp-1 selection:bg-Cultured">
              {data.description}
            </p>

            <div className="border border-Cultured my-4"></div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-500">Select Colors</p>
              <div className="flex gap-3">
                <button className="w-7 h-7 rounded-full bg-[#4F4631] cursor-pointer hover:border hover:border-gray-100"></button>
                <button className="w-7 h-7 rounded-full bg-[#314F4A] cursor-pointer hover:border hover:border-gray-100"></button>
                <button className="w-7 h-7 rounded-full bg-[#31344F] cursor-pointer hover:border hover:border-gray-100"></button>
              </div>
            </div>

            <div className="border border-Cultured my-4"></div>

            <div>
              <p className="text-sm font-medium mb-2 text-gray-500">
                Choose Size
              </p>
              <div className="flex gap-3 flex-wrap text-gray-600">
                <button className="px-4 py-2  bg-Cultured rounded-full text-sm cursor-pointer hover:bg-black hover:text-white duration-700">
                  Small
                </button>
                <button className="px-4 py-2  bg-Cultured rounded-full text-sm cursor-pointer hover:bg-black hover:text-white duration-700">
                  Medium
                </button>
                <button className="px-4 py-2  bg-Cultured rounded-full text-sm  cursor-pointer hover:bg-black hover:text-white duration-700">
                  Large
                </button>
                <button className="px-4 py-2  bg-Cultured rounded-full text-sm cursor-pointer hover:bg-black hover:text-white duration-700">
                  X-Large
                </button>
              </div>
            </div>

            <div className="border border-Cultured my-4"></div>

            <div className="flex items-center justify-start mb-4 font-semibold text-gray-600">
              <p>Available in store<i className="fa-solid fa-check text-green-600 ml-2"></i></p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center bg-Cultured rounded-full">
                <button className="px-4 py-2 text-lg cursor-pointer">
                  −
                </button>

                <span className="px-4">0</span>

                <button className="px-4 py-2 text-lg cursor-pointer">+</button>
              </div>

              <button className="flex-1 py-3 rounded-full font-semibold cursor-pointer bg-black text-white">
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <Box className="border-b border-gray-200 flex justify-center">
            <Tabs value={value} onChange={handleChange} textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: "black" } }} className="text-lg font-medium">
              <Tab label="Product Details" className={
                  value === 0
                    ? "pb-3 border-b-2 border-black"
                    : "pb-3 text-gray-500"
                }
              />
              <Tab label="Rating & Reviews" className={
                  value === 1
                    ? "pb-3 border-b-2 border-black"
                    : "pb-3 text-gray-500"
                }
              />
              <Tab label="FAQs" className={
                  value === 2
                    ? "pb-3 border-b-2 border-black"
                    : "pb-3 text-gray-500"
                }
              />
            </Tabs>
          </Box>

          {value === 0 && (
            <div className="mt-6 text-base text-gray-800 leading-relaxed">
              <p>{data.description}</p>
            </div>
          )}

          {value === 1 && (
            <div className="mt-6">
              <div className="relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {[
                    {
                      name: "Samantha D.",
                      text: "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
                      date: "Posted on August 14, 2023",
                    },
                    {
                      name: "Alex M.",
                      text: "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
                      date: "Posted on August 15, 2023",
                    },
                  ].map((review) => (
                    <div  className="bg-white rounded-xl border border-gray-200 p-6">
                      <img src="/images/shared/rating.png" alt="rating" className="h-4 mb-2"/>
                      <h3 className="font-semibold text-lg mb-2 flex items-center gap-1">
                        {review.name}
                        <img src="/images/home/approve.svg" alt="approve" className="w-5 h-5"/>
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-2 selection:bg-Cultured">{`"${review.text}"`}</p>
                      <span className="text-gray-700 font-semibold text-xs">
                        {review.date}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-center mt-8">
                  <button className="px-8 py-3 bg-white text-black rounded-full border border-gray-200 hover:bg-gray-200 transition duration-700 cursor-pointer">
                    Load More Reviews
                  </button>
                </div>
              </div>
            </div>
          )}
          {value === 2 && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 text-base text-gray-800">
              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">
                  How long does delivery take?
                </h4>
                <p className="text-gray-600 text-sm">
                  Delivery usually takes 3–7 business days depending on your
                  location.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">Can I track my order?</h4>
                <p className="text-gray-600 text-sm">
                  Yes, once your order is shipped, you will receive a tracking
                  code via email or SMS.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">
                  What payment methods do you accept?
                </h4>
                <p className="text-gray-600 text-sm">
                  We accept credit cards, debit cards, PayPal, and in some
                  regions cash on delivery.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">
                  Can I return or exchange a product?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, you can request a return within 7–14 days if the product
                  is unused and in original condition.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">
                  How do I contact customer support?
                </h4>
                <p className="text-gray-600 text-sm">
                  You can reach us through live chat, email, or our support
                  phone number.
                </p>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-4">
                <h4 className="font-semibold mb-1">
                  Do you offer discounts or coupons?
                </h4>
                <p className="text-gray-600 text-sm">
                  Yes, we occasionally offer seasonal sales and discount codes.
                  Subscribe to stay updated.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
