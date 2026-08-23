import type { CreatePaymentInput } from "../validators/payment.validator";

export class PaymentService {
  async create(
    payload: CreatePaymentInput,
  ) {
    return payload;
  }

  async list() {
    return [];
  }

  async get(id: string) {
    return { id };
  }
}

export const paymentService =
  new PaymentService();