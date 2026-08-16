export interface CreatePaymentInput {
  amount: number;
  currency: string;
  merchantId: string;
  description?: string;
}

export interface PaymentResponse {
  id: string;
  status:
    | "pending"
    | "completed"
    | "failed";

  amount: number;
  currency: string;
}