import {
  merchantRepository,
  paymentRepository,
  PaymentIntentStatus,
  PaymentMethod,
  paymentIntentRepository,
} from "@elpay/database";

import crypto from "node:crypto";

import { Prisma } from "@elpay/database";

export interface CreatePaymentIntentInput {
  merchantId: string;

  amount: number;

  currency?: string;

  method: PaymentMethod;

  description?: string;

  reference?: string;

  metadata?: Record<string, unknown>;

  expiresAt?: Date;
}

export class PaymentIntentService {
  async create(
    input: CreatePaymentIntentInput
  ) {
    const merchant =
      await merchantRepository.findById(
        input.merchantId
      );

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    if (input.reference) {
      const payment =
        await paymentRepository.findByReference(
          input.reference
        );

      if (payment) {
        throw new Error(
          "Reference already exists"
        );
      }
    }

    return paymentIntentRepository.create({
      merchant: {
        connect: {
          id: input.merchantId,
        },
      },

      amount: input.amount,

      currency:
        input.currency ?? "USDC",

      method: input.method,

      description: input.description,

      reference: input.reference,

      metadata: input.metadata as Prisma.InputJsonValue,

      expiresAt: input.expiresAt,

      clientSecret:
        crypto.randomUUID(),

      checkoutUrl: null,

      status:
        PaymentIntentStatus.CREATED,
    });
  }

  async get(id: string) {
    const paymentIntent =
      await paymentIntentRepository.findById(id);

    if (!paymentIntent) {
      throw new Error(
        "Payment Intent not found"
      );
    }

    return paymentIntent;
  }

  async getByReference(
    reference: string
  ) {
    return paymentIntentRepository.findByReference(
      reference
    );
  }

  async listMerchant(
    merchantId: string
  ) {
    return paymentIntentRepository.listByMerchant(
      merchantId
    );
  }

  async markPending(id: string) {
    await this.get(id);

    return paymentIntentRepository.update(id, {
      status:
        PaymentIntentStatus.PENDING,
    });
  }

  async complete(id: string) {
    await this.get(id);

    return paymentIntentRepository.update(id, {
      status:
        PaymentIntentStatus.COMPLETED,
    });
  }

  async cancel(id: string) {
    await this.get(id);

    return paymentIntentRepository.update(id, {
      status:
        PaymentIntentStatus.CANCELLED,
    });
  }

  async expire(id: string) {
    await this.get(id);

    return paymentIntentRepository.update(id, {
      status:
        PaymentIntentStatus.EXPIRED,
    });
  }
}

export const paymentIntentService =
  new PaymentIntentService();