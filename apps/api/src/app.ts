import { Hono } from "hono";

import { authRoute } from "./routes/auth.route";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: "ElPay API",
    version: "1.0.0",
    status: "ok",
  });
});

app.route("/auth", authRoute);