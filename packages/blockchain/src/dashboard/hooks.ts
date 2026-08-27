"use client";

import { useQuery } from "@tanstack/react-query";
import { useAccount } from "wagmi";

import { getDashboardData } from "./service";

export function useDashboard() {
  const { address, isConnected } = useAccount();

  return useQuery({
    queryKey: ["dashboard", address],

    enabled: Boolean(isConnected && address),

    queryFn: async () => {
      return getDashboardData(address!);
    },

    staleTime: 30_000,

    refetchInterval: 30_000,

    retry: 1,
  });
}