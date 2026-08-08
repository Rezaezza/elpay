import { useQuery } from "@tanstack/react-query";

import { getUSDCBalance } from "../services";

export function useBalance(address?: `0x${string}`) {
  return useQuery({
    queryKey: ["balance", address],

    enabled: !!address,

    queryFn: () => getUSDCBalance(address!),
  });
}