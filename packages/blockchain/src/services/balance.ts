import { Address } from "viem";
import { readContract } from "@wagmi/core";

import { wagmiConfig } from "../wagmi/config";

const erc20Abi = [
  {
    type: "function",
    stateMutability: "view",
    name: "balanceOf",
    inputs: [
      {
        name: "owner",
        type: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
      },
    ],
  },
] as const;

/**
 * Get ERC20 token balance
 */
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

/**
 * Alias
 */
export const balanceOf = getTokenBalance;

/**
 * Check whether account has enough balance
 */
export async function hasEnoughBalance(
  token: Address,
  owner: Address,
  amount: bigint
): Promise<boolean> {
  const balance = await getTokenBalance(token, owner);

  return balance >= amount;
}