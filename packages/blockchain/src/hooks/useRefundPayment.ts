import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  refundPaymentService,
} from "../services";

export function useRefundPayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: refundPaymentService,

    onSuccess: (_, paymentId) => {
      queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });
    },
  });
}