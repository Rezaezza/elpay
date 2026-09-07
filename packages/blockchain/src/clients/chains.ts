import {
  arcTestnet,
  baseMainnet,
  baseSepolia,
  ARC_CHAIN_ID,
  BASE_CHAIN_ID,
  BASE_SEPOLIA_CHAIN_ID,
} from "../chains";

export function getChain(chainId: number) {
  switch (chainId) {
    case ARC_CHAIN_ID:
      return arcTestnet;

    case BASE_SEPOLIA_CHAIN_ID:
      return baseSepolia;

    case BASE_CHAIN_ID:
      return baseMainnet;

    default:
      throw new Error(`Unsupported chain ${chainId}`);
  }
}