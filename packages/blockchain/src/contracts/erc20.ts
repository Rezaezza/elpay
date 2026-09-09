import type {
  Address,
  Hash,
} from "viem";

import type { Config } from "wagmi";

import {
  readContract,
  writeContract,
} from "wagmi/actions";

import { erc20Abi } from "../abi";

/* -------------------------------------------------------------------------- */
/* READ */
/* -------------------------------------------------------------------------- */

export async function erc20BalanceOf(
  config: Config,
  token: Address,
  account: Address,
) {
  return readContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "balanceOf",
    args: [account],
  });
}

export async function erc20Allowance(
  config: Config,
  token: Address,
  owner: Address,
  spender: Address,
) {
  return readContract(config, {
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
  config: Config,
  token: Address,
  spender: Address,
  amount: bigint,
): Promise<Hash> {
  return writeContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [spender, amount],
  });
}

export async function erc20Transfer(
  config: Config,
  token: Address,
  to: Address,
  amount: bigint,
): Promise<Hash> {
  return writeContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, amount],
  });
}

/* -------------------------------------------------------------------------- */
/* EXPORT */
/* -------------------------------------------------------------------------- */

export const erc20 = {
  balanceOf: erc20BalanceOf,
  allowance: erc20Allowance,
  approve: erc20Approve,
  transfer: erc20Transfer,
};