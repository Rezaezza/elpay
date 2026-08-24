"use client";

import { ReactNode } from "react";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";

import { createAppKit } from "@reown/appkit/react";

import {
  wagmiAdapter,
  wagmiConfig,
  projectId,
  networks,
} from "@/config/appkit";

import DebugChain from "@/components/DebugChain";

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
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider
        client={queryClient}
      >
        <DebugChain />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}