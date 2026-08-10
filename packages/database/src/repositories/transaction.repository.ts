import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class TransactionRepository {
  async create(data: Prisma.TransactionCreateInput) {
    return prisma.transaction.create({
      data,
    });
  }

  async findByHash(txHash: string) {
    return prisma.transaction.findUnique({
      where: {
        txHash,
      },
    });
  }

  async findByPayment(paymentId: string) {
    return prisma.transaction.findMany({
      where: {
        paymentId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(
    id: string,
    data: Prisma.TransactionUpdateInput
  ) {
    return prisma.transaction.update({
      where: {
        id,
      },
      data,
    });
  }
}