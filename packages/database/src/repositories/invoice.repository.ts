import { Prisma } from "@prisma/client";
import { prisma } from "../client";

export class InvoiceRepository {
  create(data: Prisma.InvoiceCreateInput) {
    return prisma.invoice.create({
      data,
    });
  }

 findById(id: string) {

  return prisma.invoice.findUnique({

    where: { id },

    include: {

      merchant: true,

      payments: true,

    },

  });

}

list() {
  return prisma.invoice.findMany({
    include: {
      merchant: true,
      payments: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

listByMerchant(merchantId: string) {

  return prisma.invoice.findMany({

    where: {

      merchantId,

    },

    include: {

      payments: true,

    },

    orderBy: {

      createdAt: "desc",

    },

  });

}

update(
  id: string,
  data: Prisma.InvoiceUpdateInput
) {

  return prisma.invoice.update({

    where: {

      id,

    },

    data,

  });

}


  findByInvoiceNumber(invoiceNumber: string) {
  return prisma.invoice.findUnique({
    where: {
      invoiceNumber,
    },
  });
}

markPaid(id: string) {
  return prisma.invoice.update({
    where: {
      id,
    },
    data: {
      status: "PAID",
      paidAt: new Date(),
    },
  });
}

expire(id: string) {
  return prisma.invoice.update({
    where: {
      id,
    },
    data: {
      status: "EXPIRED",
    },
  });
 }

 delete(id: string) {

  return prisma.invoice.delete({

    where: {

      id,

    },

  });

}

}

export const invoiceRepository =
  new InvoiceRepository();

