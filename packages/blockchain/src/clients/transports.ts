import { http, type Transport } from "viem";

import {
  ARC_CHAIN_ID,
  ARC_RPC_URL,
  BASE_CHAIN_ID,
  BASE_RPC,
  BASE_SEPOLIA_CHAIN_ID,
  BASE_SEPOLIA_RPC,
} from "../chains";

export const transports: Record<number, Transport> = {
  [ARC_CHAIN_ID]: http(ARC_RPC_URL),

  [BASE_SEPOLIA_CHAIN_ID]: http(BASE_SEPOLIA_RPC),

  [BASE_CHAIN_ID]: http(BASE_RPC),
};