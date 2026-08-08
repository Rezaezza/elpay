import type { WalletAddress } from "@elpay/types";

export function isValidAddress(address: string): address is WalletAddress {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}

export function shortAddress(address: WalletAddress): string {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}