export interface DatabasePayment {
  id: string;

  merchantId: string;

  amount: number;

  status:
    | "pending"
    | "completed"
    | "failed";

  txHash: string | null;

  createdAt: Date;
}