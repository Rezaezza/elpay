import { watchContractEvent } from "wagmi/actions";
import { QueryClient } from "@tanstack/react-query";

import { wagmiConfig } from "../wagmi";
import { CONTRACT_ADDRESSES } from "../addresses";
import { paymentProcessorAbi } from "../abi";

export function watchPaymentEvents(
  queryClient: QueryClient,
  paymentId?: `0x${string}`
) {
  return watchContractEvent(wagmiConfig, {
    address: CONTRACT_ADDRESSES.arcTestnet.paymentProcessor,
    abi: paymentProcessorAbi,

    onLogs(logs) {
      for (const log of logs) {
        const args = log.args;

        // refresh detail payment tertentu
        if (
          paymentId &&
          args &&
          "paymentId" in args &&
          args.paymentId === paymentId
        ) {
          queryClient.invalidateQueries({
            queryKey: ["payment", paymentId],
          });
        }

 // refresh seluruh merchant history
queryClient.invalidateQueries({
  predicate: (query) =>
    query.queryKey[0] === "merchant-payments",
});
      }
    },
  });
}