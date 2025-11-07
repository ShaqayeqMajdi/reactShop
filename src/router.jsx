import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./features/Home/HomePage";
import Products from "./features/products/Products";

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
    ],
  },
]);

export default router;
