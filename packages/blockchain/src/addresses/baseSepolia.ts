import type { Address } from "viem";

export const BASE_SEPOLIA_ADDRESSES = {
  factory: "0x0000000000000000000000000000000000000000" as Address,

  merchantRegistry:
    "0x0000000000000000000000000000000000000000" as Address,

  paymentProcessor:
    "0x0000000000000000000000000000000000000000" as Address,

  escrow:
    "0x0000000000000000000000000000000000000000" as Address,
} as const;

export default BASE_SEPOLIA_ADDRESSES;