import type { Address } from "viem";

import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import { wagmiConfig } from "../wagmi";

const erc20Abi = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
    inputs: [
      {
        name: "to",
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

export async function transferToken(
  token: Address,
  to: Address,
  amount: bigint
) {
  const hash = await writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, amount],
  });

  return waitForTransactionReceipt(wagmiConfig, {
    hash,
  });
}

export const transfer = transferToken;

export async function batchTransfer(
  token: Address,
  recipients: Address[],
  amounts: bigint[]
) {
  if (recipients.length !== amounts.length) {
    throw new Error("Recipients and amounts length mismatch");
  }

  const receipts = [];

  for (let i = 0; i < recipients.length; i++) {
    receipts.push(
      await transferToken(
        token,
        recipients[i],
        amounts[i]
      )
    );
  }

  return receipts;
}