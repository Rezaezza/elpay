import { z } from "zod";

export const createCheckoutSchema = z.object({
  merchantId: z.string().min(1),

  amount: z.bigint(),

  currency: z.string(),

  chainId: z.number(),

  successUrl: z.string().url(),

  cancelUrl: z.string().url(),

  metadata: z.record(z.string(), z.string()).optional(),
});

export type CreateCheckoutInput =
  z.infer<typeof createCheckoutSchema>;