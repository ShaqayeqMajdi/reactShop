import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

export default function useCategories() {
  return useQuery({
    queryKey: ["categories"],
    queryFn: () => api.get("products/categories").then(res => res.data),
  });
}