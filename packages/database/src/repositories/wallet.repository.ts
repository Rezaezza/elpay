import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class WalletRepository {
  async create(data: Prisma.WalletCreateInput) {
    return prisma.wallet.create({
      data,
    });
  }

  async findByAddress(address: string) {
    return prisma.wallet.findUnique({
      where: {
        address,
      },
    });
  }

  async findByUser(userId: string) {
    return prisma.wallet.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async update(
    id: string,
    data: Prisma.WalletUpdateInput
  ) {
    return prisma.wallet.update({
      where: {
        id,
      },
      data,
    });
  }

  async delete(id: string) {
    return prisma.wallet.delete({
      where: {
        id,
      },
    });
  }
}