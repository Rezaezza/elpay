import type { Address } from "viem";
import { readContract } from "@wagmi/core";

import { wagmiConfig } from "../wagmi";
import { getPaymentProcessorAddress } from "../resolver/contracts";

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
  token: Address,
  owner: Address,
  spender: Address = getPaymentProcessorAddress()
): Promise<bigint> {
  return readContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [owner, spender],
  });
}

export const allowanceOf = getAllowance;

export async function hasEnoughAllowance(
  token: Address,
  owner: Address,
  amount: bigint,
  spender: Address = getPaymentProcessorAddress()
): Promise<boolean> {
  const allowance = await getAllowance(
    token,
    owner,
    spender
  );

  return allowance >= amount;
}