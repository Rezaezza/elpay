import { paymentIntentService } from "../services/payment-intent.service.js";

export const paymentIntentController = {
  create: async (c: any) => {
    const body = await c.req.json();

    return c.json(
      await paymentIntentService.create(body),
      201,
    );
  },

  get: async (c: any) => {
    return c.json(
      await paymentIntentService.get(
        c.req.param("id"),
      ),
    );
  },

  reference: async (c: any) => {
    return c.json(
      await paymentIntentService.getByReference(
        c.req.param("reference"),
      ),
    );
  },

  merchant: async (c: any) => {
    return c.json(
      await paymentIntentService.listMerchant(
        c.req.param("merchantId"),
      ),
    );
  },

  pending: async (c: any) => {
    return c.json(
      await paymentIntentService.markPending(
        c.req.param("id"),
      ),
    );
  },

  complete: async (c: any) => {
    return c.json(
      await paymentIntentService.complete(
        c.req.param("id"),
      ),
    );
  },

  cancel: async (c: any) => {
    return c.json(
      await paymentIntentService.cancel(
        c.req.param("id"),
      ),
    );
  },

  expire: async (c: any) => {
    return c.json(
      await paymentIntentService.expire(
        c.req.param("id"),
      ),
    );
  },
};