import { api } from "@/lib/api";

export interface CheckoutSession {
  id: string;

  merchantName: string;

  amount: string;

  token: string;

  description: string;

  status: string;

  approved: boolean;
}

export async function getCheckoutSession(
  sessionId: string,
) {
  return api<CheckoutSession>(
    `/checkout/${sessionId}`,
  );
}