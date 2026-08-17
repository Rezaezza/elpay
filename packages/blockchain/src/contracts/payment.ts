import type { Address, Hash } from "viem";
import { readContract, writeContract } from "wagmi/actions";

import { PAYMENT_PROCESSOR_ABI } from "../abi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { wagmiConfig } from "../wagmi";

const address = CONTRACT_ADDRESSES.paymentProcessor;

/* -------------------------------------------------------------------------- */
/*                               Write Functions                              */
/* -------------------------------------------------------------------------- */

export async function createPayment(
  payer: Address,
  token: Address,
  amount: bigint
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "createPayment",
    args: [payer, token, amount],
  });
}

export async function approvePayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "approvePayment",
    args: [paymentId],
  });
}

export async function cancelPayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "cancelPayment",
    args: [paymentId],
  });
}

export async function executePayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "executePayment",
    args: [paymentId],
  });
}

export async function refundPayment(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "refundPayment",
    args: [paymentId],
  });
}

export async function releaseEscrow(
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "releaseEscrow",
    args: [paymentId],
  });
}

/* -------------------------------------------------------------------------- */
/*                                Read Functions                              */
/* -------------------------------------------------------------------------- */

export async function getPayment(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "getPayment",
    args: [paymentId],
  });
}

export async function paymentExists(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: PAYMENT_PROCESSOR_ABI,
    functionName: "paymentExistsView",
    args: [paymentId],
  });
}

/* -------------------------------------------------------------------------- */
/*                                   Export                                   */
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