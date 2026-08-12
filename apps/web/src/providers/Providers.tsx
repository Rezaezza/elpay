"use client";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import { WagmiProvider } from "wagmi";

import {
  wagmiConfig,
  BlockchainProvider,
} from "@elpay/blockchain";

const queryClient =
  new QueryClient();

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider
      client={queryClient}
    >
      <WagmiProvider
        config={wagmiConfig}
      >
        <BlockchainProvider>
          {children}
        </BlockchainProvider>
      </WagmiProvider>
    </QueryClientProvider>
  );
}