import { z } from "zod";

export const createPaymentSchema = z.object({
  merchantId: z.string().min(1),

  amount: z.number().positive(),

  currency: z.string(),

  description: z.string().optional(),
});

export type CreatePaymentInput =
  z.infer<typeof createPaymentSchema>;