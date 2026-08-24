import { z } from "zod";

export const createPaymentSchema = z.object({
  merchantId: z.string().min(1),

  receiverAddress: z.string().min(1),

  network: z.enum([
    "ARC_TESTNET",
    "ARC_MAINNET",
    "BASE_SEPOLIA",
    "BASE",
  ]),

  tokenAddress: z.string().min(1),

  method: z.enum([
    "API",
    "CHECKOUT",
    "PAYMENT_LINK",
    "QR",
    "WALLET",
  ]),

  amount: z.number().positive(),

  currency: z.string().default("USDC"),

  description: z.string().optional(),

  reference: z.string().optional(),

  payerAddress: z.string().optional(),

  invoiceId: z.string().optional(),

  paymentIntentId: z.string().optional(),

  metadata: z.record(z.string(), z.unknown()).optional(),
});

export type CreatePaymentInput =
  z.infer<typeof createPaymentSchema>;