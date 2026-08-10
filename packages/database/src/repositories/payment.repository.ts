import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class PaymentRepository {
  create(data: Prisma.PaymentCreateInput) {
    return prisma.payment.create({
      data,
    });
  }

 findByTxHash(hash: string) {
  return prisma.payment.findUnique({
    where: {
      txHash: hash,
    },
  });
}

  list() {
    return prisma.payment.findMany({
      include: {
        invoice: true,
      },
    });
  }

 markSuccess(id: string) {
  return prisma.payment.update({
    where: {
      id,
    },
    data: {
      status: "SUCCESS",
      paidAt: new Date(),
    },
  });
}

markFailed(id: string) {
  return prisma.payment.update({
    where: {
      id,
    },
    data: {
      status: "FAILED",
    },
  });
}

}