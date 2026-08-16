import type {
  PaymentIntent,
  CreatePaymentIntentInput,
} from "./payment-intent.types";

export function createPaymentIntent(
  input: CreatePaymentIntentInput,
): PaymentIntent {
  const now = new Date();

  return {
    id: crypto.randomUUID(),

    merchantId: input.merchantId,

    chainId: input.chainId,

    recipient: input.recipient,

    token: input.token,

    amount: input.amount,

    currency: input.currency,

    description: input.description,

    metadata: input.metadata ?? {},

    status: "requires_payment",

    createdAt: now,

    expiresAt: new Date(
      now.getTime() + 15 * 60 * 1000,
    ),
  };
}