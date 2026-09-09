import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  readContract,
  writeContract,
} from "wagmi/actions";

import { elPayEscrowAbi } from "../abi";

import {
  getEscrowAddress,
} from "../resolver/contracts";

/* -------------------------------------------------------------------------- */
/* WRITE */
/* -------------------------------------------------------------------------- */

export async function deposit(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
  token: Address,
  payer: Address,
  merchant: Address,
  amount: bigint,
): Promise<Hash> {
  return writeContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "deposit",
    args: [
      paymentId,
      token,
      payer,
      merchant,
      amount,
    ],
  });
}

export async function release(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
): Promise<Hash> {
  return writeContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "release",
    args: [paymentId],
  });
}

export async function setPaymentProcessor(
  config: Config,
  chainId: number,
  processor: Address,
): Promise<Hash> {
  return writeContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "setPaymentProcessor",
    args: [processor],
  });
}

/* -------------------------------------------------------------------------- */
/* READ */
/* -------------------------------------------------------------------------- */

export async function getEscrow(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
) {
  return readContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "getEscrow",
    args: [paymentId],
  });
}

export async function escrowExists(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
) {
  return readContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "escrowExists",
    args: [paymentId],
  });
}

export async function isReleased(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
) {
  return readContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "isReleased",
    args: [paymentId],
  });
}

export async function canRelease(
  config: Config,
  chainId: number,
  paymentId: `0x${string}`,
) {
  return readContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "canRelease",
    args: [paymentId],
  });
}

export async function paymentProcessor(
  config: Config,
  chainId: number,
) {
  return readContract(config, {
    address: getEscrowAddress(chainId),
    abi: elPayEscrowAbi,
    functionName: "paymentProcessor",
  });
}

/* -------------------------------------------------------------------------- */
/* EXPORT */
/* -------------------------------------------------------------------------- */

export const escrow = {
  deposit,
  release,
  setPaymentProcessor,
  getEscrow,
  escrowExists,
  isReleased,
  canRelease,
  paymentProcessor,
};