import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";

import {
  getMerchantService,
} from "../services";

export function useMerchantInfo(
  merchant?: Address
) {
  return useQuery({
    queryKey: [
      "merchant-info",
      merchant,
    ],
    queryFn: () =>
      getMerchantService(merchant!),
    enabled: !!merchant,
  });
}