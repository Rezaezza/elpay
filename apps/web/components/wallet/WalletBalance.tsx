"use client";

import { formatUnits } from "viem";
import { useAccount, useBalance } from "wagmi";

const USDC_ADDRESS =
  "0x3600000000000000000000000000000000000000";

export default function WalletBalance() {
  const { address } = useAccount();

  const { data } = useBalance({
    address,
    token: USDC_ADDRESS as `0x${string}`,
  });

  if (!address) return null;

  const balance = data
    ? Number(formatUnits(data.value, data.decimals)).toFixed(4)
    : "0.0000";

  return (
    <div>
      <p className="text-sm text-slate-500">
        Balance
      </p>

      <h2 className="mt-1 text-3xl font-bold text-slate-900">
        {balance}
      </h2>

      <p className="text-slate-600">
        {data?.symbol ?? "USDC"}
      </p>
    </div>
  );
}