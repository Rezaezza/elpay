import { Hono } from "hono";

import { paymentController } from "../controllers/payment.controller";

export const paymentRoute = new Hono();

paymentRoute.post(
  "/",
  paymentController.create,
);

paymentRoute.get(
  "/",
  paymentController.list,
);

paymentRoute.get(
  "/:id",
  paymentController.get,
);