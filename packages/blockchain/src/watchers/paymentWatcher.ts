import { watchContractEvent } from "wagmi/actions";
import type { Config } from "wagmi";

import { QueryClient } from "@tanstack/react-query";

import { paymentProcessorAbi } from "../abi";
import { getPaymentProcessorAddress } from "../resolver/contracts";

export function watchPaymentEvents(
  config: Config,
  chainId: number,
  queryClient: QueryClient,
  paymentId?: `0x${string}`,
) {
  return watchContractEvent(config, {
    address: getPaymentProcessorAddress(chainId),
    abi: paymentProcessorAbi,

    onLogs(logs) {
      for (const log of logs) {
        const args = log.args;

        // Refresh detail payment tertentu
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

        // Refresh merchant payment history
        queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === "merchant-payments",
        });

        // Refresh payer payment history
        queryClient.invalidateQueries({
          predicate: (query) =>
            query.queryKey[0] === "payer-payments",
        });
      }
    },
  });
}