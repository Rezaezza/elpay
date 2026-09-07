"use client";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

import { getDashboardData } from "./service";

export function useDashboard() {
  const { address, chain, isConnected } = useAccount();

  return useQuery({
    queryKey: ["dashboard", chain?.id, address],

    enabled: Boolean(isConnected && address),

    queryFn: async () => {
      if (!chain?.id) {
  throw new Error("Wallet is not connected to a supported network.");
}

return getDashboardData(chain.id, address!);
    },

    staleTime: 30_000,

    refetchInterval: 30_000,

    retry: 1,
  });
}