import { create } from "zustand";
const prev = JSON.parse(localStorage.getItem("cart")) || [];

const useCartStore = create((set) => {
  return {
    cart: prev,

    //Add TO Cart
    // addToCart: (product) =>
    //   set((state) => ({
    //     cart: [...state.cart, { ...product, id: product.id, quantity: 1 }],
    //   })),

    //Add TO Cart
    addToCart: (product) =>
      set((state) => {
        const cart = [...state.cart];
        const item = cart.find((id) => id.id === product.id);
        if (item) {
          item.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(cart)); 
        return { cart };
      }),

    //Remove From Cart
    // removeFromCart: (id) => {
    //   set((state) => {const foundIndex = state.cart.findIndex((item) => item.id === id);
    //     if (foundIndex !== -1) {
    //       if (state.cart[foundIndex].quantity > 1) {
    //         const newState = structuredClone(state.cart);
    //         newState[foundIndex].quantity--;
    //         localStorage.setItem("cart", JSON.stringify(newState));
    //         return { cart: newState };
    //       } else {
    //         const newState = structuredClone(state.cart);
    //         newState.splice(foundIndex, 1);
    //         localStorage.setItem("cart", JSON.stringify(newState));
    //         return { cart: newState };
    //       }
    //     } else {
    //       return { cart: state.cart };
    //     }
    //   });
    // },

    // Remove From Cart
    removeFromCart: (id) =>
      set((state) => {
        const cart = state.cart
          .map((item) => {
            if (item.id === id) {
              return { ...item, quantity: item.quantity - 1 };
            }
            return item;
          })
          .filter((item) => item.quantity > 0);
          localStorage.setItem("cart", JSON.stringify(cart));
        return { cart };
      }),

    //Delete Item From Cart
    deleteItemFromCart: (id) =>
      set((state) => {
        const filteredState = state.cart.filter((item) => item.id !== id);
        localStorage.setItem("cart", JSON.stringify(filteredState));
        return { cart: filteredState };
      }),
  };
});
export default useCartStore;
