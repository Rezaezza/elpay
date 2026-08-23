import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class MerchantRepository {
  create(data: Prisma.MerchantCreateInput) {
    return prisma.merchant.create({
      data,
    });
  }

findById(id: string) {
  return prisma.merchant.findUnique({
    where: { id },
    include: {
      owner: true,
    },
  });
}

findBySlug(slug: string) {
  return prisma.merchant.findUnique({
    where: { slug },
    include: {
      owner: true,
    },
  });
}

 list() {
  return prisma.merchant.findMany({
    include: {
      owner: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

  update(
  id: string,
  data: Prisma.MerchantUpdateInput
) {
  return prisma.merchant.update({
    where: {
      id,
    },
    data,
  });
}

delete(id: string) {
  return prisma.merchant.delete({
    where: { id },
  });
}

}

export const merchantRepository = new MerchantRepository();

