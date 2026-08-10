import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class WebhookRepository {
  create(data: {
    merchantId: string;
    url: string;
    secretHash: string;
  }) {
    return prisma.webhook.create({
      data,
    });
  }

  findByMerchant(merchantId: string) {
    return prisma.webhook.findMany({
      where: {
        merchantId,
      },
    });
  }

  update(
  id: string,
  data: Prisma.WebhookUpdateInput
) {
    return prisma.webhook.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: string) {
    return prisma.webhook.delete({
      where: {
        id,
      },
    });
  }

  disable(id: string) {
  return prisma.webhook.update({
    where: {
      id,
    },
    data: {
      enabled: false,
    },
  });
}

}