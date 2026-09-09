import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import {
  getPaymentProcessorAddress,
} from "../resolver/contracts";

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
  config: Config,
  chainId: number,
  token: Address,
  amount: bigint,
  spender?: Address,
): Promise<Hash> {

  const paymentProcessor =
    spender ??
    getPaymentProcessorAddress(chainId);

  const hash = await writeContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [
      paymentProcessor,
      amount,
    ],
  });

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export async function approveMax(
  config: Config,
  chainId: number,
  token: Address,
  spender?: Address,
): Promise<Hash> {
  return approveToken(
    config,
    chainId,
    token,
    2n ** 256n - 1n,
    spender,
  );
}

export const approve = approveToken;