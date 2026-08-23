export interface CreatePaymentRequest {
  amount: number;

  currency: string;

  merchantId: string;

  description?: string;
}

export interface Payment {
  id: string;

  amount: number;

  currency: string;

  status: string;

  createdAt: string;
}