"use client";


import { PaymentHistoryToolbar } from "./PaymentHistoryToolbar";
import { PaymentHistoryTable } from "./PaymentHistoryTable";
import { PaymentHistorySkeleton } from "./PaymentHistorySkeleton";
import { EmptyHistory } from "./EmptyHistory";
import type { PaymentHistoryItem } from "./PaymentHistoryTable";

import { useAccount } from "wagmi";

import {
    useMerchantPayments,
    usePayments,
} from "@elpay/blockchain";

import {
    useEffect,
} from "react";

import {
    useQueryClient,
} from "@tanstack/react-query";

import {
    watchPaymentEvents,
} from "@elpay/blockchain";

export function PaymentHistoryPage() {
  /**
   * ============================================================
   * STEP 17
   * ============================================================
   *
   * Sementara masih dummy.
   *
   * STEP 18 akan diganti menjadi:
   *
   * const { address } = useAccount();
   *
   * const {
   *   data: payments,
   *   isLoading,
   * } = useMerchantPayments(address);
   */

const { address } = useAccount();

const {
    data: paymentIds,
    isLoading: loadingIds,
} = useMerchantPayments(address);

const {
    data: paymentDetails = [],
    isLoading: loadingPayments,
} = usePayments(paymentIds);

const payments: PaymentHistoryItem[] =
    paymentDetails
        .map((payment: any) => ({
            id: payment.id,
            payer: payment.payer,
            amount: payment.amount,
            status: Number(payment.status),
            createdAt: payment.createdAt,
            expiresAt: payment.expiresAt,
        }))
        .sort(
            (a, b) =>
                Number(b.createdAt) -
                Number(a.createdAt)
        );

const isLoading =
    loadingIds || loadingPayments;

    const queryClient = useQueryClient();

useEffect(() => {
    if (!address) return;

  const unwatch = watchPaymentEvents(
    queryClient
);

    return () => unwatch();
}, [address, queryClient]);



  /**
   * ============================================================
   * Loading
   * ============================================================
   */

  if (isLoading) {
    return (
      <div className="mx-auto max-w-7xl px-6 py-8">
        <PaymentHistorySkeleton />
      </div>
    );
  }

  /**
   * ============================================================
   * Page
   * ============================================================
   */

  return (
    <div className="mx-auto max-w-7xl space-y-8 px-6 py-8">

      {/* ===================================================== */}
      {/* Header */}
      {/* ===================================================== */}

      <div className="mb-8">

        <div>

          <h1 className="text-3xl font-bold text-white">
            Payment History
          </h1>

          <p className="mt-2 text-slate-400">
            View every payment created by your merchant account.
          </p>

          </div>

 </div>

      {/* ===================================================== */}
      {/* Toolbar */}
      {/* ===================================================== */}

      <PaymentHistoryToolbar />

      {/* ===================================================== */}
      {/* Content */}
      {/* ===================================================== */}

      <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-xl">

        {payments.length === 0 ? (
          <EmptyHistory />
        ) : (
          <PaymentHistoryTable
    payments={payments}
/>
        )}

      </div>

    </div>
  );
}

