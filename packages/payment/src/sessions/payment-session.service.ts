import {
  createPaymentSession,
} from "./payment-session";

import type {
  PaymentSession,
} from "./payment-session.types";

export class PaymentSessionService {

  private sessions =
    new Map<
      string,
      PaymentSession
    >();

  create(
    paymentIntentId: string,
  ) {

    const session =
      createPaymentSession(
        paymentIntentId,
      );

    this.sessions.set(
      session.id,
      session,
    );

    return session;
  }

  find(id: string) {

    return this.sessions.get(id);

  }

  list() {

    return [
      ...this.sessions.values(),
    ];

  }

  updateStatus(
    id: string,
    status: PaymentSession["status"],
  ) {

    const session =
      this.sessions.get(id);

    if (!session)
      return;

    session.status = status;

    this.sessions.set(
      id,
      session,
    );

    return session;

  }

}