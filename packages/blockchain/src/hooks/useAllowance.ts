import { useQuery } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";
import type { Address } from "viem";

import { getAllowance } from "../services";

export function useAllowance(
  token?: Address,
  owner?: Address,
  spender?: Address,
) {
  const config = useConfig();
  const chainId = useChainId();

  return useQuery({
    queryKey: [
      "allowance",
      chainId,
      token,
      owner,
      spender,
    ],

    enabled: !!token && !!owner,

    queryFn: () =>
      getAllowance(
        config,
        chainId,
        token!,
        owner!,
        spender,
      ),
  });
}