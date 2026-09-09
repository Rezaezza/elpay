import { useQuery } from "@tanstack/react-query";
import { useConfig } from "wagmi";
import type { Address } from "viem";

import { isMerchantActiveService } from "../services/merchant";

export function useMerchant(
  merchant?: Address,
  chainId?: number,
) {
  const config = useConfig();

  return useQuery({
    queryKey: [
      "merchant",
      merchant,
      chainId,
    ],

    enabled:
      !!merchant &&
      !!chainId,

    queryFn: () =>
      isMerchantActiveService(
        config,
        chainId!,
        merchant!,
      ),

    refetchInterval: 5000,
    staleTime: 0,
  });
}