import { prisma } from "../client";

export async function withTransaction<T>(
  callback: Parameters<typeof prisma.$transaction>[0]
) {
  return prisma.$transaction(callback);
}