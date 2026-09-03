import {
  webhookService,
} from "../services/webhook.service.js";

export const webhookController = {

  payment: async (c: any) => {

    const body =
      await c.req.json();

    const result =
      await webhookService
        .handlePaymentWebhook(
          body,
        );

    return c.json(result);

  },

};