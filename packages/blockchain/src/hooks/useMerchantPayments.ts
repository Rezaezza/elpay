import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import type { Address } from "viem";

import {
  getMerchantPayments,
} from "../services/payment";

export function useMerchantPayments(
  merchant?: Address,
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "merchant-payments",
      chainId,
      merchant,
    ],

    enabled:
      !!merchant &&
      !!chainId,

    queryFn: () =>
      getMerchantPayments(
        config,
        chainId,
        merchant!,
      ),
  });
}