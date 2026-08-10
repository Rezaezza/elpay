import { prisma } from "../client";

export class ApiKeyRepository {
  create(data: {
    merchantId: string;
    name: string;
    keyId: string;
    secretHash: string;
    userId?: string;
  }) {
    return prisma.apiKey.create({
      data,
    });
  }

  findByKeyId(keyId: string) {
    return prisma.apiKey.findUnique({
      where: {
        keyId,
      },
    });
  }

  findByMerchant(merchantId: string) {
    return prisma.apiKey.findMany({
      where: {
        merchantId,
      },
    });
  }

  revoke(id: string) {
    return prisma.apiKey.update({
      where: {
        id,
      },
      data: {
        status: "REVOKED",
      },
    });
  }

  delete(id: string) {
    return prisma.apiKey.delete({
      where: {
        id,
      },
    });
  }
}