import {
  createWalletClient,
  custom,
  type WalletClient,
} from "viem";

import { arcTestnet } from "../chains";

export function getWalletClient(): WalletClient {
  return createWalletClient({
    chain: arcTestnet,
    transport: custom(window.ethereum!),
  });
}