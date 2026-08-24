import {
  createCheckoutSession,
  getCheckoutSession,
} from "../checkout";

import type {
  CheckoutSession,
  CreateCheckoutSessionInput,
} from "../checkout";

export class CheckoutService {

  async createCheckoutSession(
    input: CreateCheckoutSessionInput,
  ): Promise<CheckoutSession> {

    return await createCheckoutSession(
      input,
    );

  }

  async getCheckoutSession(
    session: CheckoutSession,
  ) {

    return getCheckoutSession(
      session,
    );

  }

}

export const checkoutService =
  new CheckoutService();