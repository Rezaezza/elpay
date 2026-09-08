"use client";

import { ReactNode, useEffect } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider, useChainId } from "wagmi";
import { createAppKit } from "@reown/appkit/react";

import {
  wagmiAdapter,
  wagmiConfig,
  projectId,
  networks,
} from "@/config/appkit";

import { setActiveChainId } from "@elpay/blockchain";

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

function ChainSync() {
  const chainId = useChainId();

  useEffect(() => {
    setActiveChainId(chainId);
  }, [chainId]);

  return null;
}

export function WalletProvider({ children }: Props) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <ChainSync />
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}