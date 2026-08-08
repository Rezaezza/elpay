import type { WalletAddress } from "../common";

export interface Wallet {
  address: WalletAddress;
  balance: string;
  network: string;
}