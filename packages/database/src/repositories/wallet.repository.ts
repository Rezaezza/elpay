import { prisma } from "../client";

import {
  ChainNetwork,
  Prisma,
  WalletType,
} from "@prisma/client";

export class WalletRepository {

  async create(data: {
    address: string;
    userId: string;
    network: ChainNetwork;
    walletType: WalletType;
  }) {

    return prisma.wallet.create({

      data: {

        address: data.address,

        network: data.network,

        walletType: data.walletType,

        user: {
          connect: {
            id: data.userId,
          },
        },

      },

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