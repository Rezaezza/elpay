import { prisma } from "../client";
import { Prisma } from "@prisma/client";

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