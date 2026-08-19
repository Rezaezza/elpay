import { useMutation } from "@tanstack/react-query";
import type { Address } from "viem";

import { approveToken } from "../services";

export function useApprove() {
  return useMutation({
    mutationFn: (
      {
        token,
        amount,
      }: {
        token: Address;
        amount: bigint;
      }
    ) => approveToken(token, amount),
  });
}