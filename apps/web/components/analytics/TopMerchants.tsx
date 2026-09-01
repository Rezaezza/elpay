"use client";

import { Trophy } from "lucide-react";

interface Merchant {
  address: string;
  totalPayments: number;
  totalVolume: number;
}

interface Props {
  merchants: Merchant[];
}

export function TopMerchants({
  merchants,
}: Props) {
  return (
    <div className="rounded-3xl border bg-card p-6">

      <div className="mb-6 flex items-center gap-3">

        <Trophy className="text-yellow-500" />

        <h2 className="text-xl font-bold">
          Top Merchants
        </h2>

      </div>

      <div className="space-y-4">

        {merchants.length === 0 && (

          <div className="py-10 text-center text-muted-foreground">
            No merchant data.
          </div>

        )}

        {merchants.map((merchant, index) => (

          <div
            key={merchant.address}
            className="flex items-center justify-between rounded-2xl border p-4"
          >

            <div>

              <div className="flex items-center gap-2">

                <span className="text-lg font-bold">
                  #{index + 1}
                </span>

                <span className="font-mono text-sm">
                  {merchant.address.slice(0, 6)}
                  ...
                  {merchant.address.slice(-4)}
                </span>

              </div>

              <p className="mt-1 text-sm text-muted-foreground">
                {merchant.totalPayments} Payments
              </p>

            </div>

            <div className="text-right">

              <p className="text-lg font-bold">
                {merchant.totalVolume} USDC
              </p>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}