import { watchContractEvent } from "wagmi/actions";
import { QueryClient } from "@tanstack/react-query";

import { wagmiConfig } from "../wagmi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { paymentProcessorAbi } from "../abi";

export function watchPaymentEvents(
  paymentId: `0x${string}`,
  queryClient: QueryClient
) {
  const unwatch = watchContractEvent(
    wagmiConfig,
    {
      address:
        CONTRACT_ADDRESSES.arcTestnet.paymentProcessor,
      abi: paymentProcessorAbi,

      onLogs(logs) {
        for (const log of logs) {
  const args = log.args;

if (
    args &&
    "paymentId" in args &&
    args.paymentId === paymentId
) {
    queryClient.invalidateQueries({
        queryKey: ["payment", paymentId],
    });
} {
            queryClient.invalidateQueries({
              queryKey: ["payment", paymentId],
            });
          }
        }
      },
    }
  );

  return unwatch;
}