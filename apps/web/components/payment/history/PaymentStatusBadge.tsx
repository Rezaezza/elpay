"use client";

interface Props {
  status: number;
}

const badgeClass =
  "inline-flex rounded-full px-3 py-1 text-xs font-semibold";

export function PaymentStatusBadge({
  status,
}: Props) {
  switch (status) {
    case 0:
      return (
        <span className={`${badgeClass} bg-yellow-500/10 text-yellow-400`}>
          Created
        </span>
      );

    case 1:
      return (
        <span className={`${badgeClass} bg-blue-500/10 text-blue-400`}>
          Approved
        </span>
      );

    case 2:
      return (
        <span className={`${badgeClass} bg-cyan-500/10 text-cyan-400`}>
          Processing
        </span>
      );

    case 3:
      return (
        <span className={`${badgeClass} bg-green-500/10 text-green-400`}>
          Paid
        </span>
      );

    case 4:
      return (
        <span className={`${badgeClass} bg-red-500/10 text-red-400`}>
          Cancelled
        </span>
      );

    case 5:
      return (
        <span className={`${badgeClass} bg-orange-500/10 text-orange-400`}>
          Refunded
        </span>
      );

    case 6:
      return (
        <span className={`${badgeClass} bg-slate-500/10 text-slate-300`}>
          Expired
        </span>
      );

    default:
      return (
        <span className={`${badgeClass} bg-slate-700 text-slate-300`}>
          Unknown ({status})
        </span>
      );
  }
}