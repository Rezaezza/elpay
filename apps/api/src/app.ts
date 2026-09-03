import { Hono } from "hono";
import { cors } from "hono/cors";


import { authRoute } from "./routes/auth.route.js";
import { meRoute } from "./routes/me.route.js";
import { userRoute } from "./routes/user.route.js";
import { protectedRoute } from "./routes/protected.route.js";
import { checkoutRoute } from "./routes/checkout.route.js";
import { paymentRoute } from "./routes/payment.route.js";
import { merchantRoute } from "./routes/merchant.route.js";
import { invoiceRoute } from "./routes/invoice.route.js";
import { paymentIntentRoute } from "./routes/payment-intent.route.js";
import { webhookRoute } from "./routes/webhook.route.js";




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

app.route("/checkout", checkoutRoute);

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

app.route("/payments", paymentRoute);

app.route(
  "/merchants",
  merchantRoute,
);

app.route(
  "/invoices",
  invoiceRoute,
);

app.route(
  "/payment-intents",
  paymentIntentRoute,
);

app.route(
  "/webhooks",
  webhookRoute,
);

