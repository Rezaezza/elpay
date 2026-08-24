import { Hono } from "hono";

import {
  checkoutController,
} from "../controllers/checkout.controller";

export const checkoutRoute =
  new Hono();

checkoutRoute.post(
  "/",
  checkoutController.create,
);

checkoutRoute.get(
  "/:sessionId",
  checkoutController.get,
);