import type { Address } from "viem";

export const BASE_MAINNET_ADDRESSES = {
  factory:
    "0x7404513478BFafCdE20Cec04109d6Df794be1158" as Address,

  merchantRegistry:
    "0xB95b7EFC920E3Ac752C00677Aba7a6417a8d27c8" as Address,

  paymentProcessor:
    "0x4fe0a411613eFAC845b62d2cfa505e96eaeb8528" as Address,

  escrow:
    "0x04e46da245279c193f41Fa512bd7A90E56542B14" as Address,
} as const;

export default BASE_MAINNET_ADDRESSES;