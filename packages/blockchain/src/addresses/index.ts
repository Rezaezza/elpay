export * from "./arcTestnet";
export * from "./baseSepolia";

import { ARC_TESTNET_ADDRESSES } from "./arcTestnet";
import { BASE_SEPOLIA_ADDRESSES } from "./baseSepolia";

export const CONTRACT_ADDRESSES = {
  arcTestnet: ARC_TESTNET_ADDRESSES,
  baseSepolia: BASE_SEPOLIA_ADDRESSES,
} as const;