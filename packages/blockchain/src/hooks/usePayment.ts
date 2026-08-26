import { useQuery } from "@tanstack/react-query";
import { getPaymentService } from "../services";

export function usePayment(
  paymentId?: `0x${string}`
) {
  return useQuery({
    queryKey: ["payment", paymentId],

    queryFn: () => getPaymentService(paymentId!),

    enabled: !!paymentId,

    refetchInterval: 3000,

    refetchOnWindowFocus: true,

    staleTime: 0,
  });
}