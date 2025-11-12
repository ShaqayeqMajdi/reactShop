import axios from "axios";

// const api = axios.create({
//   baseURL: "https://fakestoreapi.com/",
// });

const BASE_URL = import.meta.env.VITE_BASE_URL;
const api = axios.create({
  baseURL: BASE_URL,
});

export default api;
