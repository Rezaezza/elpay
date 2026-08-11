import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

import {
  createMessageSchema,
  verifySchema,
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

    const nonce =
      authController.nonce().nonce;

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
  zValidator("json", verifySchema),
  async (c) => {
    const body = c.req.valid("json");

    const result =
      await authController.verify({
        address: body.address as `0x${string}`,
        message: body.message,
        signature:
          body.signature as `0x${string}`,
      });

    return c.json(result);
  },
);

authRoute.post(
  "/logout",
  authMiddleware,
  async (c) => {
    const authorization =
      c.req.header("Authorization")!;

    const token =
      authorization.replace("Bearer ", "");

    return c.json(
      await authController.logout(token),
    );
  },
);