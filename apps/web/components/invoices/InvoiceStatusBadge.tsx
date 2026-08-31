"use client";

type Props = {
  status: number;
};

export function InvoiceStatusBadge({
  status,
}: Props) {
  const styles = {
    0: {
      label: "Created",
      className:
        "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    },
    1: {
      label: "Approved",
      className:
        "bg-blue-500/10 text-blue-400 border-blue-500/20",
    },
    2: {
      label: "Processing",
      className:
        "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
    },
    3: {
      label: "Paid",
      className:
        "bg-green-500/10 text-green-400 border-green-500/20",
    },
    4: {
      label: "Cancelled",
      className:
        "bg-red-500/10 text-red-400 border-red-500/20",
    },
    5: {
      label: "Refunded",
      className:
        "bg-orange-500/10 text-orange-400 border-orange-500/20",
    },
    6: {
      label: "Expired",
      className:
        "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
  } as const;

  const item =
    styles[status as keyof typeof styles] ??
    {
      label: "Unknown",
      className:
        "bg-slate-700 text-slate-300 border-slate-600",
    };

  return (
    <span
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${item.className}`}
    >
      {item.label}
    </span>
  );
}