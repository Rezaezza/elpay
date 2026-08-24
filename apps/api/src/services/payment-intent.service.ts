import {
  paymentIntentService as paymentCore,
} from "@elpay/payment";

import type {
  CreatePaymentIntentInput,
} from "../validators/payment-intent.validator";

export class PaymentIntentService {
  async create(
    payload: CreatePaymentIntentInput,
  ) {
    return paymentCore.create(payload);
  }

  async get(id: string) {
    return paymentCore.get(id);
  }

  async getByReference(
    reference: string,
  ) {
    return paymentCore.getByReference(
      reference,
    );
  }

  async listMerchant(
    merchantId: string,
  ) {
    return paymentCore.listMerchant(
      merchantId,
    );
  }

  async markPending(id: string) {
    return paymentCore.markPending(id);
  }

  async complete(id: string) {
    return paymentCore.complete(id);
  }

  async cancel(id: string) {
    return paymentCore.cancel(id);
  }

  async expire(id: string) {
    return paymentCore.expire(id);
  }
}

export const paymentIntentService =
  new PaymentIntentService();