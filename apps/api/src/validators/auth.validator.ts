import { z } from "zod";

export const createMessageSchema = z.object({
  address: z.string().startsWith("0x"),
});

export const verifySignatureSchema = z.object({
  address: z.string().startsWith("0x"),
  message: z.string(),
  signature: z.string(),
});