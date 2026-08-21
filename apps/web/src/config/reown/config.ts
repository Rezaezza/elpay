import { createAppKit } from "@reown/appkit";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

import { metadata } from "./metadata";
import { arcTestnet, networks } from "./network";

const projectId =
  process.env.NEXT_PUBLIC_REOWN_PROJECT_ID;

if (!projectId) {
  throw new Error(
    "NEXT_PUBLIC_REOWN_PROJECT_ID is not configured"
  );
}

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

    metadata,

    features: {
      analytics: false,
    },
  });