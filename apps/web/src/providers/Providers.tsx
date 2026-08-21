"use client";

import { WagmiProvider } from "wagmi";

import {
  QueryClientProvider,
} from "@tanstack/react-query";

import {
  wagmiAdapter,
} from "@/config/reown";

import { queryClient } from "@/lib/query/client";

export function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig}
    >
      <QueryClientProvider
        client={queryClient}
      >
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}