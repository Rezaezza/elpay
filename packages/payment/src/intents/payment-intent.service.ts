import {
  createPaymentIntent,
} from "./payment-intent";

import type {
  CreatePaymentIntentInput,
  PaymentIntent,
} from "./payment-intent.types";

export class PaymentIntentService {
  private intents = new Map<
    string,
    PaymentIntent
  >();

  create(
    input: CreatePaymentIntentInput,
  ) {
    const intent =
      createPaymentIntent(input);

    this.intents.set(
      intent.id,
      intent,
    );

    return intent;
  }

  find(id: string) {
    return this.intents.get(id);
  }

  updateStatus(
    id: string,
    status: PaymentIntent["status"],
  ) {
    const intent =
      this.intents.get(id);

    if (!intent) return;

    intent.status = status;

    this.intents.set(id, intent);

    return intent;
  }

  list() {
    return [...this.intents.values()];
  }
}