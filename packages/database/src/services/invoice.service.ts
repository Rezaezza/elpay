import { InvoiceRepository } from "../repositories/invoice.repository";

export class InvoiceService {
  constructor(
    private readonly repository = new InvoiceRepository()
  ) {}

  create(data: Parameters<InvoiceRepository["create"]>[0]) {
    return this.repository.create(data);
  }

  findByInvoiceNumber(invoiceNumber: string) {
    return this.repository.findByInvoiceNumber(invoiceNumber);
  }

  markPaid(id: string) {
    return this.repository.markPaid(id);
  }

  expire(id: string) {
    return this.repository.expire(id);
  }
}