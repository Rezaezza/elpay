import { useQuery } from "@tanstack/react-query";

import { getAllowance } from "../services";

export function useAllowance(
  owner?: `0x${string}`,
  spender?: `0x${string}`,
) {
  return useQuery({
    queryKey: ["allowance", owner, spender],

    enabled: !!owner && !!spender,

    queryFn: () =>
      getAllowance(owner!, spender!),
  });
}