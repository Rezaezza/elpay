import { Hono } from "hono";

import { authMiddleware } from "../middleware/auth.middleware";

export const protectedRoute =
  new Hono();

protectedRoute.use("*", authMiddleware);

protectedRoute.get("/", (c) => {
  const user = c.get("user");

  return c.json({
    success: true,
    user,
  });
});