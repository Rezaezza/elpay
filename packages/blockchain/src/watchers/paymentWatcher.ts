import { watchContractEvent } from "wagmi/actions";
import { QueryClient } from "@tanstack/react-query";

import { wagmiConfig } from "../wagmi";
import { paymentProcessorAbi } from "../abi";

import { getPaymentProcessorAddress } from "../resolver/contracts";

export function watchPaymentEvents(
  chainId: number,
  queryClient: QueryClient,
  paymentId?: `0x${string}`
) {
  return watchContractEvent(wagmiConfig, {
    address: getPaymentProcessorAddress(chainId),
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