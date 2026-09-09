import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import type { Address } from "viem";

import {
  getPayerPayments,
} from "../services/payment";

export function usePayerPayments(
  payer?: Address
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "payer-payments",
      chainId,
      payer,
    ],

    enabled:
      !!payer &&
      !!chainId,

    queryFn: () =>
      getPayerPayments(
        config,
        chainId,
        payer!,
      ),
  });
}