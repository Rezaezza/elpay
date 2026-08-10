import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { authController } from "../controllers/auth.controller";

import {
  createMessageSchema,
  verifySignatureSchema,
} from "../validators/auth.validator";

export const authRoute = new Hono();

authRoute.get("/nonce", (c) => {
  return c.json(authController.nonce());
});

authRoute.post(
  "/message",
  zValidator("json", createMessageSchema),
  async (c) => {
    const body = c.req.valid("json");

    const nonce = authController.nonce().nonce;

    return c.json(
      authController.message({
        address: body.address as `0x${string}`,
        nonce,
      }),
    );
  },
);

authRoute.post(
  "/verify",
  zValidator("json", verifySignatureSchema),
  async (c) => {
    const body = c.req.valid("json");

    const result = await authController.verify({
      address: body.address as `0x${string}`,
      message: body.message,
      signature: body.signature as `0x${string}`,
    });

    return c.json(result);
  },
);