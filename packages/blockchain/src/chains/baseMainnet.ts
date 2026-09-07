import { defineChain } from "viem";

export const BASE_CHAIN_ID = 8453;

export const BASE_RPC =
  process.env.NEXT_PUBLIC_BASE_RPC_URL ??
  "https://mainnet.base.org";

export const BASE_EXPLORER =
  "https://basescan.org";

export const baseMainnet = defineChain({
  id: BASE_CHAIN_ID,

  name: "Base",

  network: "base",

  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },

  rpcUrls: {
    default: {
      http: [BASE_RPC],
    },
  },

  blockExplorers: {
    default: {
      name: "BaseScan",
      url: BASE_EXPLORER,
    },
  },

  testnet: false,
});