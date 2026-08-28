"use client";

interface Props {
  status: number;
}

export function PaymentStatusBadge({
  status,
}: Props) {
  switch (status) {
    case 0:
      return (
        <span className="inline-flex rounded-full bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
          Created
        </span>
      );

    case 1:
      return (
        <span className="inline-flex rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold text-blue-400">
          Approved
        </span>
      );

    case 2:
      return (
        <span className="inline-flex rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-400">
          Processing
        </span>
      );

    case 3:
      return (
        <span className="inline-flex rounded-full bg-green-500/10 px-3 py-1 text-xs font-semibold text-green-400">
          Paid
        </span>
      );

    case 4:
      return (
        <span className="inline-flex rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          Completed
        </span>
      );

    case 5:
      return (
        <span className="inline-flex rounded-full bg-orange-500/10 px-3 py-1 text-xs font-semibold text-orange-400">
          Refunded
        </span>
      );

    case 6:
      return (
        <span className="inline-flex rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-400">
          Cancelled
        </span>
      );

    case 7:
      return (
        <span className="inline-flex rounded-full bg-purple-500/10 px-3 py-1 text-xs font-semibold text-purple-400">
          Disputed
        </span>
      );

    default:
      return (
        <span className="inline-flex rounded-full bg-slate-700 px-3 py-1 text-xs font-semibold text-slate-300">
          Unknown
        </span>
      );
  }
}