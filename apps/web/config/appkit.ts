import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import {
  arcTestnet,
  baseSepolia,
  baseMainnet,
} from "@elpay/blockchain";

export const projectId =
  process.env.NEXT_PUBLIC_PROJECT_ID!;

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_PROJECT_ID is missing",
  );
}

// Array mutable untuk WagmiAdapter
const adapterNetworks = [
  arcTestnet,
  baseSepolia,
  baseMainnet,
];

// Tuple untuk createAppKit
export const networks = [
  arcTestnet,
  baseSepolia,
  baseMainnet,
] as [
  typeof arcTestnet,
  typeof baseSepolia,
  typeof baseMainnet,
];

export const wagmiAdapter =
  new WagmiAdapter({
    projectId,
    networks: adapterNetworks,
    ssr: true,
  });

export const wagmiConfig =
  wagmiAdapter.wagmiConfig;