import { paymentService } from "../services/payment.service";

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
    const id = c.req.param("id");

    return c.json(
      await paymentService.get(id),
    );
  },
};