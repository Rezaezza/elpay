"use client";

import { ReactNode } from "react";

import { WagmiProvider } from "wagmi";

import { wagmiConfig } from "../lib/wagmi";

export function AppKitProvider({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <WagmiProvider config={wagmiConfig}>
      {children}
    </WagmiProvider>
  );
}