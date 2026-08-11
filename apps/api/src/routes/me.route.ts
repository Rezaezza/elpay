import { Hono } from "hono";

import { authMiddleware } from "../middleware/auth.middleware";
import { meController } from "../controllers/me.controller";

export const meRoute = new Hono();

meRoute.use("*", authMiddleware);

meRoute.get("/", async (c) => {
  const user = c.get("user");

  const profile = await meController.me(
    user.userId,
  );

  return c.json(profile);
});