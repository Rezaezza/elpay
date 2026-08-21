import {
  defineChain,
  type AppKitNetwork,
} from "@reown/appkit/networks";

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
  },

  blockExplorers: {
    default: {
      name: "ArcScan",
      url: "https://testnet.arcscan.app",
    },
  },

  testnet: true,
});

export const networks: [AppKitNetwork] = [
  arcTestnet,
];