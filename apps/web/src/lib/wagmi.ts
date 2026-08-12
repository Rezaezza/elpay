import { http } from "viem";
import { createConfig } from "wagmi";

import { arcTestnet } from "@elpay/blockchain";

export const wagmiConfig = createConfig({
  chains: [arcTestnet],

  transports: {
    [arcTestnet.id]: http(arcTestnet.rpcUrls.default.http[0]),
  },
});