import { createAppKit } from "@reown/appkit/react";

import { wagmiConfig } from "./wagmi";

export const appKit = createAppKit({
  projectId:
    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID!,

  wagmiConfig,

  metadata: {
    name: "ElPay",

    description:
      "USDC Payment Infrastructure",

    url: "http://localhost:3000",

    icons: [],
  },

  enableAnalytics: false,
});