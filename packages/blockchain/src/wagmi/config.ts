import { createConfig } from "wagmi";

import {
  arcTestnet,
  baseSepolia,
  baseMainnet,
} from "../chains";

import { transports } from "../clients/transports";

export const wagmiConfig = createConfig({
  chains: [
    arcTestnet,
    baseSepolia,
    baseMainnet,
  ],

  transports,

  ssr: true,

  multiInjectedProviderDiscovery: true,
});