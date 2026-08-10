import { prisma } from "../client";

export class UserRepository {
  findById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        wallets: true,
      },
    });
  }

  findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
      include: {
        wallets: true,
      },
    });
  }

  create(data: {
    email?: string;
    username?: string;
    avatar?: string;
  }) {
    return prisma.user.create({
      data,
    });
  }

  update(
    id: string,
    data: {
      email?: string;
      username?: string;
      avatar?: string;
    }
  ) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  delete(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }

  findByWallet(address: string) {
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

}