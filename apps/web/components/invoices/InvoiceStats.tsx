"use client";

type Props = {
  total: number;
  paid: number;
  processing: number;
  refunded: number;
  cancelled: number;
};

export function InvoiceStats({
  total,
  paid,
  processing,
  refunded,
  cancelled,
}: Props) {
  const cards = [
    {
      title: "Total",
      value: total,
    },
    {
      title: "Paid",
      value: paid,
    },
    {
      title: "Processing",
      value: processing,
    },
    {
      title: "Refunded",
      value: refunded,
    },
    {
      title: "Cancelled",
      value: cancelled,
    },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-5">
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-slate-800 bg-slate-900 p-5"
        >
          <p className="text-sm text-slate-400">
            {card.title}
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white">
            {card.value}
          </h2>
        </div>
      ))}
    </div>
  );
}