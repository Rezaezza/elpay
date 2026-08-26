import {
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";

import {
  releaseEscrowService,
} from "../services";

export function useReleaseEscrow() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: releaseEscrowService,

    onSuccess: (_, paymentId) => {
      queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
      });
    },
  });
}