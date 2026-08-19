import type { Address } from "viem";
import { readContract } from "@wagmi/core";

import { wagmiConfig } from "../wagmi";

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
  token: Address,
  owner: Address
): Promise<bigint> {
  return await readContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [owner],
  });
}

export const balanceOf = getTokenBalance;

export async function hasEnoughBalance(
  token: Address,
  owner: Address,
  amount: bigint
): Promise<boolean> {
  const balance = await getTokenBalance(
    token,
    owner
  );

  return balance >= amount;
}