import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import {
  arcTestnet,
  arcMainnet,
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

//////////////////////////////////////////////////////////////
// Networks
//////////////////////////////////////////////////////////////

const adapterNetworks = [
  arcTestnet,
  arcMainnet,
  baseSepolia,
  baseMainnet,
];

export const networks = [
  arcTestnet,
  arcMainnet,
  baseSepolia,
  baseMainnet,
] as [
  typeof arcTestnet,
  typeof arcMainnet,
  typeof baseSepolia,
  typeof baseMainnet,
];

console.log("NETWORKS =", networks);

//////////////////////////////////////////////////////////////
// Wagmi
//////////////////////////////////////////////////////////////

export const wagmiAdapter =
  new WagmiAdapter({
    projectId,
    networks: adapterNetworks,
    ssr: true,
  });

export const wagmiConfig =
  wagmiAdapter.wagmiConfig;