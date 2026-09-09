import type {
  Address,
} from "viem";

import type { Config } from "wagmi";

import { readContract } from "@wagmi/core";

const erc20Abi = [
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [
      {
        name: "owner",
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

export async function getTokenBalance(
  config: Config,
  token: Address,
  owner: Address,
): Promise<bigint> {
  return readContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [owner],
  });
}

export const balanceOf = getTokenBalance;

export async function hasEnoughBalance(
  config: Config,
  token: Address,
  owner: Address,
  amount: bigint,
): Promise<boolean> {
  const balance = await getTokenBalance(
    config,
    token,
    owner,
  );

  return balance >= amount;
}