"use client";

import { useDashboard } from "@elpay/blockchain";

function status(status: number) {
  switch (status) {
    case 0:
      return "Created";
    case 1:
      return "Approved";
    case 2:
      return "Processing";
    case 3:
      return "Paid";
    case 4:
      return "Cancelled";
    case 5:
      return "Refunded";
    default:
      return "-";
  }
}

export function LatestPayments() {
  const { data, isLoading } = useDashboard();

  if (isLoading) {
    return (
      <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="space-y-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="h-14 animate-pulse rounded-xl bg-slate-100"
            />
          ))}
        </div>
      </section>
    );
  }

  const payments = data?.payments ?? [];

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="mb-6 text-2xl font-bold">
        Latest Payments
      </h2>

      <div className="overflow-auto">
        <table className="w-full">
          <thead className="border-b">
            <tr className="text-left text-slate-500">
              <th className="pb-4">Description</th>
              <th className="pb-4">Amount</th>
              <th className="pb-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {payments.map((payment) => (
              <tr
                key={payment.id}
                className="border-b last:border-0"
              >
                <td className="py-5">
                  {payment.description || "-"}
                </td>

                <td className="py-5">
                  {payment.amount.toString()}
                </td>

                <td className="py-5">
                  {status(payment.status)}
                </td>
              </tr>
            ))}

            {payments.length === 0 && (
              <tr>
                <td
                  colSpan={3}
                  className="py-10 text-center text-slate-500"
                >
                  No payments yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}