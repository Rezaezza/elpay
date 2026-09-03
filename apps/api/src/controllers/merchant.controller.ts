import { merchantService } from "../services/merchant.service.js";

export const merchantController = {
  create: async (c: any) => {
    const body = await c.req.json();

    const merchant =
      await merchantService.create(body);

    return c.json(merchant, 201);
  },

  list: async (c: any) => {
    return c.json(
      await merchantService.list(),
    );
  },

  get: async (c: any) => {
    const id = c.req.param("id");

    return c.json(
      await merchantService.get(id),
    );
  },

  update: async (c: any) => {
    const id = c.req.param("id");

    const body = await c.req.json();

    return c.json(
      await merchantService.update(
        id,
        body,
      ),
    );
  },

  delete: async (c: any) => {
    const id = c.req.param("id");

    await merchantService.delete(id);

    return c.json({
      success: true,
    });
  },
};