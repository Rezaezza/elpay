import { Hono } from "hono";

import { authMiddleware } from "../middleware/auth.middleware";
import { userController } from "../controllers/user.controller";

export const userRoute = new Hono();

userRoute.get(
  "/me",
  authMiddleware,
  (c) => {
    const user = c.get("user");

    return c.json(
      userController.me(user),
    );
  },
);