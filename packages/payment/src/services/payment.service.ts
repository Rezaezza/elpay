import {
  paymentRepository,
  merchantRepository,
  invoiceRepository,
  PaymentStatus,
} from "@elpay/database";

import type {
  CreatePaymentInput,
} from "../types";



export class PaymentService {
  async createPayment(
    input: CreatePaymentInput
  ) {
    const merchant =
      await merchantRepository.findById(
        input.merchantId
      );

    if (!merchant) {
      throw new Error("Merchant not found");
    }

    if (input.invoiceId) {
      const invoice =
        await invoiceRepository.findById(
          input.invoiceId
        );

      if (!invoice) {
        throw new Error("Invoice not found");
      }
    }

    if (input.reference) {
      const exists =
        await paymentRepository.findByReference(
          input.reference
        );

      if (exists) {
        throw new Error(
          "Reference already exists"
        );
      }
    }

    return paymentRepository.create({
      merchant: {
        connect: {
          id: input.merchantId,
        },
      },

      invoice: input.invoiceId
        ? {
            connect: {
              id: input.invoiceId,
            },
          }
        : undefined,

      paymentIntent: input.paymentIntentId
        ? {
            connect: {
              id: input.paymentIntentId,
            },
          }
        : undefined,

      payerAddress: input.payerAddress,

      receiverAddress: input.receiverAddress,

      network: input.network,

      tokenAddress: input.tokenAddress,

      amount: input.amount,

      currency:
        input.currency ?? "USDC",

      method: input.method,

      reference: input.reference,

      metadata:
        input.metadata as any,

      status: PaymentStatus.PENDING,
    });
  }

  async getPayment(id: string) {
    const payment =
      await paymentRepository.findById(id);

    if (!payment) {
      throw new Error("Payment not found");
    }

    return payment;
  }

  async getPaymentByReference(
    reference: string
  ) {
    return paymentRepository.findByReference(
      reference
    );
  }

  async getPaymentByTxHash(
    txHash: string
  ) {
    return paymentRepository.findByTxHash(
      txHash
    );
  }

  async listPayments() {
    return paymentRepository.list();
  }

  async listMerchantPayments(
    merchantId: string
  ) {
    return paymentRepository.listByMerchant(
      merchantId
    );
  }

  async markSuccess(
    id: string,
    txHash: string
  ) {
    await this.getPayment(id);

    return paymentRepository.update(id, {
      status: PaymentStatus.SUCCESS,

      txHash,

      paidAt: new Date(),
    });
  }

  async markFailed(
    id: string,
    reason?: string
  ) {
    await this.getPayment(id);

    return paymentRepository.update(id, {
      status: PaymentStatus.FAILED,

      failureReason: reason,
    });
  }

  async refund(id: string) {
    await this.getPayment(id);

    return paymentRepository.update(id, {
      status: PaymentStatus.REFUNDED,
    });
  }

  async cancel(id: string) {
    await this.getPayment(id);

    return paymentRepository.update(id, {
      status: PaymentStatus.CANCELLED,
    });
  }
}

export const paymentService =
  new PaymentService();