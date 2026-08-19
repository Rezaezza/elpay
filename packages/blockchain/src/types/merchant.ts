import type { Address } from "viem";

import type {
  Timestamp,
} from "./common";

/* -------------------------------------------------------------------------- */
/*                              Merchant Status                               */
/* -------------------------------------------------------------------------- */

export enum MerchantStatus {
  None = 0,
  Active = 1,
  Paused = 2,
  Disabled = 3,
}

/* -------------------------------------------------------------------------- */
/*                                 Merchant                                   */
/* -------------------------------------------------------------------------- */

export interface Merchant {
  owner: Address;

  name: string;

  metadataURI: string;

  status: MerchantStatus;

  createdAt: Timestamp;
}