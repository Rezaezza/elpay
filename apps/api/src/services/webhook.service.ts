import {
  paymentService as paymentCore,
} from "@elpay/payment";

import type {
  PaymentWebhookInput,
} from "../validators/webhook.validator.js";

export class WebhookService {

  async handlePaymentWebhook(
    input: PaymentWebhookInput,
  ) {

    if (
      input.status === "SUCCESS"
    ) {

      return paymentCore.markSuccess(
        input.paymentId,
        input.txHash!,
      );

    }

    return paymentCore.markFailed(
      input.paymentId,
      input.reason,
    );

  }

}

export const webhookService =
  new WebhookService();