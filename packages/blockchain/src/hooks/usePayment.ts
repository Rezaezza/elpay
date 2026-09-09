import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import {
  getPaymentService,
} from "../services";

export function usePayment(
  paymentId?: `0x${string}`
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "payment",
      chainId,
      paymentId,
    ],

    enabled:
      !!paymentId &&
      !!chainId,

    queryFn: () =>
      getPaymentService(
        config,
        chainId,
        paymentId!,
      ),

    refetchInterval: 3000,

    refetchOnWindowFocus: true,

    staleTime: 0,
  });
}