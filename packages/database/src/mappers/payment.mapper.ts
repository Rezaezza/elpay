import type {
  Payment,
} from "@prisma/client";

import type {
  DatabasePayment,
} from "../dto/payment.dto";

export function toDatabasePayment(
  payment: Payment,
): DatabasePayment {
  return {
    id: payment.id,

    merchantId: payment.merchantId,

    amount: Number(payment.amount),

    status:
      payment.status === "PENDING"
        ? "pending"
        : payment.status === "SUCCESS"
        ? "completed"
        : "failed",

    txHash: payment.txHash,

    createdAt: payment.createdAt,
  };
}