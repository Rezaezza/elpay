import {
  InvoiceStatus,
  merchantRepository,
  invoiceRepository,
} from "@elpay/database";

export interface CreateInvoiceInput {
  merchantId: string;

  invoiceNumber: string;

  amount: number;

  currency?: string;

  memo?: string;

  expiresAt?: Date;
}

export interface UpdateInvoiceInput {
  memo?: string;

  expiresAt?: Date;

  status?: InvoiceStatus;
}

export class InvoiceService {
  async createInvoice(
    input: CreateInvoiceInput
  ) {
    const merchant =
      await merchantRepository.findById(
        input.merchantId
      );

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    const exists =
      await invoiceRepository.findByInvoiceNumber(
        input.invoiceNumber
      );

    if (exists) {
      throw new Error(
        "Invoice number already exists"
      );
    }

    return invoiceRepository.create({
      merchant: {
        connect: {
          id: input.merchantId,
        },
      },

      invoiceNumber: input.invoiceNumber,

      amount: input.amount,

      currency:
        input.currency ?? "USDC",

      memo: input.memo,

      expiresAt: input.expiresAt,

      status: InvoiceStatus.DRAFT,
    });
  }

  async getInvoice(id: string) {
    const invoice =
      await invoiceRepository.findById(id);

    if (!invoice) {
      throw new Error("Invoice not found");
    }

    return invoice;
  }

  async getByInvoiceNumber(
    invoiceNumber: string
  ) {
    return invoiceRepository.findByInvoiceNumber(
      invoiceNumber
    );
  }

  async listInvoices() {
    return invoiceRepository.list();
  }

  async listMerchantInvoices(
    merchantId: string
  ) {
    return invoiceRepository.listByMerchant(
      merchantId
    );
  }

  async updateInvoice(
    id: string,
    input: UpdateInvoiceInput
  ) {
    await this.getInvoice(id);

    return invoiceRepository.update(id, input);
  }

  async markPaid(id: string) {
    await this.getInvoice(id);

    return invoiceRepository.update(id, {
      status: InvoiceStatus.PAID,
      paidAt: new Date(),
    });
  }

  async expire(id: string) {
    await this.getInvoice(id);

    return invoiceRepository.update(id, {
      status: InvoiceStatus.EXPIRED,
    });
  }

  async cancel(id: string) {
    await this.getInvoice(id);

    return invoiceRepository.update(id, {
      status: InvoiceStatus.CANCELLED,
    });
  }

  async deleteInvoice(id: string) {
    await this.getInvoice(id);

    return invoiceRepository.delete(id);
  }
}

export const invoiceService =
  new InvoiceService();