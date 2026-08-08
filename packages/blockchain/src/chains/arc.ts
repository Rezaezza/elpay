import { defineChain } from "viem";

export const ARC_CHAIN_ID = 5042002;

export const ARC_RPC_URL =
  "https://rpc.testnet.arc.network";

export const ARC_EXPLORER =
  "https://testnet.arcscan.app";

export const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000";

export const USDC_DECIMALS = 6;

export const arcTestnet = defineChain({
  id: ARC_CHAIN_ID,

  name: "Arc Testnet",

  network: "arc-testnet",

  nativeCurrency: {
    name: "USDC",

    symbol: "USDC",

    decimals: 6,
  },

  rpcUrls: {
    default: {
      http: [ARC_RPC_URL],
    },
  },

  blockExplorers: {
    default: {
      name: "Arc Explorer",

      url: ARC_EXPLORER,
    },
  },

  testnet: true,
});