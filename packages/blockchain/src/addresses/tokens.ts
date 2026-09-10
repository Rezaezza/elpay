import type { Address } from "viem";

export const TOKEN_ADDRESSES = {
  8453: {
    USDC: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
  },

  84532: {
    USDC: "0x036CbD53842c5426634e7929541eC2318f3dCF7e",
  },

  5042002: {
    USDC: "0x3600000000000000000000000000000000000000",
  },
} as const;

export function getUSDCAddress(
  chainId: number,
): Address {
  const chain =
    TOKEN_ADDRESSES[
      chainId as keyof typeof TOKEN_ADDRESSES
    ];

  if (!chain) {
    throw new Error(
      `Unsupported chain: ${chainId}`,
    );
  }

  return chain.USDC as Address;
}