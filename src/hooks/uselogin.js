import { useMutation } from "@tanstack/react-query";
import api from "../configs/api";

export default function useLogin() {
  const mutationFn = (data) => {
    return api.post("auth/login", data).then((res) => res); 
  };

  return useMutation({
    mutationFn,
  });
}
