import type { Address } from "viem";

import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import { wagmiConfig } from "../wagmi";
import { CONTRACT_ADDRESSES } from "../addresses";

const PaymentProcessorAddress =
  CONTRACT_ADDRESSES.arcTestnet.paymentProcessor;

const erc20Abi = [
  {
    type: "function",
    name: "approve",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    outputs: [
      {
        type: "bool",
      },
    ],
  },
] as const;

export async function approveToken(
  token: Address,
  amount: bigint,
  spender: Address = PaymentProcessorAddress
) {
  const hash = await writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [spender, amount],
  });

  return waitForTransactionReceipt(wagmiConfig, {
    hash,
  });
}

export async function approveMax(
  token: Address,
  spender: Address = PaymentProcessorAddress
) {
  return approveToken(
    token,
    2n ** 256n - 1n,
    spender
  );
}

export const approve = approveToken;