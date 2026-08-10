import { prisma } from "../client";

export class MerchantRepository {
  create(data: any) {
    return prisma.merchant.create({
      data,
    });
  }

  findById(id: string) {
    return prisma.merchant.findUnique({
      where: { id },
    });
  }

  findBySlug(slug: string) {
    return prisma.merchant.findUnique({
      where: { slug },
    });
  }

  list() {
    return prisma.merchant.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  update(id: string, data: any) {
  return prisma.merchant.update({
    where: {
      id,
    },
    data,
  });
}

}

