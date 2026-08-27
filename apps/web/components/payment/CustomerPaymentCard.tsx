"use client";

import Image from "next/image";
import { formatUnits } from "viem";

import { WalletChip } from "@/components/wallet/WalletChip";
import { CustomerApproveButton } from "./CustomerApproveButton";

import { paymentLink } from "@/lib/paymentLink";

type Props = {
  payment: any;
  paymentId: `0x${string}`;
};

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

function statusLabel(status: number) {
  switch (status) {
    case 0:
      return {
        text: "Waiting Customer Approval",
        color:
          "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
      };

    case 1:
      return {
        text: "Approved",
        color:
          "bg-blue-500/10 text-blue-400 border-blue-500/20",
      };

    case 2:
      return {
        text: "Processing",
        color:
          "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
      };

    case 3:
      return {
        text: "Paid",
        color:
          "bg-green-500/10 text-green-400 border-green-500/20",
      };

    case 4:
      return {
        text: "Cancelled",
        color:
          "bg-red-500/10 text-red-400 border-red-500/20",
      };

    case 5:
      return {
        text: "Refunded",
        color:
          "bg-orange-500/10 text-orange-400 border-orange-500/20",
      };

    default:
      return {
        text: "Unknown",
        color:
          "bg-slate-700 text-slate-300 border-slate-600",
      };
  }
}

export function CustomerPaymentCard({
  payment,
  paymentId,
}: Props) {
  const status = statusLabel(payment.status);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">

      <div className="mx-auto max-w-xl px-6 py-20">

        <div className="rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl overflow-hidden">

          {/* HEADER */}

          <div className="border-b border-slate-800 bg-slate-950 p-8">

            <div className="flex items-center justify-center">

              <Image
                src="/logo.svg"
                alt="ElPay"
                width={70}
                height={70}
              />

            </div>

            <h1 className="mt-5 text-center text-3xl font-bold text-white">
              ElPay Checkout
            </h1>

            <p className="mt-2 text-center text-slate-400">
              Secure USDC Payment
            </p>

          </div>

          {/* BODY */}

          <div className="space-y-8 p-8">

            <WalletChip />

            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-slate-400">
                    Total
                  </p>

                  <h2 className="mt-2 text-4xl font-bold text-white">
                    {formatUnits(payment.amount, 6)}
                  </h2>

                  <p className="text-slate-400">
                    USDC
                  </p>

                </div>

                <div
                  className={`rounded-full border px-4 py-2 text-sm font-semibold ${status.color}`}
                >
                  {status.text}
                </div>

              </div>

            </div>

            <div className="space-y-5 rounded-2xl border border-slate-800 bg-slate-950 p-6">

              <div>

                <p className="text-sm text-slate-500">
                  Merchant
                </p>

                <p className="mt-1 break-all font-mono text-white">
                  {shortAddress(payment.merchant)}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Description
                </p>

                <p className="mt-1 text-white">
                  {payment.description}
                </p>

              </div>

              <div>

                <p className="text-sm text-slate-500">
                  Payment ID
                </p>

                <p className="mt-1 break-all font-mono text-xs text-slate-300">
                  {paymentId}
                </p>

              </div>

            </div>

            <button
              onClick={() =>
                navigator.clipboard.writeText(paymentId)
              }
              className="w-full rounded-xl border border-slate-700 py-3 text-white transition hover:border-blue-500"
            >
              Copy Payment ID
            </button>

            <button
              onClick={() =>
                navigator.clipboard.writeText(
               paymentLink(paymentId)
               )
            }
              className="w-full rounded-xl border border-slate-700 py-3 text-white transition hover:border-blue-500"
            >
              Copy Payment Link
            </button>

            {payment.status === 0 && (
              <CustomerApproveButton
                paymentId={paymentId}
              />
            )}

            {payment.status !== 0 && (
              <div className="rounded-2xl border border-green-500/20 bg-green-500/10 p-6">

                <h3 className="text-lg font-semibold text-green-400">
                  Payment Approved
                </h3>

                <p className="mt-2 text-slate-300">
                  Merchant can now continue this payment
                  from the Dashboard.
                </p>

              </div>
            )}

          </div>

        </div>

      </div>

    </main>
  );
}