import { useMutation } from "@tanstack/react-query";
import type { Address } from "viem";

import { createPaymentService } from "../services";

export function useSendPayment() {
  return useMutation({
    mutationFn: (
      {
        payer,
        token,
        amount,
        description,
        expiresAt,
      }: {
        payer: Address;
        token: Address;
        amount: bigint;
        description: string;
        expiresAt: bigint;
      }
    ) =>
      createPaymentService(
        payer,
        token,
        amount,
        description,
        expiresAt
      ),
  });
}