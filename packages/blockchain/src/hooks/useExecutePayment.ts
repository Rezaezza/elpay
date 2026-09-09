import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import type { Config } from "wagmi";

import {
  executePaymentService,
} from "../services";

export function useExecutePayment(
  config: Config,
  chainId: number,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (paymentId: `0x${string}`) =>
      executePaymentService(
        config,
        chainId,
        paymentId,
      ),

    async onSuccess(_, paymentId) {
      await queryClient.invalidateQueries({
        queryKey: ["payment", chainId, paymentId],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "merchant-payments",
          chainId,
        ],
      });
    },
  });
}