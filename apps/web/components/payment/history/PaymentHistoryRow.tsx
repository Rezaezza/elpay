"use client";

import Link from "next/link";
import { formatUnits } from "viem";

import { PaymentStatusBadge } from "./PaymentStatusBadge";

type Props = {
  payment: {
    id: `0x${string}`;
    amount: bigint;
    status: number;
    payer: string;
    createdAt: bigint;
    expiresAt: bigint;
  };
};

function shortAddress(address: string) {
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function PaymentHistoryRow({
  payment,
}: Props) {
  return (
    <tr className="border-b border-slate-800 hover:bg-slate-800/40 transition">

      <td className="px-6 py-5">
        <Link
          href={`/payments/${payment.id}`}
          className="font-mono text-blue-400 hover:text-blue-300"
        >
          {payment.id.slice(0, 10)}...
        </Link>
      </td>

      <td className="px-6 py-5">
        {shortAddress(payment.payer)}
      </td>

      <td className="px-6 py-5 font-semibold text-white">
        {formatUnits(payment.amount, 6)} USDC
      </td>

      <td className="px-6 py-5">
        <PaymentStatusBadge status={payment.status} />
      </td>

      <td className="px-6 py-5 text-slate-400">
        {new Date(
          Number(payment.createdAt) * 1000
        ).toLocaleString()}
      </td>

      <td className="px-6 py-5 text-slate-400">
        {new Date(
          Number(payment.expiresAt) * 1000
        ).toLocaleString()}
      </td>

    </tr>
  );
}