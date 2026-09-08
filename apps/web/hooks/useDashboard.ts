"use client";

import {
  useAccount,
  useChainId,
} from "wagmi";
import { useQuery } from "@tanstack/react-query";

import {
  getDashboardData,
} from "@elpay/blockchain";

export function useDashboard() {
  const { address } = useAccount();

  const chainId = useChainId();

  return useQuery({
    queryKey: ["dashboard", address, chainId],
    enabled: !!address,

    queryFn: async () => {
      if (!address) {
        throw new Error("Wallet not connected");
      }

      return getDashboardData(
  chainId,
  address
);
    },

    staleTime: 30_000,

    refetchInterval: 15_000,

    retry: 1,
  });
}