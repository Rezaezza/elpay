import type { Address } from "viem";

export const ARC_TESTNET_ADDRESSES = {
  factory:
    "0xB550ea63fad1BE3473C33325B45F3B1FfaFdCca9" as Address,

  merchantRegistry:
    "0xf31738934B95Bd39D616C244c6fA365B351B5A32" as Address,

  paymentProcessor:
    "0xBEDB1e43C0D869181Ce4DE12AD4bb19F6eF53992" as Address,

  escrow:
    "0xe3b4786F384Dc98A17908445F3EFd21dDfC49796" as Address,
} as const;

export default ARC_TESTNET_ADDRESSES;