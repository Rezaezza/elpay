import { Address } from "viem";
import { readContract } from "@wagmi/core";

import { wagmiConfig } from "../wagmi/config";
import { PaymentProcessorAddress } from "../contracts";

const erc20Abi = [
  {
    type: "function",
    stateMutability: "view",
    name: "allowance",
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
        name: "",
        type: "uint256",
      },
    ],
  },
] as const;

/**
 * Get ERC20 allowance.
 */
export async function getAllowance(
  token: Address,
  owner: Address,
  spender: Address = PaymentProcessorAddress
): Promise<bigint> {
  return await readContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [owner, spender],
  });
}

/**
 * Alias
 */
export const allowanceOf = getAllowance;

/**
 * Check allowance.
 */
export async function hasEnoughAllowance(
  token: Address,
  owner: Address,
  amount: bigint,
  spender: Address = PaymentProcessorAddress
): Promise<boolean> {
  const allowance = await getAllowance(
    token,
    owner,
    spender
  );

  return allowance >= amount;
}