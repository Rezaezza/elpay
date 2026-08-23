export type PaymentStatus =
  | "PENDING"
  | "PROCESSING"
  | "SUCCESS"
  | "FAILED"
  | "CANCELLED"
  | "REFUNDED";

export type PaymentMethod =
  | "API"
  | "CHECKOUT"
  | "PAYMENT_LINK"
  | "QR"
  | "WALLET";

export type ChainNetwork =
  | "ARC_TESTNET"
  | "ARC_MAINNET"
  | "BASE_SEPOLIA"
  | "BASE";

export interface CreatePaymentInput {
  merchantId: string;

  invoiceId?: string;

  paymentIntentId?: string;

  payerAddress?: string;

  receiverAddress: string;

  amount: number;

  network: ChainNetwork;

  tokenAddress: string;

  method: PaymentMethod;

  currency?: string;

  reference?: string;

  metadata?: Record<string, unknown>;
}

export interface PaymentResponse {
  id: string;

  merchantId: string;

  amount: number;

  status: string;

  txHash: string | null;

  createdAt: Date;
}