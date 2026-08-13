import { z } from "zod";

export const createMessageSchema = z.object({
  address: z
    .string()
    .regex(
      /^0x[a-fA-F0-9]{40}$/,
      "Invalid wallet address",
    ),

  nonce: z
    .string()
    .min(1, "Nonce is required"),
});

export const verifySchema = z.object({
  address: z
    .string()
    .regex(
      /^0x[a-fA-F0-9]{40}$/,
      "Invalid wallet address",
    ),

  message: z
    .string()
    .min(1, "Message is required"),

  signature: z
    .string()
    .regex(
      /^0x[a-fA-F0-9]+$/,
      "Invalid signature",
    ),
});