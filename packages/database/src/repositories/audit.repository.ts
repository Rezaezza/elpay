import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export class AuditRepository {
  async create(data: Prisma.AuditLogCreateInput) {
    return prisma.auditLog.create({
      data,
    });
  }

  async findByUser(userId: string) {
    return prisma.auditLog.findMany({
      where: {
        userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }

  async latest(limit = 50) {
    return prisma.auditLog.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
    });
  }
}