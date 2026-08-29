"use client";

import {
  ApprovePaymentButton,
  ExecutePaymentButton,
  RefundPaymentButton,
  CancelPaymentButton,
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

import { useAccount } from "wagmi";
import { Button } from "@/components/ui/button";


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

   const { address } = useAccount();

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

const isPayer =
    address?.toLowerCase() ===
    data.payer.toLowerCase();

const isMerchant =
    address?.toLowerCase() ===
    data.merchant.toLowerCase();

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

      {/* ---------------- PAYMENT LINKS ---------------- */}

{isMerchant && (
  <div className="mt-8 rounded-xl border border-slate-700 bg-slate-900 p-5">

    <h3 className="mb-4 text-lg font-semibold">
      Payment Link
    </h3>

    <div className="flex flex-wrap gap-3">

      <Button
        variant="outline"
        onClick={() =>
          navigator.clipboard.writeText(
            `${window.location.origin}/pay/${paymentId}`
          )
        }
      >
        Copy Link
      </Button>

      <Button
        onClick={() =>
          window.open(
            `/pay/${paymentId}`,
            "_blank"
          )
        }
      >
        Open Checkout
      </Button>

      <Button
        variant="secondary"
        onClick={() =>
          window.open(
            `https://testnet.arcscan.app/tx/${paymentId}`,
            "_blank"
          )
        }
      >
        View on ArcScan
      </Button>

    </div>

  </div>
)}

{/* ---------------- ACTION BUTTONS ---------------- */}

<div className="mt-8 space-y-4">

  {/* CREATED */}

  {data.status === 0 && (
    <>
      <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
        <p className="font-semibold text-yellow-400">
          Waiting Customer Approval
        </p>

        <p className="mt-2 text-sm text-slate-400">
          The payment has been created and is waiting for the payer to approve
          or cancel it.
        </p>
      </div>

      {isPayer && (
        <div className="flex flex-wrap gap-3">
          <ApprovePaymentButton
            paymentId={paymentId}
          />

          <CancelPaymentButton
            paymentId={paymentId}
          />
        </div>
      )}
    </>
  )}

  {/* APPROVED */}

 {data.status === 1 && (
  <>
    <div className="rounded-xl border border-blue-500/30 bg-blue-500/10 p-4">
      <p className="font-semibold text-blue-400">
        Payment Approved
      </p>

      <p className="mt-2 text-sm text-slate-400">
        The payer approved this payment.
      </p>
    </div>

    {isPayer && (
      <div className="flex flex-wrap gap-3">
        <ExecutePaymentButton paymentId={paymentId} />
      </div>
    )}
  </>
)}

 

  {/* PAID */}

 {data.status === 3 && (
  <>
    <div className="rounded-xl border border-green-500/30 bg-green-500/10 p-4">
      <p className="font-semibold text-green-400">
        Payment Completed
      </p>

      <p className="mt-2 text-sm text-slate-400">
        Funds have been transferred successfully.
      </p>
    </div>

    {isMerchant && (
      <div className="mt-4">
        <RefundPaymentButton
          paymentId={paymentId}
        />
      </div>
    )}
  </>
)}

  {/* REFUNDED */}

  {data.status === 4 && (
    <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
      <p className="font-semibold text-red-400">
        Payment Refunded
      </p>
    </div>
  )}

  {/* CANCELLED */}

  {data.status === 5 && (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
      <p className="font-semibold text-slate-300">
        Payment Cancelled
      </p>
    </div>
  )}

  {/* EXPIRED */}

  {data.status === 6 && (
    <div className="rounded-xl border border-purple-500/30 bg-purple-500/10 p-4">
      <p className="font-semibold text-purple-400">
        Payment Expired
      </p>
    </div>
  )}

</div>

    </div>
  );
}