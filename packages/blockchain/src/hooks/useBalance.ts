import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";
import type { Address } from "viem";

import { getTokenBalance } from "../services";

export function useBalance(
  token?: Address,
  owner?: Address,
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "balance",
      chainId,
      token,
      owner,
    ],

    enabled: !!token && !!owner,

    queryFn: () =>
      getTokenBalance(
        config,
        token!,
        owner!,
      ),
  });
}