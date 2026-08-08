import {
  createWalletClient,
  custom,
  type EIP1193Provider,
} from "viem";

import { arcTestnet } from "../chains";

export function getWalletClient() {
  if (typeof window === "undefined") {
    throw new Error("Wallet client hanya tersedia di browser.");
  }

  const provider = window.ethereum as EIP1193Provider | undefined;

  if (!provider) {
    throw new Error("Ethereum provider tidak ditemukan.");
  }

  return createWalletClient({
    chain: arcTestnet,
    transport: custom(provider),
  });
}