import {
  invoiceService as paymentInvoiceService,
} from "@elpay/payment";

import type {
  CreateInvoiceInput,
  UpdateInvoiceInput,
} from "../validators/invoice.validator.js";

export class InvoiceService {
  async create(
    payload: CreateInvoiceInput,
  ) {
    return paymentInvoiceService.createInvoice(
      payload,
    );
  }

  async list() {
    return paymentInvoiceService.listInvoices();
  }

  async get(id: string) {
    return paymentInvoiceService.getInvoice(id);
  }

  async update(
    id: string,
    payload: UpdateInvoiceInput,
  ) {
    return paymentInvoiceService.updateInvoice(
      id,
      payload,
    );
  }

  async delete(id: string) {
    return paymentInvoiceService.deleteInvoice(
      id,
    );
  }

  async markPaid(id: string) {
    return paymentInvoiceService.markPaid(id);
  }
}

export const invoiceService =
  new InvoiceService();