import { prisma } from "../client";

export class InvoiceRepository {
  create(data: any) {
    return prisma.invoice.create({
      data,
    });
  }

  findById(id: string) {
    return prisma.invoice.findUnique({
      where: { id },
    });
  }

  list() {
    return prisma.invoice.findMany({
      include: {
        merchant: true,
        payment: true,
      },
      orderBy: {
        createdAt: "desc",
      },
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

}

