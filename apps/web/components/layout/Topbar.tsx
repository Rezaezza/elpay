"use client";

import { Search } from "lucide-react";

import { WalletChip } from "@/components/wallet/WalletChip";

export function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">
      <div className="relative">
        <Search
          size={20}
          className="absolute left-4 top-3.5 text-slate-400"
        />

        <input
          placeholder="Search..."
          className="
            w-96
            h-12
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            pl-12
            outline-none
            focus:border-blue-500
          "
        />
      </div>

      <WalletChip />
    </header>
  );
}