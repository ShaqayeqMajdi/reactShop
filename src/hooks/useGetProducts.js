import { useQuery } from "@tanstack/react-query";
import api from "../configs/api";

export default function useGetProducts() {
  async function queryFn() {
    return await api.get("products");
  }

  return useQuery({
    queryKey: ["products"],
    queryFn,
  });
}
