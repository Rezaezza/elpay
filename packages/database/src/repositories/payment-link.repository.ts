import { Prisma, PaymentLinkStatus } from "@prisma/client";
import { prisma } from "../client";

export class PaymentLinkRepository {
  async create(data: Prisma.PaymentLinkCreateInput) {
    return prisma.paymentLink.create({
      data,
      include: {
        merchant: true,
      },
    });
  }

  async findById(id: string) {
    return prisma.paymentLink.findUnique({
      where: { id },
      include: {
        merchant: true,
      },
    });
  }

  async listByMerchant(merchantId: string) {
    return prisma.paymentLink.findMany({
      where: {
        merchantId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async findActive(id: string) {
    return prisma.paymentLink.findFirst({
      where: {
        id,
        status: PaymentLinkStatus.ACTIVE,
      },
      include: {
        merchant: true,
      },
    });
  }

  async update(
    id: string,
    data: Prisma.PaymentLinkUpdateInput
  ) {
    return prisma.paymentLink.update({
      where: { id },
      data,
    });
  }

  async markPaid(id: string) {
    return prisma.paymentLink.update({
      where: { id },
      data: {
        status: PaymentLinkStatus.PAID,
      },
    });
  }

  async expire(id: string) {
    return prisma.paymentLink.update({
      where: { id },
      data: {
        status: PaymentLinkStatus.EXPIRED,
      },
    });
  }

  async cancel(id: string) {
    return prisma.paymentLink.update({
      where: { id },
      data: {
        status: PaymentLinkStatus.CANCELLED,
      },
    });
  }

  async delete(id: string) {
    return prisma.paymentLink.delete({
      where: { id },
    });
  }
}

export const paymentLinkRepository =
  new PaymentLinkRepository();