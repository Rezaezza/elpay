import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  executePaymentService,
} from "../services";

export function useExecutePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: executePaymentService,

    onSuccess: (_, paymentId) => {
      queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });
    },
  });
}