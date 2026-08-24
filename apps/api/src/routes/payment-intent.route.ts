import { Hono } from "hono";

import {
  paymentIntentController,
} from "../controllers/payment-intent.controller";

export const paymentIntentRoute =
  new Hono();

paymentIntentRoute.post(
  "/",
  paymentIntentController.create,
);

paymentIntentRoute.get(
  "/:id",
  paymentIntentController.get,
);

paymentIntentRoute.get(
  "/reference/:reference",
  paymentIntentController.reference,
);

paymentIntentRoute.get(
  "/merchant/:merchantId",
  paymentIntentController.merchant,
);

paymentIntentRoute.post(
  "/:id/pending",
  paymentIntentController.pending,
);

paymentIntentRoute.post(
  "/:id/complete",
  paymentIntentController.complete,
);

paymentIntentRoute.post(
  "/:id/cancel",
  paymentIntentController.cancel,
);

paymentIntentRoute.post(
  "/:id/expire",
  paymentIntentController.expire,
);