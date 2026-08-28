"use client";

export function PaymentHistorySkeleton() {
  return (
    <div className="space-y-6">

      {/* Toolbar */}
      <div className="flex items-center justify-between">

        <div className="h-10 w-72 animate-pulse rounded-xl bg-slate-800" />

        <div className="h-10 w-40 animate-pulse rounded-xl bg-slate-800" />

      </div>

      {/* Card */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900">

        {/* Header */}
        <div className="grid grid-cols-5 gap-4 border-b border-slate-800 p-5">

          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className="h-4 animate-pulse rounded bg-slate-800"
            />
          ))}

        </div>

        {/* Rows */}
        {Array.from({ length: 8 }).map((_, row) => (
          <div
            key={row}
            className="grid grid-cols-5 gap-4 border-b border-slate-800 p-5 last:border-none"
          >
            {Array.from({ length: 5 }).map((_, col) => (
              <div
                key={col}
                className="h-4 animate-pulse rounded bg-slate-800"
              />
            ))}
          </div>
        ))}

      </div>
    </div>
  );
}