import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";
import { getMerchantPayments } from "../services/payment";

export function useMerchantPayments(
    merchant?: Address
){
    return useQuery({
        queryKey:[
            "merchant-payments",
            merchant
        ],

        enabled:!!merchant,

        queryFn:()=>
            getMerchantPayments(
                merchant!
            )
    });
}