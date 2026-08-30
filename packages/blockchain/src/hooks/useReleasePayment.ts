import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  waitForTransactionReceipt,
} from "wagmi/actions";

import {
  wagmiConfig,
} from "../wagmi";

import {
  releaseEscrowService,
} from "../services";

export function useReleasePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: releaseEscrowService,

    async onSuccess(hash, paymentId) {
      await waitForTransactionReceipt(
        wagmiConfig,
        { hash }
      );

      await queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });

      await queryClient.invalidateQueries({
        queryKey: ["merchant-payments"],
      });
    },
  });
}