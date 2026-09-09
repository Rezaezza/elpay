import type {
  Address,
} from "viem";

import type { Config } from "wagmi";

import { readContract } from "@wagmi/core";

import {
  getPaymentProcessorAddress,
} from "../resolver/contracts";

const erc20Abi = [
  {
    type: "function",
    name: "allowance",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
        type: "address",
      },
      {
        name: "spender",
        type: "address",
      },
    ],
    outputs: [
      {
        type: "uint256",
      },
    ],
  },
] as const;

export async function getAllowance(
  config: Config,
  chainId: number,
  token: Address,
  owner: Address,
  spender?: Address,
): Promise<bigint> {

  const paymentProcessor =
    spender ??
    getPaymentProcessorAddress(chainId);

  return readContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [
      owner,
      paymentProcessor,
    ],
  });
}

export const allowanceOf = getAllowance;

export async function hasEnoughAllowance(
  config: Config,
  chainId: number,
  token: Address,
  owner: Address,
  amount: bigint,
  spender?: Address,
): Promise<boolean> {

  const allowance =
    await getAllowance(
      config,
      chainId,
      token,
      owner,
      spender,
    );

  return allowance >= amount;
}