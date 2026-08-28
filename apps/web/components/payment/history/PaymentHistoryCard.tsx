"use client";

import Link from "next/link";
import { Eye } from "lucide-react";

import { PaymentStatusBadge } from "./PaymentStatusBadge";

interface Props {
  paymentId: `0x${string}`;

  payment?: {
    amount?: string;
    status?: number;
    createdAt?: string;
    expiresAt?: string;
    payer?: string;
  };
}

function shortHash(hash: string) {
  return `${hash.slice(0, 8)}...${hash.slice(-6)}`;
}

export function PaymentHistoryCard({
  paymentId,
  payment,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-slate-700">

      <div className="flex items-start justify-between">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Payment ID
          </p>

          <p className="mt-1 font-mono text-sm text-white">
            {shortHash(paymentId)}
          </p>

        </div>

        <PaymentStatusBadge
          status={payment?.status ?? 0}
        />

      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Amount
          </p>

          <p className="mt-1 font-semibold text-white">
            {payment?.amount ?? "--"}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Customer
          </p>

          <p className="mt-1 font-mono text-sm text-white break-all">
            {payment?.payer ?? "--"}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Created
          </p>

          <p className="mt-1 text-white">
            {payment?.createdAt ?? "--"}
          </p>

        </div>

        <div>

          <p className="text-xs uppercase tracking-wide text-slate-500">
            Expires
          </p>

          <p className="mt-1 text-white">
            {payment?.expiresAt ?? "--"}
          </p>

        </div>

      </div>

      <div className="mt-6">

        <Link
          href={`/payments/${paymentId}`}
          className="
            inline-flex
            items-center
            gap-2
            rounded-xl
            bg-blue-600
            px-4
            py-2.5
            text-sm
            font-semibold
            text-white
            transition
            hover:bg-blue-500
          "
        >
          <Eye size={16} />

          View Payment

        </Link>

      </div>

    </div>
  );
}