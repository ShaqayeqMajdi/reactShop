import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";

export default function useAddProduct() {
   const queryClient = useQueryClient();
  async function mutationFn({image, title, description, price, category}) {
    return await api.post("products", {image, title, description, price, category});
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
}
