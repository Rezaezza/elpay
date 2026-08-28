"use client";

import {
  ExecutePaymentButton,
  RefundPaymentButton,
  ReleaseEscrowButton,
} from "./actions";

import {
  usePayment,
  getPaymentStatus,
} from "@elpay/blockchain";

import {
    watchPaymentEvents,
} from "@elpay/blockchain";

import {
    useEffect,
} from "react";

import {
    useQueryClient,
} from "@tanstack/react-query";


type Props = {
  paymentId: `0x${string}`;
};

export function PaymentDetail({
  paymentId,
}: Props) {
  const {
    data,
    isLoading,
    error,
  } = usePayment(paymentId);

  const queryClient =
    useQueryClient();

    useEffect(() => {
      
 const unwatch = watchPaymentEvents(
    queryClient,
    paymentId
);

    return () => {
        unwatch();
    };
}, [
    paymentId,
    queryClient,
]);

  if (isLoading) {
    return (
      <div className="mt-6 rounded-xl border p-6">
        Loading payment...
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-6 rounded-xl border border-red-500 p-6">
        Failed to load payment.
      </div>
    );
  }

  if (!data) {

    return (
      <div className="mt-6 rounded-xl border p-6">
        Payment not found.
      </div>
    );
  }

  const status = getPaymentStatus(Number(data.status));

  return (
    <div className="mt-6 rounded-xl border bg-background p-6 shadow-sm">
      <h3 className="mb-6 text-xl font-bold">
        Payment Detail
      </h3>

      <div className="space-y-4">

        <div>
          <p className="text-sm text-muted-foreground">
            Payment ID
          </p>

          <p className="break-all font-mono text-xs">
            {data.id}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Payer
          </p>

          <p className="break-all font-mono text-xs">
            {data.payer}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Merchant
          </p>

          <p className="break-all font-mono text-xs">
            {data.merchant}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Token
          </p>

          <p className="break-all font-mono text-xs">
            {data.token}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Amount
          </p>

          <p className="font-semibold">
            {Number(data.amount) / 1e6} USDC
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Description
          </p>

          <p>{data.description}</p>
        </div>

<div>
  <p className="text-sm text-muted-foreground">
    Status
  </p>

  <span
    className={`inline-flex rounded-full px-3 py-1 text-sm font-semibold ${status.bg} ${status.color}`}
  >
    {status.label}
  </span>
</div>

        <div>
          <p className="text-sm text-muted-foreground">
            Created At
          </p>

          <p>
            {new Date(
              Number(data.createdAt) * 1000
            ).toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">
            Expires At
          </p>

          <p>
            {new Date(
              Number(data.expiresAt) * 1000
            ).toLocaleString()}
          </p>
        </div>

      </div>

{/* ---------------- ACTION BUTTONS ---------------- */}

<div className="mt-8 flex flex-wrap gap-3">

  {data.status === 0 && (
    <div className="rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-4">
      <p className="font-medium text-yellow-400">
        Waiting Customer Approval
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Share this payment to the customer. The customer must approve the
        payment before it can be executed.
      </p>
    </div>
  )}

  {data.status === 1 && (
    <ExecutePaymentButton
      paymentId={paymentId}
    />
  )}

  {data.status === 2 && (
    <ReleaseEscrowButton
      paymentId={paymentId}
    />
  )}

  {data.status === 1 && (
    <RefundPaymentButton
      paymentId={paymentId}
    />
  )}

</div>

    </div>
  );
}