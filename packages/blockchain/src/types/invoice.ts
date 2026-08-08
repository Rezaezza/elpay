export interface InvoiceInput {
  receiver: `0x${string}`;

  amount: string;

  memo?: string;
}

export type InvoiceStatus =
  | "pending"
  | "paid"
  | "expired";