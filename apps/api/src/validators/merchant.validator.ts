import { z } from "zod";

export const createMerchantSchema = z.object({
  ownerId: z.string().min(1),

  name: z.string().min(1),

  slug: z.string().min(1),

  logo: z.string().optional(),

  description: z.string().optional(),

  website: z.string().optional(),

  supportEmail: z.string().email().optional(),

  webhookUrl: z.string().optional(),
});

export const updateMerchantSchema =
  createMerchantSchema.partial();

export type CreateMerchantInput =
  z.infer<typeof createMerchantSchema>;

export type UpdateMerchantInput =
  z.infer<typeof updateMerchantSchema>;