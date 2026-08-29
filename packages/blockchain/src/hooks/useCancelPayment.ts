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
  cancelPaymentService,
} from "../services";

export function useCancelPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: cancelPaymentService,

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