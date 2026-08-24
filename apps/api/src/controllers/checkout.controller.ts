import { checkoutService }
  from "../services/checkout.service";

export const checkoutController = {

  create: async (c: any) => {

    const body =
      await c.req.json();

    const session =
      await checkoutService.create(
        body,
      );

    return c.json(
      session,
      201,
    );

  },

  get: async (c: any) => {

    const session = {
      id: c.req.param("sessionId"),
    };

    return c.json(
      await checkoutService.get(
        session as any,
      ),
    );

  },

};