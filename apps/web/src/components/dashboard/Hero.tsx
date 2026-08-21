"use client";

import {
  ArrowRight,
  CreditCard,
  Wallet,
} from "lucide-react";

export function Hero() {
  return (
    <section className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
        {/* Left */}
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Arc Testnet Connected
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-white">
            ElPay Payment Infrastructure
          </h1>

          <p className="mt-4 text-lg leading-8 text-neutral-400">
            Build, send, receive and manage programmable USDC
            payments on Arc Network using secure on-chain
            infrastructure.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-medium text-black transition hover:bg-neutral-200">
              Create Payment
              <ArrowRight size={18} />
            </button>

            <button className="rounded-xl border border-neutral-700 px-5 py-3 font-medium text-white transition hover:border-neutral-500">
              Create Invoice
            </button>
          </div>
        </div>

        {/* Right */}
        <div className="grid w-full max-w-md gap-4">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-400">
              <Wallet size={18} />
              Wallet
            </div>

            <p className="font-mono text-lg text-white">
              0x0000...0000
            </p>

            <p className="mt-2 text-sm text-emerald-400">
              Connected
            </p>
          </div>

          <div className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5">
            <div className="mb-3 flex items-center gap-2 text-neutral-400">
              <CreditCard size={18} />
              USDC Balance
            </div>

            <p className="text-3xl font-bold text-white">
              0.00 USDC
            </p>

            <p className="mt-2 text-sm text-neutral-500">
              Arc Testnet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}