import {
  checkoutService as checkoutCore,
} from "@elpay/payment";

import type {
  CreateCheckoutInput,
} from "../validators/checkout.validator.js";

export class CheckoutService {

  async create(
    payload: CreateCheckoutInput,
  ) {
    return checkoutCore.createCheckoutSession(
      payload,
    );
  }

  async get(
    session: any,
  ) {
    return checkoutCore.getCheckoutSession(
      session,
    );
  }

}

export const checkoutService =
  new CheckoutService();