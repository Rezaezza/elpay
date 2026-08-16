import type { PaymentSession } from "./payment-session.types";

export function createPaymentSession(
  paymentIntentId: string,
): PaymentSession {

  const now = new Date();

  const id = crypto.randomUUID();

  return {

    id,

    paymentIntentId,

    checkoutUrl:
      `/pay/${id}`,

    status: "open",

    createdAt: now,

    expiresAt: new Date(
      now.getTime() + 15 * 60 * 1000,
    ),
  };

}