import { useQueries } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import {
  getPaymentService,
} from "../services";

export function usePayments(
  paymentIds?: readonly `0x${string}`[]
) {
  const config = useConfig();
  const chainId = useChainId();

  const queries = useQueries({
    queries:
      paymentIds?.map((paymentId) => ({
        queryKey: [
          "payment",
          chainId,
          paymentId,
        ],

        queryFn: () =>
          getPaymentService(
            config,
            chainId,
            paymentId,
          ),

        enabled: !!chainId,
      })) ?? [],
  });

  return {
    data: queries
      .map((query) => query.data)
      .filter(Boolean),

    isLoading: queries.some(
      (query) => query.isLoading
    ),

    isError: queries.some(
      (query) => query.isError
    ),

    refetch: () =>
      Promise.all(
        queries.map((query) => query.refetch())
      ),
  };
}