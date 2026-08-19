import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";

import { getTokenBalance } from "../services";

export function useBalance(
  token?: Address,
  owner?: Address
) {
  return useQuery({
    queryKey: ["balance", token, owner],

    enabled: !!token && !!owner,

    queryFn: () =>
      getTokenBalance(
        token!,
        owner!
      ),
  });
}