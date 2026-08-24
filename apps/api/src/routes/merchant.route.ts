import { Hono } from "hono";

import {
  merchantController,
} from "../controllers/merchant.controller";

export const merchantRoute =
  new Hono();

merchantRoute.post(
  "/",
  merchantController.create,
);

merchantRoute.get(
  "/",
  merchantController.list,
);

merchantRoute.get(
  "/:id",
  merchantController.get,
);

merchantRoute.patch(
  "/:id",
  merchantController.update,
);

merchantRoute.delete(
  "/:id",
  merchantController.delete,
);