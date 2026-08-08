import { createWalletClient, custom } from "viem";

import { arcTestnet } from "../chains";

export function getWalletClient() {
  if (typeof window === "undefined") {
    throw new Error("Wallet client hanya tersedia di browser.");
  }

  return createWalletClient({
    chain: arcTestnet,
    transport: custom(window.ethereum!),
  });
}