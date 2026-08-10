import { prisma } from "../client";

import {
  UserRole,
  Prisma,
} from "@prisma/client";

export class UserRepository {

  async findById(id: string) {
    return prisma.user.findUnique({
      where: {
        id,
      },
      include: {
        wallets: true,
      },
    });
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: {
        email,
      },
      include: {
        wallets: true,
      },
    });
  }

  async findByWallet(address: string) {
    return prisma.user.findFirst({
      where: {
        wallets: {
          some: {
            address,
          },
        },
      },
      include: {
        wallets: true,
      },
    });
  }

  async create(data: {
    email?: string;
    username?: string;
    avatar?: string;
    role?: UserRole;
  }) {
    return prisma.user.create({
      data,
      include: {
        wallets: true,
      },
    });
  }

  async update(
    id: string,
    data: Prisma.UserUpdateInput
  ) {
    return prisma.user.update({
      where: {
        id,
      },
      data,
      include: {
        wallets: true,
      },
    });
  }

  async delete(id: string) {
    return prisma.user.delete({
      where: {
        id,
      },
    });
  }

}