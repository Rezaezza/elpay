import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import type { Config } from "wagmi";

import {
  waitForTransactionReceipt,
} from "wagmi/actions";

import {
  releaseEscrowService,
} from "../services";

export function useReleasePayment(
  config: Config,
  chainId: number,
) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (
      paymentId: `0x${string}`,
    ) =>
      releaseEscrowService(
        config,
        chainId,
        paymentId,
      ),

    async onSuccess(hash, paymentId) {
      await waitForTransactionReceipt(
        config,
        { hash },
      );

      await queryClient.invalidateQueries({
        queryKey: [
          "payment",
          chainId,
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