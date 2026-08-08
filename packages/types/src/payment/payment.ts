import type { WalletAddress } from "../common";

export interface Payment {
  id: string;
  sender: WalletAddress;
  receiver: WalletAddress;
  amount: string;
  memo?: string;
  txHash?: string;
  createdAt: Date;
}