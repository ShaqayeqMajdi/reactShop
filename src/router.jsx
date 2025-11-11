import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./features/Home/HomePage";
import Products from "./features/products/Products";
import ProductDetail from "./features/productDetail/ProductDetail";
import MenPage from "./features/Home/pages/MenPage";
import WomenPage from "./features/Home/pages/WomenPage";
import Jewelry from "./features/Home/pages/Jewelry";
import Electronics from "./features/Home/pages/Electronics";
import CartPage from "./features/cart/CartPage";
import AboutPage from "./features/aboutPage/AboutPage";
// import useCategories from "./hooks/useCategories";
// const categories = useCategories()

const categories = [
  { path: "men", element: <MenPage /> },
  { path: "women", element: <WomenPage /> },
  { path: "jewelry", element: <Jewelry /> },
  { path: "electronics", element: <Electronics /> },
];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "allProducts",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      //   ...categories.map(cat => ({
      //    path: cat,
      //    element: <Products category={cat} />,
      //  })),
      ...categories.map((cat) => ({ path: cat.path, element: cat.element })),
    ],
  },
]);

export default router;
