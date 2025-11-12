import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

export default function useEditProduct() {
  async function mutationFn({id, image, title, description, price, category,}) {
    return await api.put(`products/${id}`, {id, image, title, description, price, category,});
  }

  return useMutation({
    mutationFn,
  });
}
