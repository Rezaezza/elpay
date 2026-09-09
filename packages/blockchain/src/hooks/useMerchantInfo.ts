import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import type { Address } from "viem";

import {
  getMerchantService,
} from "../services";

export function useMerchantInfo(
  merchant?: Address
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "merchant-info",
      chainId,
      merchant,
    ],

    enabled:
      !!merchant &&
      !!chainId,

    queryFn: () =>
      getMerchantService(
        config,
        chainId,
        merchant!,
      ),
  });
}