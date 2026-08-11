import { z } from "zod";

export const createMessageSchema = z.object({
  address: z.string(),
});

export const verifySchema = z.object({
  address: z.string(),
  message: z.string(),
  signature: z.string(),
});