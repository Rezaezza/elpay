import {
  paymentService as paymentCore,
} from "@elpay/payment";

import type {
  CreatePaymentInput,
} from "../validators/payment.validator";

export class PaymentService {
  async create(
    payload: CreatePaymentInput,
  ) {
    return paymentCore.createPayment(payload);
  }

  async list() {
    return paymentCore.listPayments();
  }

  async get(id: string) {
    return paymentCore.getPayment(id);
  }

  async getByReference(
    reference: string,
  ) {
    return paymentCore.getPaymentByReference(
      reference,
    );
  }

  async listMerchant(
    merchantId: string,
  ) {
    return paymentCore.listMerchantPayments(
      merchantId,
    );
  }

  async cancel(id: string) {
    return paymentCore.cancel(id);
  }

  async refund(id: string) {
    return paymentCore.refund(id);
  }
}

export const paymentService =
  new PaymentService();