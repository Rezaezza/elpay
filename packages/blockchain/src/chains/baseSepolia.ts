import { defineChain } from "viem";

export const BASE_SEPOLIA_CHAIN_ID = 84532;

export const BASE_SEPOLIA_RPC =
  process.env.NEXT_PUBLIC_BASE_SEPOLIA_RPC_URL ??
  "https://sepolia.base.org";

export const BASE_SEPOLIA_EXPLORER =
  "https://sepolia.basescan.org";

export const baseSepolia = defineChain({
  id: BASE_SEPOLIA_CHAIN_ID,

  name: "Base Sepolia",

  network: "base-sepolia",

  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },

  rpcUrls: {
    default: {
      http: [BASE_SEPOLIA_RPC],
    },
  },

  blockExplorers: {
    default: {
      name: "BaseScan",
      url: BASE_SEPOLIA_EXPLORER,
    },
  },

  testnet: true,
});