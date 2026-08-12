import {
  createPublicClient,
  http,
  type PublicClient,
} from "viem";

import { arcTestnet } from "../chains";

export const publicClient: PublicClient = createPublicClient({
  chain: arcTestnet,
  transport: http(),
});