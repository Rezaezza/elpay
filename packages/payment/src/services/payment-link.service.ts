import {
  merchantRepository,
  paymentLinkRepository,
  PaymentLinkStatus,
} from "@elpay/database";

export interface CreatePaymentLinkInput {
  merchantId: string;

  title: string;

  description?: string;

  amount: number;

  currency?: string;

  recipient: string;

  expiresAt?: Date;
}

export class PaymentLinkService {
  async create(
    input: CreatePaymentLinkInput
  ) {
    const merchant =
      await merchantRepository.findById(
        input.merchantId
      );

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    return paymentLinkRepository.create({
      merchant: {
        connect: {
          id: input.merchantId,
        },
      },

      title: input.title,

      description: input.description,

      amount: input.amount,

      currency:
        input.currency ?? "USDC",

      recipient: input.recipient,

      expiresAt: input.expiresAt,
    });
  }

  async get(id: string) {
    const paymentLink =
      await paymentLinkRepository.findById(id);

    if (!paymentLink) {
      throw new Error("Payment link not found");
    }

    return paymentLink;
  }

  async getActive(id: string) {
    const paymentLink =
      await paymentLinkRepository.findActive(id);

    if (!paymentLink) {
      throw new Error(
        "Payment link is inactive"
      );
    }

    if (
      paymentLink.expiresAt &&
      paymentLink.expiresAt < new Date()
    ) {
      await paymentLinkRepository.expire(id);

      throw new Error(
        "Payment link expired"
      );
    }

    return paymentLink;
  }

  async listMerchantLinks(
    merchantId: string
  ) {
    return paymentLinkRepository.listByMerchant(
      merchantId
    );
  }

  async markPaid(id: string) {
    await this.get(id);

    return paymentLinkRepository.markPaid(id);
  }

  async expire(id: string) {
    await this.get(id);

    return paymentLinkRepository.expire(id);
  }

  async cancel(id: string) {
    await this.get(id);

    return paymentLinkRepository.cancel(id);
  }

  async delete(id: string) {
    await this.get(id);

    return paymentLinkRepository.delete(id);
  }
}

export const paymentLinkService =
  new PaymentLinkService();