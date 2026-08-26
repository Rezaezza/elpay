import {
  decodeEventLog,
  type TransactionReceipt,
} from "viem";

import { paymentProcessorAbi } from "../abi";

export function getPaymentCreatedId(
  receipt: TransactionReceipt
): `0x${string}` | null {
  for (const log of receipt.logs) {
    try {
      const event = decodeEventLog({
        abi: paymentProcessorAbi,
        data: log.data,
        topics: log.topics,
      });

      if (event.eventName === "PaymentCreated") {
        return event.args.paymentId as `0x${string}`;
      }
    } catch {
      // ignore unrelated logs
    }
  }

  return null;
}