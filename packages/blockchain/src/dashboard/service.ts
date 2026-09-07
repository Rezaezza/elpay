import { getPublicClient } from "../clients";


import {
  getMerchantRegistryAddress,
  getPaymentProcessorAddress,
} from "../resolver/contracts";

import {
  paymentProcessorAbi,
} from "../abi/PaymentProcessor";

import {
  merchantRegistryAbi,
} from "../abi/MerchantRegistry";

import type {
  DashboardPayment,
  DashboardStats,
} from "./types";


export async function getDashboardData(
  chainId: number,
  address: `0x${string}`
): Promise<DashboardStats> {
  try {

    const publicClient = getPublicClient(chainId);
    
    const merchant =
      await publicClient.readContract({
        address: getMerchantRegistryAddress(chainId),
        abi: merchantRegistryAbi,
        functionName: "getMerchant",
        args: [address],
      });

    const ids =
      await publicClient.readContract({
        address: getPaymentProcessorAddress(chainId),
        abi: paymentProcessorAbi,
        functionName: "getMerchantPayments",
        args: [address],
      });

    const payments =
      await Promise.all(
          ids.map((id) =>
          publicClient.readContract({
            address: getPaymentProcessorAddress(chainId),
            abi: paymentProcessorAbi,
            functionName: "getPayment",
            args: [id],
          })
        )
      );

  let paid = 0;
let processing = 0;
let refunded = 0;
let cancelled = 0;
let created = 0;

let totalVolume = 0n;

for (const payment of payments) {
  switch (Number(payment.status)) {
    case 0:
      // Created
      created++;
      break;

    case 1:
      // Approved
      break;

    case 2:
      // Processing
      processing++;
      totalVolume += payment.amount;
      break;

    case 3:
      // Paid
      paid++;
      totalVolume += payment.amount;
      break;

    case 4:
      // Cancelled
      cancelled++;
      break;

    case 5:
      // Refunded
      refunded++;
      totalVolume += payment.amount;
      break;

    case 6:
      // Expired
      break;
  }
}

    return {
      merchant,

      totalPayments: payments.length,

      paidPayments: paid,

      processingPayments: processing,

      refundedPayments: refunded,

      cancelledPayments: cancelled,

      createdPayments: created,

      totalVolume,

      payments: payments as DashboardPayment[],
    };
  } catch (error) {
    console.error("Dashboard Error:", error);

    return {
      merchant: undefined,

      totalPayments: 0,

      paidPayments: 0,

      processingPayments: 0,

      refundedPayments: 0,

      cancelledPayments: 0,

      createdPayments: 0,

      totalVolume: 0n,

      payments: [],
    };
  }
}