import {
  PaymentState,
} from "./payment.state";

import {
  canTransition,
} from "./state-machine";

export class PaymentStateService {

  transition(
    current: PaymentState,
    next: PaymentState,
  ) {

    if (
      !canTransition(current, next)
    ) {
      throw new Error(
        `Invalid transition ${current} -> ${next}`,
      );
    }

    return next;
  }
}

export const paymentStateService =
  new PaymentStateService();