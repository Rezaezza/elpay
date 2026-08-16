import { Hono } from "hono";

import {
  checkoutController,
} from "../controllers/checkout.controller";

export const checkoutRoute =
  new Hono();

checkoutRoute.get(
  "/:sessionId",
  async (c) => {
    const sessionId =
      c.req.param("sessionId");

    const session =
      await checkoutController.getSession(
        sessionId,
      );

    return c.json(session);
  },
);