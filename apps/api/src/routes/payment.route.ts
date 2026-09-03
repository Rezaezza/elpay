import { Hono } from "hono";

import {
  paymentController,
} from "../controllers/payment.controller.js";

export const paymentRoute =
  new Hono();

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

paymentRoute.get(
  "/reference/:reference",
  paymentController.getByReference,
);

paymentRoute.get(
  "/merchant/:merchantId",
  paymentController.merchantPayments,
);

paymentRoute.post(
  "/:id/cancel",
  paymentController.cancel,
);

paymentRoute.post(
  "/:id/refund",
  paymentController.refund,
);