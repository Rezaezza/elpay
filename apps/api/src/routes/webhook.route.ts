import { Hono } from "hono";

import {
  webhookController,
} from "../controllers/webhook.controller.js";

export const webhookRoute =
  new Hono();

webhookRoute.post(
  "/payment",
  webhookController.payment,
);