import { Address } from "viem";
import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import { wagmiConfig } from "../wagmi/config";
import { PaymentProcessorAddress } from "../contracts";

const erc20Abi = [
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "approve",
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
        name: "",
        type: "bool",
      },
    ],
  },
] as const;

/**
 * Approve ERC20 token for PaymentProcessor.
 */
export async function approveToken(
  token: Address,
  amount: bigint,
  spender: Address = PaymentProcessorAddress
) {
  const hash = await writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "approve",
    args: [spender, amount],
  });

  return waitForTransactionReceipt(wagmiConfig, {
    hash,
  });
}

/**
 * Unlimited approval.
 */
export async function approveMax(
  token: Address,
  spender: Address = PaymentProcessorAddress
) {
  return approveToken(
    token,
    0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffn,
    spender
  );
}

/**
 * Alias
 */
export const approve = approveToken;