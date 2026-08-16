export type PaymentIntentStatus =
  | "requires_payment"
  | "processing"
  | "confirmed"
  | "failed"
  | "expired"
  | "cancelled";

export interface CreatePaymentIntentInput {
  merchantId: string;

  chainId: number;

  recipient: `0x${string}`;

  token: `0x${string}`;

  amount: bigint;

  currency: string;

  description?: string;

  metadata?: Record<string, string>;
}

export interface PaymentIntent {
  id: string;

  merchantId: string;

  chainId: number;

  recipient: `0x${string}`;

  token: `0x${string}`;

  amount: bigint;

  currency: string;

  description?: string;

  metadata: Record<string, string>;

  status: PaymentIntentStatus;

  createdAt: Date;

  expiresAt: Date;
}