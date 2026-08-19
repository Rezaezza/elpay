import type { Address } from "viem";

import type {
  PaymentId,
  Timestamp,
} from "./common";

/* -------------------------------------------------------------------------- */
/*                               Payment Status                               */
/* -------------------------------------------------------------------------- */

export enum PaymentStatus {
  Created = 0,
  Approved = 1,
  Processing = 2,
  Paid = 3,
  Cancelled = 4,
  Refunded = 5,
}

/* -------------------------------------------------------------------------- */
/*                                  Payment                                   */
/* -------------------------------------------------------------------------- */

export interface Payment {
  id: PaymentId;

  payer: Address;

  merchant: Address;

  token: Address;

  amount: bigint;

  status: PaymentStatus;

  createdAt: Timestamp;

  expiresAt: Timestamp;

  description: string;
}