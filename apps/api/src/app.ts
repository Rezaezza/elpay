import { Hono } from "hono";

import "./types/context";

import { authRoute } from "./routes/auth.route";
import { meRoute } from "./routes/me.route";
import { userRoute } from "./routes/user.route";
import { protectedRoute } from "./routes/protected.route";

export const app = new Hono();

app.get("/", (c) => {
  return c.json({
    name: "ElPay API",
    version: "1.0.0",
    status: "ok",
  });
});

app.route("/auth", authRoute);
app.route("/auth/me", meRoute);
app.route("/user", userRoute);
app.route("/protected", protectedRoute);