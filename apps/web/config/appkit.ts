import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";
import { mainnet, baseSepolia } from "@reown/appkit/networks";

import { arcTestnet } from "./chains";

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
  mainnet,
];

// Tuple untuk createAppKit
export const networks = [
  arcTestnet,
  baseSepolia,
  mainnet,
] as [
  typeof arcTestnet,
  typeof baseSepolia,
  typeof mainnet,
];

export const wagmiAdapter =
  new WagmiAdapter({
    projectId,
    networks: adapterNetworks,
    ssr: true,
  });

export const wagmiConfig =
  wagmiAdapter.wagmiConfig;