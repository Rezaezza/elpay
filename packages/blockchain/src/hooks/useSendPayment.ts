import { useMutation } from "@tanstack/react-query";

import {
  useConfig,
  useChainId,
} from "wagmi";

import type { Address } from "viem";

import {
  createPaymentService,
} from "../services";

export function useSendPayment() {
  const config = useConfig();
  const chainId = useChainId();

  return useMutation({
    mutationFn: ({
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
    }) =>
      createPaymentService(
        config,
        chainId,
        payer,
        token,
        amount,
        description,
        expiresAt,
      ),
  });
}