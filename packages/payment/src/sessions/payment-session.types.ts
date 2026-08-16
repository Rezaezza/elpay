export type PaymentSessionStatus =
  | "open"
  | "completed"
  | "expired"
  | "cancelled";

export interface PaymentSession {
  id: string;

  paymentIntentId: string;

  checkoutUrl: string;

  status: PaymentSessionStatus;

  createdAt: Date;

  expiresAt: Date;
}