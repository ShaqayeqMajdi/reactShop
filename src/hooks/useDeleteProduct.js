import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";

export default function useDeleteProduct() {
  const queryClient = useQueryClient();
  async function mutationFn(productID) {
    return await api.delete(`products/${productID}`);
  }
  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },

    onError: () => {},
  });
}
