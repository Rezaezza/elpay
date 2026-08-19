import type { Address } from "viem";

import type {
  PaymentId,
} from "./common";

/* -------------------------------------------------------------------------- */
/*                                  Escrow                                    */
/* -------------------------------------------------------------------------- */

export interface Escrow {
  paymentId: PaymentId;

  token: Address;

  amount: bigint;

  released: boolean;
}