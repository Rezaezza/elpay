import { Hono } from "hono";
import { cors } from "hono/cors";

import "./types/context";

import { authRoute } from "./routes/auth.route";
import { meRoute } from "./routes/me.route";
import { userRoute } from "./routes/user.route";
import { protectedRoute } from "./routes/protected.route";

export const app = new Hono();

/**
 * Global error handler
 *
 * Dipakai untuk debugging error API.
 *
 * Development:
 * - menampilkan error di terminal
 * - mengembalikan message ke frontend
 *
 * Nanti sebelum production, detail error
 * sebaiknya tidak dikirim ke client.
 */
app.onError((error, c) => {
  console.error("");
  console.error("🔥 ElPay API ERROR");
  console.error("────────────────────────────");
  console.error(error);
  console.error("────────────────────────────");
  console.error("");

  return c.json(
    {
      error: "Internal Server Error",
      message:
        error instanceof Error
          ? error.message
          : String(error),
    },
    500,
  );
});

/**
 * CORS
 *
 * Frontend:
 * http://localhost:3000
 *
 * API:
 * http://localhost:3001
 */
app.use(
  "*",
  cors({
    origin: "http://localhost:3000",

    allowHeaders: [
      "Content-Type",
      "Authorization",
    ],

    allowMethods: [
      "GET",
      "POST",
      "PUT",
      "PATCH",
      "DELETE",
      "OPTIONS",
    ],
  }),
);

/**
 * Health check
 */
app.get("/", (c) => {
  return c.json({
    name: "ElPay API",
    version: "1.0.0",
    status: "ok",
  });
});

/**
 * Authentication
 *
 * /auth/nonce
 * /auth/message
 * /auth/verify
 * /auth/logout
 */
app.route("/auth", authRoute);

/**
 * Current authenticated user
 */
app.route("/auth/me", meRoute);

/**
 * User routes
 */
app.route("/user", userRoute);

/**
 * Protected routes
 */
app.route("/protected", protectedRoute);