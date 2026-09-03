import { paymentService } from "../services/payment.service.js";

export const paymentController = {

  create: async (c: any) => {

    const body = await c.req.json();

    const payment =
      await paymentService.create(body);

    return c.json(payment, 201);
  },

  list: async (c: any) => {

    return c.json(
      await paymentService.list(),
    );
  },

  get: async (c: any) => {

    const id =
      c.req.param("id");

    return c.json(
      await paymentService.get(id),
    );
  },

  getByReference: async (c: any) => {

    const reference =
      c.req.param("reference");

    return c.json(
      await paymentService.getByReference(
        reference,
      ),
    );
  },

  merchantPayments: async (c: any) => {

    const merchantId =
      c.req.param("merchantId");

    return c.json(
      await paymentService.listMerchant(
        merchantId,
      ),
    );
  },

  cancel: async (c: any) => {

    const id =
      c.req.param("id");

    return c.json(
      await paymentService.cancel(id),
    );
  },

  refund: async (c: any) => {

    const id =
      c.req.param("id");

    return c.json(
      await paymentService.refund(id),
    );
  },

};