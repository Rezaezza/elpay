import { z } from "zod";

export const paymentWebhookSchema =
  z.object({

    paymentId: z.string(),

    status: z.enum([
      "SUCCESS",
      "FAILED",
    ]),

    txHash: z.string().optional(),

    reason: z.string().optional(),

  });

export type PaymentWebhookInput =
  z.infer<
    typeof paymentWebhookSchema
  >;