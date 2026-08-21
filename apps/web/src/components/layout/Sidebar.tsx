"use client";

import Link from "next/link";

import {
  ChartColumn,
  CreditCard,
  Home,
  Receipt,
  Settings,
  ShieldCheck,
  Store,
} from "lucide-react";

const navigation = [
  {
    href: "/dashboard",
    label: "Dashboard",
    icon: Home,
  },
  {
    href: "/payments",
    label: "Payments",
    icon: CreditCard,
  },
  {
    href: "/invoices",
    label: "Invoices",
    icon: Receipt,
  },
  {
    href: "/merchant",
    label: "Merchant",
    icon: Store,
  },
  {
    href: "/analytics",
    label: "Analytics",
    icon: ChartColumn,
  },
  {
    href: "/escrow",
    label: "Escrow",
    icon: ShieldCheck,
  },
  {
    href: "/settings",
    label: "Settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-zinc-800 bg-zinc-950">

      <div className="border-b border-zinc-800 p-6">

        <h1 className="text-2xl font-bold text-white">
          ElPay
        </h1>

        <p className="mt-1 text-sm text-zinc-500">
          Payment Infrastructure
        </p>

      </div>

      <nav className="flex-1 space-y-2 p-4">

        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-zinc-400 transition hover:bg-zinc-900 hover:text-white"
            >
              <Icon size={20} />
              {item.label}
            </Link>
          );
        })}

      </nav>

    </aside>
  );
}