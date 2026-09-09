import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  readContract,
  writeContract,
} from "wagmi/actions";

import { paymentProcessorAbi } from "../abi";

import {
  getPaymentProcessorAddress,
} from "../resolver/contracts";

/* -------------------------------------------------------------------------- */
/* WRITE */
/* -------------------------------------------------------------------------- */

export async function createPayment(
  config: Config,
  chainId: number,
  payer: Address,
  token: Address,
  amount: bigint,
  description: string,
  expiresAt: bigint,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "createPayment",
    args: [
      payer,
      token,
      amount,
      description,
      expiresAt,
    ],
  });
}

export async function approvePayment(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "approvePayment",
    args: [paymentId],
  });
}

export async function cancelPayment(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "cancelPayment",
    args: [paymentId],
  });
}

export async function executePayment(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "executePayment",
    args: [paymentId],
  });
}

export async function refundPayment(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "refundPayment",
    args: [paymentId],
  });
}

export async function releaseEscrow(
  config: Config,
  chainId: number,
  paymentId: Hash,
): Promise<Hash> {
  return writeContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "releaseEscrow",
    args: [paymentId],
  });
}

/* -------------------------------------------------------------------------- */
/* READ */
/* -------------------------------------------------------------------------- */

export async function getPayment(
  config: Config,
  chainId: number,
  paymentId: Hash,
) {
  return readContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "getPayment",
    args: [paymentId],
  });
}

export async function paymentExists(
  config: Config,
  chainId: number,
  paymentId: Hash,
) {
  return readContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "paymentExistsView",
    args: [paymentId],
  });
}

export async function getMerchantPayments(
  config: Config,
  chainId: number,
  merchant: Address,
) {
  return readContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "getMerchantPayments",
    args: [merchant],
  });
}

export async function getPayerPayments(
  config: Config,
  chainId: number,
  payer: Address,
) {
  return readContract(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,
    functionName: "getPayerPayments",
    args: [payer],
  });
}

/* -------------------------------------------------------------------------- */
/* EXPORT */
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
  getMerchantPayments,
  getPayerPayments,
};