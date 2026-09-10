import type { Address } from "viem";

export const BASE_SEPOLIA_ADDRESSES = {
 factory:
    "0xC4a14464c2e53AaA522e07937a22060fA03F0145" as Address,

  merchantRegistry:
    "0xBEDB1e43C0D869181Ce4DE12AD4bb19F6eF53992" as Address,

  paymentProcessor:
    "0xB550ea63fad1BE3473C33325B45F3B1FfaFdCca9" as Address,

  escrow:
    "0x59d39bD1A3a577ec05c875Ec09fAab0BF6B39058" as Address,
} as const;

export default BASE_SEPOLIA_ADDRESSES;