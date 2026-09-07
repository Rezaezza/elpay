import {
  ARC_CHAIN_ID,
  BASE_CHAIN_ID,
  BASE_SEPOLIA_CHAIN_ID,
} from "../chains";

import { ARC_TESTNET_ADDRESSES } from "./arcTestnet";
import { BASE_SEPOLIA_ADDRESSES } from "./baseSepolia";
import { BASE_MAINNET_ADDRESSES } from "./baseMainnet";

import type { ContractAddresses } from "./types";

export * from "./arcTestnet";
export * from "./baseSepolia";
export * from "./baseMainnet";
export * from "./types";

export const CONTRACT_ADDRESSES = {
  arcTestnet: ARC_TESTNET_ADDRESSES,
  baseSepolia: BASE_SEPOLIA_ADDRESSES,
  baseMainnet: BASE_MAINNET_ADDRESSES,
} as const;

export function getContractAddresses(
  chainId: number
): ContractAddresses {
  switch (chainId) {
    case ARC_CHAIN_ID:
      return ARC_TESTNET_ADDRESSES;

    case BASE_SEPOLIA_CHAIN_ID:
      return BASE_SEPOLIA_ADDRESSES;

    case BASE_CHAIN_ID:
      return BASE_MAINNET_ADDRESSES;

    default:
      throw new Error(
        `Unsupported chain: ${chainId}`
      );
  }
}