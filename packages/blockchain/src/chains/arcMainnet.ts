import { defineChain } from "viem";

export const ARC_MAINNET_CHAIN_ID = 5042; 

export const ARC_MAINNET_RPC_URL =
  process.env.NEXT_PUBLIC_ARC_MAINNET_RPC_URL ??
  "https://rpc.mainnet.arc.io";

export const ARC_MAINNET_EXPLORER =
  process.env.NEXT_PUBLIC_ARC_MAINNET_EXPLORER ??
  "https://explorer.arc.io";

export const arcMainnet = defineChain({
  id: ARC_MAINNET_CHAIN_ID,

  name: "Arc Mainnet",

  network: "arc-mainnet",

  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
  },

  rpcUrls: {
    default: {
      http: [ARC_MAINNET_RPC_URL],
    },
  },

  blockExplorers: {
    default: {
      name: "Arc Explorer",
      url: ARC_MAINNET_EXPLORER,
    },
  },

  testnet: false,
});