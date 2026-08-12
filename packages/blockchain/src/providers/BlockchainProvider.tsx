"use client";

import { PropsWithChildren } from "react";

import { WagmiProvider } from "wagmi";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { wagmiConfig } from "../wagmi";

import { AppKitProvider } from "./AppKitProvider";

const queryClient = new QueryClient();

export function BlockchainProvider(
  props: PropsWithChildren,
) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <AppKitProvider>
          {props.children}
        </AppKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}