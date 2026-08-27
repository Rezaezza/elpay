"use client";

import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";

import {
  getDashboardData,
} from "@elpay/blockchain";

export function useDashboard() {
  const { address } = useAccount();

  return useQuery({
    queryKey: ["dashboard", address],
    enabled: !!address,

    queryFn: async () => {
      if (!address) {
        throw new Error("Wallet not connected");
      }

      return getDashboardData(address);
    },

    staleTime: 30_000,

    refetchInterval: 15_000,

    retry: 1,
  });
}