import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerMerchantService } from "../services";

export function useRegisterMerchant() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      name,
      metadataURI,
    }: {
      name: string;
      metadataURI: string;
    }) =>
      registerMerchantService(
        name,
        metadataURI
      ),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ["merchant"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["merchant-info"],
      });

      await queryClient.invalidateQueries({
        queryKey: ["dashboard"],
      });
    },
  });
}