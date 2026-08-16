export type CheckoutStatus =
  | "pending"
  | "paid"
  | "expired"
  | "cancelled";

export interface CreateCheckoutSessionInput {
  merchantId: string;

  amount: bigint;

  currency: string;

  chainId: number;

  successUrl: string;

  cancelUrl: string;

  metadata?: Record<string, string>;
}

export interface CheckoutSession {
  id: string;

  merchantId: string;

  amount: bigint;

  currency: string;

  chainId: number;

  status: CheckoutStatus;

  successUrl: string;

  cancelUrl: string;

  metadata: Record<string, string>;

  createdAt: Date;

  expiresAt: Date;
}