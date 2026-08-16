"use client";

import { createAppKit } from "@reown/appkit-core";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import {
  defineChain,
  type AppKitNetwork,
} from "@reown/appkit/networks";

const projectId =
  process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_REOWN_PROJECT_ID is not configured",
  );
}

export const arcTestnet = defineChain({
  id: 5042002,

  caipNetworkId: "eip155:5042002",

  chainNamespace: "eip155",

  name: "Arc Testnet",

  nativeCurrency: {
    name: "USDC",
    symbol: "USDC",
    decimals: 6,
  },

  rpcUrls: {
    default: {
      http: [
        "https://rpc.testnet.arc.network",
      ],
    },

    public: {
      http: [
        "https://rpc.testnet.arc.network",
      ],
    },
  },

  blockExplorers: {
    default: {
      name: "ArcScan",
      url: "https://testnet.arcscan.app",
    },
  },
});

export const networks: [
  AppKitNetwork,
  ...AppKitNetwork[],
] = [
  arcTestnet,
];

export const wagmiAdapter =
  new WagmiAdapter({
    projectId,
    networks,
    ssr: true,
  });

export const appKit =
  createAppKit({
    projectId,

    adapters: [wagmiAdapter],

    networks,

    defaultNetwork: arcTestnet,

    metadata: {
      name: "ElPay",

      description:
        "ElPay Web3 Payment Infrastructure",

      url: "http://localhost:3000",

      icons: [],
    },

    features: {
      analytics: false,
    },
  });