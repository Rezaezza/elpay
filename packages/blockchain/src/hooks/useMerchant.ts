import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";

import { isMerchantActiveService } from "../services/merchant";

export function useMerchant(
  merchant?: Address
) {
  return useQuery({
    queryKey: ["merchant", merchant],

    queryFn: () =>
      isMerchantActiveService(merchant!),

    enabled: !!merchant,

    refetchInterval: 5000,

    staleTime: 0,
  });
}