import { useMutation } from "@tanstack/react-query";

import { approveUSDC } from "../services";

export function useApprove() {
  return useMutation({
    mutationFn: ({
      spender,
      amount,
    }: {
      spender: `0x${string}`;
      amount: string;
    }) =>
      approveUSDC(spender, amount),
  });
}