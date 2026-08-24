import { invoiceService } from "../services/invoice.service";

export const invoiceController = {
  create: async (c: any) => {
    const body = await c.req.json();

    return c.json(
      await invoiceService.create(body),
      201,
    );
  },

  list: async (c: any) => {
    return c.json(
      await invoiceService.list(),
    );
  },

  get: async (c: any) => {
    return c.json(
      await invoiceService.get(
        c.req.param("id"),
      ),
    );
  },

  update: async (c: any) => {
    const body = await c.req.json();

    return c.json(
      await invoiceService.update(
        c.req.param("id"),
        body,
      ),
    );
  },

  delete: async (c: any) => {
    await invoiceService.delete(
      c.req.param("id"),
    );

    return c.json({
      success: true,
    });
  },

  pay: async (c: any) => {
    return c.json(
      await invoiceService.markPaid(
        c.req.param("id"),
      ),
    );
  },
};