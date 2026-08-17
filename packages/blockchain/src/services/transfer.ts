import { Address } from "viem";
import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import { wagmiConfig } from "../wagmi/config";

const erc20Abi = [
  {
    type: "function",
    stateMutability: "nonpayable",
    name: "transfer",
    inputs: [
      {
        name: "to",
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

//////////////////////////////////////////////////////////////
// TRANSFER ERC20
//////////////////////////////////////////////////////////////

export async function transferToken(
  token: Address,
  to: Address,
  amount: bigint
) {
  const hash = await writeContract(wagmiConfig, {
    address: token,
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, amount],
  });

  return waitForTransactionReceipt(wagmiConfig, {
    hash,
  });
}

//////////////////////////////////////////////////////////////
// ALIAS
//////////////////////////////////////////////////////////////

export const transfer = transferToken;

//////////////////////////////////////////////////////////////
// BULK TRANSFER
//////////////////////////////////////////////////////////////

export async function batchTransfer(
  token: Address,
  recipients: readonly Address[],
  amounts: readonly bigint[]
) {
  if (recipients.length !== amounts.length) {
    throw new Error("Recipients and amounts length mismatch");
  }

  const receipts = [];

  for (let i = 0; i < recipients.length; i++) {
    const receipt = await transferToken(
      token,
      recipients[i],
      amounts[i]
    );

    receipts.push(receipt);
  }

  return receipts;
}