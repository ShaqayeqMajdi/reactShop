import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./features/Home/HomePage";
import Products from "./features/products/Products";
import ProductDetail from "./features/productDetail/ProductDetail";

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
    ],
  },
]);

export default router;
