import type {
  Address,
  Hash,
} from "viem";

import {
  readContract,
  writeContract,
} from "wagmi/actions";

import { wagmiConfig } from "../wagmi";

import { elPayEscrowAbi } from "../abi";

import { CONTRACT_ADDRESSES } from "../addresses";

const address =
  CONTRACT_ADDRESSES.arcTestnet.escrow;

/* -------------------------------------------------------------------------- */
/*                                   WRITE                                    */
/* -------------------------------------------------------------------------- */

export async function deposit(
  paymentId: `0x${string}`,
  token: Address,
  payer: Address,
  merchant: Address,
  amount: bigint
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
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
  paymentId: `0x${string}`
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "release",
    args: [paymentId],
  });
}

export async function setPaymentProcessor(
  processor: Address
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "setPaymentProcessor",
    args: [processor],
  });
}

/* -------------------------------------------------------------------------- */
/*                                    READ                                    */
/* -------------------------------------------------------------------------- */

export async function getEscrow(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "getEscrow",
    args: [paymentId],
  });
}

export async function escrowExists(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "escrowExists",
    args: [paymentId],
  });
}

export async function isReleased(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "isReleased",
    args: [paymentId],
  });
}

export async function canRelease(
  paymentId: `0x${string}`
) {
  return readContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "canRelease",
    args: [paymentId],
  });
}

export async function paymentProcessor() {
  return readContract(wagmiConfig, {
    address,
    abi: elPayEscrowAbi,
    functionName: "paymentProcessor",
  });
}

/* -------------------------------------------------------------------------- */
/*                                   EXPORT                                   */
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