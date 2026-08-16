import {
  checkoutService,
} from "@elpay/payment";

export class CheckoutController {
  async getSession(
    sessionId: string,
  ) {
    return checkoutService.getCheckoutSession(
      sessionId,
    );
  }
}

export const checkoutController =
  new CheckoutController();