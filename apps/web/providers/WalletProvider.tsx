"use client";

import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";

import { createAppKit } from "@reown/appkit/react";

import {
  wagmiAdapter,
  wagmiConfig,
  projectId,
  networks,
} from "@/config/appkit";

const queryClient = new QueryClient();

createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [...networks],
  defaultNetwork: networks[0],
  metadata: {
    name: "ElPay",
    description: "Production Web3 Payment Infrastructure",
    url: "http://localhost:3000",
    icons: ["https://elpay.finance/logo.png"],
  },
});

interface Props {
  children: ReactNode;
}

export function WalletProvider({
  children,
}: Props) {
  console.log("wagmiConfig =", wagmiConfig);

  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}