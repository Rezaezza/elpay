import {
  createWalletClient,
  custom,
  type WalletClient,
} from "viem";

import { getChain } from "./chains";

export function getWalletClient(
  chainId: number
): WalletClient {
  if (!window.ethereum) {
    throw new Error("Ethereum provider not found.");
  }

  return createWalletClient({
    chain: getChain(chainId),
    transport: custom(window.ethereum),
  });
}