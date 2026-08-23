import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class PaymentRepository {
 create(data: Prisma.PaymentCreateInput) {
  return prisma.payment.create({
    data,
    include: {
      merchant: true,
      invoice: true,
      paymentIntent: true,
    },
  });
}

 list() {
  return prisma.payment.findMany({
    include: {
      merchant: true,
      invoice: true,
      paymentIntent: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

 findByTxHash(hash: string) {
  return prisma.payment.findUnique({
    where: {
      txHash: hash,
    },
    include: {
      merchant: true,
      invoice: true,
      paymentIntent: true,
      transactions: true,
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

  findById(id: string) {
  return prisma.payment.findUnique({
    where: { id },
    include: {
      merchant: true,
      invoice: true,
      paymentIntent: true,
      transactions: true,
    },
  });
}

listByMerchant(merchantId: string) {
  return prisma.payment.findMany({
    where: { merchantId },
    include: {
      invoice: true,
      paymentIntent: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

update(
  id: string,
  data: Prisma.PaymentUpdateInput
) {
  return prisma.payment.update({
    where: { id },
    data,
  });
}

findByReference(reference: string) {
  return prisma.payment.findUnique({
    where: {
      reference,
    },
    include: {
      merchant: true,
      invoice: true,
      paymentIntent: true,
      transactions: true,
    },
  });
}

}

export const paymentRepository =
  new PaymentRepository();