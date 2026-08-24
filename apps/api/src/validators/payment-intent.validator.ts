import { z } from "zod";

export const createPaymentIntentSchema = z.object({
  merchantId: z.string().min(1),

  amount: z.number().positive(),

  currency: z.string().default("USDC"),

  method: z.enum([
    "API",
    "CHECKOUT",
    "PAYMENT_LINK",
    "QR",
    "WALLET",
  ]),

  description: z.string().optional(),

  reference: z.string().optional(),

  metadata: z.record(z.string(), z.unknown()).optional(),

  expiresAt: z.coerce.date().optional(),
});

export type CreatePaymentIntentInput =
  z.infer<typeof createPaymentIntentSchema>;