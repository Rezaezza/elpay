import { Hono } from "hono";

import { authMiddleware } from "../middleware/auth.middleware.js";
import { userController } from "../controllers/user.controller.js";

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