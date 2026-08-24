import { z } from "zod";

export const createInvoiceSchema = z.object({
  merchantId: z.string().min(1),

  invoiceNumber: z.string().min(1),

  amount: z.number().positive(),

  currency: z.string().default("USDC"),

  memo: z.string().optional(),

  expiresAt: z.coerce.date().optional(),
});

export const updateInvoiceSchema =
  createInvoiceSchema
    .omit({
      merchantId: true,
      invoiceNumber: true,
      amount: true,
    })
    .partial();

export type CreateInvoiceInput =
  z.infer<typeof createInvoiceSchema>;

export type UpdateInvoiceInput =
  z.infer<typeof updateInvoiceSchema>;