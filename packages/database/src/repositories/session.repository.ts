import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class SessionRepository {

  create(data: Prisma.SessionCreateInput) {
    return prisma.session.create({
      data,
    });
  }

  findByToken(token: string) {
    return prisma.session.findUnique({
      where: {
        token,
      },
    });
  }

  findByUser(userId: string) {
    return prisma.session.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  delete(token: string) {
    return prisma.session.delete({
      where: {
        token,
      },
    });
  }

  deleteExpired(date: Date) {
    return prisma.session.deleteMany({
      where: {
        expiresAt: {
          lt: date,
        },
      },
    });
  }

}