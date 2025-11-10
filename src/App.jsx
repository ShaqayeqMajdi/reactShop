import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";
import router from "./router";
// import { createContext, useReducer } from "react";
import useCartStore from "./store/useCartStore";
// import cartReducer from "./reducers/cartReducer";

const queryClient = new QueryClient();
// export const CartContext = createContext();

function App() {
  // const [state, dispatch] = useReducer(
  //   cartReducer,
  //   JSON.parse(localStorage.getItem("cart")) ?? []
  // );
  const cart = useCartStore((state) => state.cart);
  return (
    <QueryClientProvider client={queryClient}>
      {/* <CartContext.Provider value={{ cart: state, cartDispach: dispatch }}> */}
      <RouterProvider router={router} />
      {/* </CartContext.Provider> */}
    </QueryClientProvider>
  );
}

export default App;
