import { Hono } from "hono";
import { zValidator } from "@hono/zod-validator";

import { authController } from "../controllers/auth.controller";
import { authMiddleware } from "../middleware/auth.middleware";

import {
  createMessageSchema,
  verifySchema,
} from "../validators/auth.validator";

export const authRoute = new Hono();

/**
 * GET /auth/nonce
 *
 * Generate nonce untuk SIWE login.
 */
authRoute.get("/nonce", (c) => {
  return c.json(
    authController.nonce(),
  );
});

/**
 * POST /auth/message
 *
 * Membuat SIWE message menggunakan
 * nonce yang sudah diberikan kepada client.
 *
 * IMPORTANT:
 * Jangan membuat nonce baru di sini.
 */
authRoute.post(
  "/message",
  zValidator(
    "json",
    createMessageSchema,
  ),
  async (c) => {
    const body =
      c.req.valid("json");

    const result =
      authController.message({
        address:
          body.address as `0x${string}`,

        nonce: body.nonce,
      });

    return c.json(result);
  },
);

/**
 * POST /auth/verify
 *
 * Verify signature SIWE dari wallet.
 *
 * Jika valid:
 * - user dicari/dibuat
 * - session dibuat
 * - JWT dibuat
 */
authRoute.post(
  "/verify",
  zValidator(
    "json",
    verifySchema,
  ),
  async (c) => {
    const body =
      c.req.valid("json");

    const result =
      await authController.verify({
        address:
          body.address as `0x${string}`,

        message:
          body.message,

        signature:
          body.signature as `0x${string}`,
      });

    return c.json(result);
  },
);

/**
 * POST /auth/logout
 *
 * Membutuhkan JWT:
 *
 * Authorization: Bearer <token>
 */
authRoute.post(
  "/logout",
  authMiddleware,
  async (c) => {
    const authorization =
      c.req.header(
        "Authorization",
      );

    if (!authorization) {
      return c.json(
        {
          error:
            "Missing Authorization header",
        },
        401,
      );
    }

    if (
      !authorization.startsWith(
        "Bearer ",
      )
    ) {
      return c.json(
        {
          error:
            "Invalid Authorization header",
        },
        401,
      );
    }

    const token =
      authorization.slice(
        "Bearer ".length,
      );

    if (!token) {
      return c.json(
        {
          error:
            "Missing access token",
        },
        401,
      );
    }

    const result =
      await authController.logout(
        token,
      );

    return c.json(result);
  },
);