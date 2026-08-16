import crypto from "node:crypto";

import type {
  CheckoutSession,
  CreateCheckoutSessionInput,
} from "./types";

export async function createCheckoutSession(
  input: CreateCheckoutSessionInput,
): Promise<CheckoutSession> {
  return {
    id: crypto.randomUUID(),

    merchantId: input.merchantId,

    amount: input.amount,

    currency: input.currency,

    chainId: input.chainId,

    status: "pending",

    successUrl: input.successUrl,

    cancelUrl: input.cancelUrl,

    metadata: input.metadata ?? {},

    createdAt: new Date(),

    expiresAt: new Date(
      Date.now() + 30 * 60 * 1000,
    ),
  };
}