import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  useConfig,
  useChainId,
} from "wagmi";

import {
  registerMerchantService,
} from "../services";

export function useRegisterMerchant() {
  const config = useConfig();
  const chainId = useChainId();
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
        config,
        chainId,
        name,
        metadataURI,
      ),

    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: [
          "merchant",
          chainId,
        ],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "merchant-info",
          chainId,
        ],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "dashboard",
          chainId,
        ],
      });
    },
  });
}