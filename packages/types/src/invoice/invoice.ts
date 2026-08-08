export type InvoiceStatus =
  | "pending"
  | "paid"
  | "expired";

export interface Invoice {
  id: string;
  amount: string;
  memo?: string;
  status: InvoiceStatus;
}