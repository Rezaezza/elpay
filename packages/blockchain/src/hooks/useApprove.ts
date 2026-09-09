import { useMutation } from "@tanstack/react-query";
import { useConfig, useChainId } from "wagmi";

import type { Address } from "viem";

import { approveToken } from "../services";

export function useApprove() {
  const config = useConfig();
  const chainId = useChainId();

  return useMutation({
    mutationFn: (
      {
        token,
        amount,
        spender,
      }: {
        token: Address;
        amount: bigint;
        spender?: Address;
      }
    ) =>
      approveToken(
        config,
        chainId,
        token,
        amount,
        spender,
      ),
  });
}