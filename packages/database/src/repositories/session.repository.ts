import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class SessionRepository {
  async create(data: Prisma.SessionCreateInput) {
    return prisma.session.create({
      data,
    });
  }

  async findByToken(token: string) {
    return prisma.session.findUnique({
      where: {
        token,
      },
    });
  }

  async findByUser(userId: string) {
    return prisma.session.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async delete(token: string) {
    return prisma.session.delete({
      where: {
        token,
      },
    });
  }

  async deleteExpired(date: Date) {
    return prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: date,
        },
      },
    });
  }
}