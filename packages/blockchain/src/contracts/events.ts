export interface PaymentEvent {
  hash: `0x${string}`;

  from: `0x${string}`;

  to: `0x${string}`;

  amount: bigint;

  memo: string;

  timestamp: bigint;
}

export interface InvoicePaidEvent {
  invoiceId: bigint;

  payer: `0x${string}`;

  amount: bigint;
}