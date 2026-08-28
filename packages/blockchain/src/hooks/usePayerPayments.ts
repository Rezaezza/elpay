import { useQuery } from "@tanstack/react-query";
import type { Address } from "viem";
import { getPayerPayments } from "../services/payment";

export function usePayerPayments(
    payer?: Address
){
    return useQuery({

        queryKey:[
            "payer-payments",
            payer
        ],

        enabled:!!payer,

        queryFn:()=>
            getPayerPayments(
                payer!
            )
    });
}