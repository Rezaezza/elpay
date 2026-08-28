import { useQueries } from "@tanstack/react-query";

import { getPaymentService } from "../services";

export function usePayments(
    paymentIds?: readonly `0x${string}`[]
) {
    const queries = useQueries({
        queries:
            paymentIds?.map((paymentId) => ({
                queryKey: ["payment", paymentId],

                queryFn: () =>
                    getPaymentService(paymentId),
            })) ?? [],
    });

    return {
        data: queries
            .map((query) => query.data)
            .filter(Boolean),

        isLoading: queries.some(
            (query) => query.isLoading
        ),
    };
}