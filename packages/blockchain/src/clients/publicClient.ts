import {
  createPublicClient,
  type PublicClient,
} from "viem";

import { getChain } from "./chains";
import { transports } from "./transports";

export function getPublicClient(
  chainId: number
): PublicClient {
  return createPublicClient({
    chain: getChain(chainId),
    transport: transports[chainId],
  });
}