"use client";

import {
  Settings,
  Wallet,
  DollarSign,
  Globe,
  ShieldCheck,
  Code2,
  Server,
  Layers3,
} from "lucide-react";

export default function SettingsPage() {
  return (
    <div className="space-y-10">

      {/* Header */}

      <div>
        <h1 className="text-3xl font-bold tracking-tight">
          Settings
        </h1>

        <p className="mt-2 text-muted-foreground">
          Application information, supported platforms,
          and developer environment.
        </p>
      </div>

      {/* ==================== GENERAL ==================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-2">
          <Settings className="h-5 w-5" />
          <h2 className="text-xl font-semibold">
            General
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Application */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Application
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  ElPay
                </p>

                <p className="text-sm text-muted-foreground">
                  Web3 Payment Infrastructure
                </p>

              </div>

              <Layers3 className="h-6 w-6 text-blue-600" />

            </div>

          </div>

          {/* Currency */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Default Currency
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  USDC
                </p>

                <p className="text-sm text-muted-foreground">
                  Stablecoin Payments
                </p>

              </div>

              <DollarSign className="h-6 w-6 text-emerald-600" />

            </div>

          </div>

          {/* Payment */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Payment Standard
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  On-chain Payments
                </p>

                <p className="text-sm text-muted-foreground">
                  Smart Contract Powered
                </p>

              </div>

              <ShieldCheck className="h-6 w-6 text-indigo-600" />

            </div>

          </div>

        </div>

      </section>

      {/* ==================== PLATFORM ==================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-2">
          <Globe className="h-5 w-5" />
          <h2 className="text-xl font-semibold">
            Platform
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Wallet */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Supported Wallets
                </p>

                <div className="mt-2 space-y-1 text-sm text-muted-foreground">

                  <p>• MetaMask</p>

                  <p>• WalletConnect</p>

                  <p>• Coinbase Wallet</p>

                </div>

              </div>

              <Wallet className="h-6 w-6 text-violet-600" />

            </div>

          </div>

          {/* Network */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Supported Networks
                </p>

                <div className="mt-2 space-y-1 text-sm text-muted-foreground">

                  <p>• Arc</p>

                  

                  

                  <p className="text-xs">
                    More coming soon...
                  </p>

                </div>

              </div>

              <Globe className="h-6 w-6 text-sky-600" />

            </div>

          </div>

          {/* Protocol */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Payment Protocol
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Smart Contract Escrow
                </p>

                <p className="text-sm text-muted-foreground">
                  Secure & Transparent
                </p>

              </div>

              <ShieldCheck className="h-6 w-6 text-cyan-600" />

            </div>

          </div>

        </div>

      </section>

      {/* ==================== DEVELOPER ==================== */}

      <section className="space-y-5">

        <div className="flex items-center gap-2">
          <Code2 className="h-5 w-5" />
          <h2 className="text-xl font-semibold">
            Developer
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Version */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Version
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  v1.0.0
                </p>

              </div>

              <Code2 className="h-6 w-6 text-orange-600" />

            </div>

          </div>

          {/* Environment */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Environment
                </p>

                <span className="mt-2 inline-flex rounded-full bg-yellow-500/15 px-3 py-1 text-xs font-medium text-yellow-600">
                  Productions
                </span>

              </div>

              <Server className="h-6 w-6 text-yellow-600" />

            </div>

          </div>

          {/* SDK */}

          <div className="rounded-2xl border bg-card p-6 shadow-sm">

            <div className="flex items-center justify-between">

              <div>

                <p className="font-semibold">
                  Build
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Monorepo Architecture
                  Next.js + Solidity
                </p>

              </div>

              <Code2 className="h-6 w-6 text-gray-500" />

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}