import { Hono } from "hono";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { meController } from "../controllers/me.controller.js";

export const meRoute = new Hono();

meRoute.use("*", authMiddleware);

meRoute.get("/", async (c) => {
  const user = c.get("user");

  const profile = await meController.me(
    user.userId,
  );

  return c.json(profile);
});