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
      }: {
        payer: Address;
        token: Address;
        amount: bigint;
      }
    ) =>
      createPaymentService(
        payer,
        token,
        amount
      ),
  });
}