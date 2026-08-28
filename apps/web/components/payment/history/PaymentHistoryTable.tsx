"use client";

import { PaymentHistoryRow } from "./PaymentHistoryRow";

export interface PaymentHistoryItem {
  id: `0x${string}`;
  payer: string;
  amount: bigint;
  status: number;
  createdAt: bigint;
  expiresAt: bigint;
}

interface Props {
  payments: PaymentHistoryItem[];
}

export function PaymentHistoryTable({
  payments,
}: Props) {
  return (
    <div className="overflow-x-auto">

      <table className="min-w-full">

        <thead className="border-b border-slate-800 bg-slate-950">

          <tr>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Payment ID
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Payer
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Amount
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Status
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Created
            </th>

            <th className="px-6 py-4 text-left text-sm font-semibold text-slate-400">
              Expires
            </th>

            <th className="w-16"></th>

          </tr>

        </thead>

        <tbody>

          {payments.map((payment) => (
            <PaymentHistoryRow
              key={payment.id}
              payment={payment}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}