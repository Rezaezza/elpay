"use client";

import { Bell, Search } from "lucide-react";

import { ConnectWalletButton } from "@/components/wallet/ConnectWalletButton";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950/80 px-6 backdrop-blur">

      <div className="relative w-full max-w-md">

        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
        />

        <input
          type="text"
          placeholder="Search..."
          className="h-10 w-full rounded-xl border border-zinc-800 bg-zinc-900 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500"
        />

      </div>

      <div className="ml-6 flex items-center gap-4">

        <button className="rounded-xl p-2 transition hover:bg-zinc-800">
          <Bell size={20} />
        </button>

        <ConnectWalletButton />

      </div>

    </header>
  );
}