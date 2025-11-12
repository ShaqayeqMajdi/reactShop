import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../configs/api";

export default function useEditProduct() {
  const queryClient = useQueryClient();
  async function mutationFn({id, image, title, description, price, category,}) {
    return await api.put(`products/${id}`, {id, image, title, description, price, category,});
  }

  return useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries(["products"]);
    },
  });
}
