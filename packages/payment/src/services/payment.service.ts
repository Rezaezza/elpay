import type {
  CreatePaymentInput,
  PaymentResponse,
} from "../types/payment";

export class PaymentService {
  async create(
    input: CreatePaymentInput,
  ): Promise<PaymentResponse> {
    console.log(
      "Create payment",
      input,
    );

    return {
      id: crypto.randomUUID(),
      status: "pending",
      amount: input.amount,
      currency: input.currency,
    };
  }
}

export const paymentService =
  new PaymentService();