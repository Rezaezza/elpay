import type { Address } from "viem";

export const ARC_TESTNET_ADDRESSES = {
  factory: "0x7404513478BFafCdE20Cec04109d6Df794be1158" as Address,

  merchantRegistry:
    "0xf19898c31Dd7cAAdeb5694875A327739f9bE4895" as Address,

  paymentProcessor:
    "0xF71af6aE440D60F2bf030620c5E55fA61871172C" as Address,

  escrow:
    "0x91BBe8aB4cc03722B7844d43917970E048b3Fe3e" as Address,
} as const;

export default ARC_TESTNET_ADDRESSES;