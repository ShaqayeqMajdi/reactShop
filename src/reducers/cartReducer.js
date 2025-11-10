// export const actionTypes = {
//   addToCart: "ADD_TO_CART",
//   removeFromCart: "REMOVE_FROM_CART",
//   deleteItemFromCart: "DELETE_ITEM_FROM_CART",
// };

// export default function cartReducer(state, action) {
//   // console.log("reducer:", state, action);

//   // if (action.type === "ADD_TO_CART") {
//   //   localStorage.setItem("cart", JSON.stringify([...state, action.payload]));
//   //   return [...state, action.payload];
//   // }

//   // if (action.type === "REMOVE_FROM_CART") {
//   //   const newCart = state.filter((item) => item.id != action.payload);
//   //   localStorage.setItem("cart", JSON.stringify(newCart));
//   //   return newCart;
//   // }

//   // if (action.type === "UPDATE_QUANTITY") {
//   //   const updatedCart = state.map((item) => {
//   //     if (item.id === action.payload.id) {
//   //       item.quantity = action.payload.quantity;
//   //     }
//   //     return item;
//   //   });
//   //   localStorage.setItem("cart", JSON.stringify(updatedCart));
//   //   return updatedCart;
//   // }

//   // return state;

//   switch (action.type) {
//     case actionTypes.addToCart:
//       const foundItem = state.findIndex((item) => item.id === action.payload);
//       if (foundItem !== -1) {
//         const temp = structuredClone(state);
//         temp[foundItem].quantity++;
//         localStorage.setItem("cart", JSON.stringify(temp));
//         return temp;
//       } else {
//         const newState = [...state, { id: action.payload, quantity: 1 }];
//         localStorage.setItem("cart", JSON.stringify(newState));
//         return newState;
//       }

//     case actionTypes.removeFromCart:
//       const foundIndex = state.findIndex((item) => item.id === action.payload);
//       if (foundIndex !== -1) {
//         if (state[foundIndex].quantity > 1) {
//           const newState = structuredClone(state);
//           newState[foundIndex].quantity--;
//           localStorage.setItem("cart", JSON.stringify(newState));
//           return newState;
//         } else {
//           const newState = structuredClone(state);
//           newState.splice(foundIndex, 1);
//           localStorage.setItem("cart", JSON.stringify(newState));
//           return newState;
//         }
//       } else {
//         return state;
//       }

//     case actionTypes.deleteItemFromCart:
//       const filteredState = state.filter((item) => item.id !== action.payload);
//       localStorage.setItem("cart", JSON.stringify(filteredState));
//       return filteredState;

//     default:
//       return state;
//   }
// }
