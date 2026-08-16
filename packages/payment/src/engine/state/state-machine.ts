import {
  PaymentState,
} from "./payment.state";

export function canTransition(
  from: PaymentState,
  to: PaymentState,
): boolean {

  const transitions: Record<
    PaymentState,
    PaymentState[]
  > = {

    [PaymentState.CREATED]: [
      PaymentState.APPROVAL_REQUIRED,
      PaymentState.PROCESSING,
      PaymentState.CANCELLED,
      PaymentState.EXPIRED,
    ],

    [PaymentState.APPROVAL_REQUIRED]: [
      PaymentState.APPROVING,
      PaymentState.CANCELLED,
    ],

    [PaymentState.APPROVING]: [
      PaymentState.APPROVED,
      PaymentState.FAILED,
    ],

    [PaymentState.APPROVED]: [
      PaymentState.PROCESSING,
    ],

    [PaymentState.PROCESSING]: [
      PaymentState.PAID,
      PaymentState.FAILED,
    ],

    [PaymentState.PAID]: [],

    [PaymentState.FAILED]: [],

    [PaymentState.EXPIRED]: [],

    [PaymentState.CANCELLED]: [],
  };

  return transitions[from].includes(to);
}