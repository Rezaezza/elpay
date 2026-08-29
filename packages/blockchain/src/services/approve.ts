import type { Address, Hash } from "viem";

import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import { wagmiConfig } from "../wagmi";
import { getPaymentProcessorAddress } from "../resolver/contracts";

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
  spender?: Address
): Promise<Hash> {
  const paymentProcessor =
    spender ?? getPaymentProcessorAddress();

  const hash = await writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [paymentProcessor, amount],
  });

  await waitForTransactionReceipt(wagmiConfig, {
    hash,
  });

  return hash;
}

export async function approveMax(
  token: Address,
  spender?: Address
): Promise<Hash> {
  return approveToken(
    token,
    2n ** 256n - 1n,
    spender
  );
}

export const approve = approveToken;