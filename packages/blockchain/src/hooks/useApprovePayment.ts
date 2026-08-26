import { useMutation, useQueryClient } from "@tanstack/react-query";

import {
  approvePaymentService,
} from "../services";

export function useApprovePayment() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: approvePaymentService,

    onSuccess: (_, paymentId) => {
      queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });
    },
  });
}