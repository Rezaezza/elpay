import { ARC_CHAIN_ID } from "./arc";
import { baseSepolia, base } from "viem/chains";

export const SUPPORTED_CHAIN_IDS = [
  ARC_CHAIN_ID,
  baseSepolia.id,
  base.id,
] as const;

export function isSupportedChain(
  chainId?: number
): boolean {
  if (!chainId) return false;

  return SUPPORTED_CHAIN_IDS.includes(
    chainId as (typeof SUPPORTED_CHAIN_IDS)[number]
  );
}