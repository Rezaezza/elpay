import {
  createPublicClient,
  createWalletClient,
  custom,
  http,
} from "viem";

import { arcTestnet } from "./chains";

export const RPC_URL = "https://rpc.testnet.arc.network";

export const publicClient = createPublicClient({
  chain: arcTestnet,
  transport: http(RPC_URL),
});

/**
 * Browser Wallet Client
 *
 * Digunakan setelah user connect wallet
 * (MetaMask / Rabby / Coinbase Wallet)
 */
export function getWalletClient() {
  if (typeof window === "undefined") {
    throw new Error("Wallet client hanya tersedia di browser.");
  }

  if (!window.ethereum) {
    throw new Error("Ethereum provider tidak ditemukan.");
  }

  return createWalletClient({
    chain: arcTestnet,
    transport: custom(window.ethereum),
  });
}

export const BLOCK_EXPLORER =
  "https://testnet.arcscan.app";

export const CHAIN_ID = arcTestnet.id;