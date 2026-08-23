import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class PaymentIntentRepository {
  create(data: Prisma.PaymentIntentCreateInput) {
    return prisma.paymentIntent.create({
      data,
      include: {
        merchant: true,
      },
    });
  }

  findById(id: string) {
    return prisma.paymentIntent.findUnique({
      where: { id },
      include: {
        merchant: true,
        payments: true,
      },
    });
  }

  findByReference(reference: string) {
    return prisma.paymentIntent.findUnique({
      where: { reference },
    });
  }

  listByMerchant(merchantId: string) {
    return prisma.paymentIntent.findMany({
      where: {
        merchantId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  update(
    id: string,
    data: Prisma.PaymentIntentUpdateInput
  ) {
    return prisma.paymentIntent.update({
      where: {
        id,
      },
      data,
    });
  }

  delete(id: string) {
    return prisma.paymentIntent.delete({
      where: {
        id,
      },
    });
  }
}

export const paymentIntentRepository =
  new PaymentIntentRepository();