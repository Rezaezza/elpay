import type { Address, Hash } from "viem";
import { readContract, writeContract } from "wagmi/actions";

import { paymentProcessorAbi } from "../abi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { wagmiConfig } from "../wagmi";

const address = CONTRACT_ADDRESSES.arcTestnet.paymentProcessor;

/* -------------------------------------------------------------------------- */
/*                                   WRITE                                    */
/* -------------------------------------------------------------------------- */

export async function createPayment(
  payer: Address,
  token: Address,
  amount: bigint,
  description: string,
  expiresAt: bigint
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "createPayment",
    args: [payer, token, amount, description, expiresAt,],
  });
}

export async function approvePayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "approvePayment",
    args: [paymentId],
  });
}

export async function cancelPayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "cancelPayment",
    args: [paymentId],
  });
}

export async function executePayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "executePayment",
    args: [paymentId],
  });
}

export async function refundPayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "refundPayment",
    args: [paymentId],
  });
}

export async function releaseEscrow(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "releaseEscrow",
    args: [paymentId],
  });
}

/* -------------------------------------------------------------------------- */
/*                                    READ                                    */
/* -------------------------------------------------------------------------- */

export async function getPayment(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "getPayment",
    args: [paymentId],
  });
}

export async function paymentExists(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: paymentProcessorAbi,
    functionName: "paymentExistsView",
    args: [paymentId],
  });
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
/* -------------------------------------------------------------------------- */

export const payment = {
  createPayment,
  approvePayment,
  cancelPayment,
  executePayment,
  refundPayment,
  releaseEscrow,
  getPayment,
  paymentExists,
};