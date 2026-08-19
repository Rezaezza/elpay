import type { Address, Hash } from "viem";
import { readContract, writeContract } from "wagmi/actions";

import { wagmiConfig } from "../wagmi";
import { erc20Abi } from "../abi";

/* -------------------------------------------------------------------------- */
/* READ */
/* -------------------------------------------------------------------------- */

export async function erc20BalanceOf(
  token: Address,
  account: Address,
) {
  return readContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [account],
  });
}

export async function erc20Allowance(
  token: Address,
  owner: Address,
  spender: Address,
) {
  return readContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "allowance",
    args: [owner, spender],
  });
}

/* -------------------------------------------------------------------------- */
/* WRITE */
/* -------------------------------------------------------------------------- */

export async function erc20Approve(
  token: Address,
  spender: Address,
  amount: bigint,
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [spender, amount],
  });
}

export async function erc20Transfer(
  token: Address,
  to: Address,
  amount: bigint,
): Promise<Hash> {
  return writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, amount],
  });
}

export const erc20 = {
  balanceOf: erc20BalanceOf,
  allowance: erc20Allowance,
  approve: erc20Approve,
  transfer: erc20Transfer,
};