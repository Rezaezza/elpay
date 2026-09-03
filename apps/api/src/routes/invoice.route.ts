import { Hono } from "hono";

import {
  invoiceController,
} from "../controllers/invoice.controller.js";

export const invoiceRoute =
  new Hono();

invoiceRoute.post(
  "/",
  invoiceController.create,
);

invoiceRoute.get(
  "/",
  invoiceController.list,
);

invoiceRoute.get(
  "/:id",
  invoiceController.get,
);

invoiceRoute.patch(
  "/:id",
  invoiceController.update,
);

invoiceRoute.delete(
  "/:id",
  invoiceController.delete,
);

invoiceRoute.post(
  "/:id/pay",
  invoiceController.pay,
);