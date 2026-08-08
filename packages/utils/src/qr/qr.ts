import type { WalletAddress } from "@elpay/types";

export interface PaymentQRPayload {
  address: WalletAddress;
  amount: string;
  memo?: string;
}

export function buildPaymentQRPayload(
  payload: PaymentQRPayload,
): string {
  return JSON.stringify(payload);
}