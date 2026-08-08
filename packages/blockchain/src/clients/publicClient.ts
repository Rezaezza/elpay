import { createPublicClient, http } from "viem";

import { arcTestnet } from "../chains";

export const publicClient = createPublicClient({
  chain: arcTestnet,
  transport: http(),
});