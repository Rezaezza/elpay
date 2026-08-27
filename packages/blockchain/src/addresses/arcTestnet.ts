import type { Address } from "viem";

export const ARC_TESTNET_ADDRESSES = {
  factory:
    "0x53b462C083aD34a2206169B7c0e52C6159eCEca8" as Address,

  merchantRegistry:
    "0x9e11fdd280b611a59c999d4e8c10EFe61b27eacC" as Address,

  paymentProcessor:
    "0x6B550c69DC6495B9d9d29678341deD9B613e7d15" as Address,

  escrow:
    "0xC4a14464c2e53AaA522e07937a22060fA03F0145" as Address,
} as const;

export default ARC_TESTNET_ADDRESSES;