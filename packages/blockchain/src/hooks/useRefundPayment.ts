import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  useConfig,
  useChainId,
} from "wagmi";

import {
  waitForTransactionReceipt,
} from "wagmi/actions";

import {
  refundPaymentService,
} from "../services";

export function useRefundPayment() {
  const queryClient = useQueryClient();

  const config = useConfig();

  const chainId = useChainId();

  return useMutation({
    mutationFn: (
      paymentId: `0x${string}`
    ) =>
      refundPaymentService(
        config,
        chainId,
        paymentId,
      ),

    async onSuccess(hash, paymentId) {
      await waitForTransactionReceipt(config, {
        hash,
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "payment",
          paymentId,
        ],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "merchant-payments",
          chainId,
        ],
      });

      await queryClient.invalidateQueries({
        queryKey: [
          "payer-payments",
          chainId,
        ],
      });
    },
  });
}