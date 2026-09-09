import type {
  Address,
  Hash,
} from "viem";

import {
  writeContract,
  waitForTransactionReceipt,
} from "@wagmi/core";

import type { Config } from "wagmi";

const erc20Abi = [
  {
    type: "function",
    name: "transfer",
    stateMutability: "nonpayable",
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
        type: "bool",
      },
    ],
  },
] as const;

export async function transferToken(
  config: Config,
  token: Address,
  to: Address,
  amount: bigint
): Promise<Hash> {

  const hash = await writeContract(config, {
    address: token,
    abi: erc20Abi,
    functionName: "transfer",
    args: [to, amount],
  });

  await waitForTransactionReceipt(config, {
    hash,
  });

  return hash;
}

export const transfer = transferToken;

export async function batchTransfer(
  config: Config,
  token: Address,
  recipients: Address[],
  amounts: bigint[]
): Promise<Hash[]> {

  if (recipients.length !== amounts.length) {
    throw new Error(
      "Recipients and amounts length mismatch"
    );
  }

  const hashes: Hash[] = [];

  for (let i = 0; i < recipients.length; i++) {

    const hash = await transferToken(
      config,
      token,
      recipients[i],
      amounts[i]
    );

    hashes.push(hash);
  }

  return hashes;
}