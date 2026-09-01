"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Store,
  CreditCard,
  History,
  BarChart3,
  Settings,
  BookOpen,
  ShieldCheck,
} from "lucide-react";

const sections = [
  {
    title: "OVERVIEW",
    items: [
      {
        name: "Dashboard",
        href: "/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },

  {
    title: "BUSINESS",
    items: [
      {
        name: "Merchant",
        href: "/merchant",
        icon: Store,
      },
      {
        name: "Payments",
        href: "/payments",
        icon: CreditCard,
      },
       {
  name: "Payment History",
  href: "/payments/history",
  icon: History,
      },
    
    ],
  },

  {
    title: "INSIGHTS",
    items: [
      {
        name: "Analytics",
        href: "/analytics",
        icon: BarChart3,
      },
    ],
  },

{
  title: "SYSTEM",
  items: [
    {
      name: "Settings",
      href: "/settings",
      icon: Settings,
    },
    {
      name: "Docs",
      href: "/docs",
      icon: BookOpen,
    },
  ],
},
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 flex h-screen w-72 shrink-0 flex-col border-r border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">

      {/* Logo */}

      <div className="border-b border-slate-800 px-8 py-8">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-bold text-white shadow-lg shadow-blue-500/20">
            E
          </div>

          <div>

            <h1 className="text-2xl font-bold text-white">
              ElPay
            </h1>

            <p className="text-xs text-slate-400">
              Payment Infrastructure
            </p>

          </div>

        </div>

      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto px-4 py-6">

        {sections.map((section) => (
          <div key={section.title} className="mb-8">

            <p className="mb-3 px-3 text-xs font-semibold tracking-[0.2em] text-slate-500 uppercase">
              {section.title}
            </p>

            <div className="space-y-2">

              {section.items.map((item) => {

                const Icon = item.icon;

                const active =
                item.href === "/payments"
                ? pathname === "/payments"
                : pathname === item.href;
                  
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                      active
                        ? "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20"
                        : "text-slate-300 hover:bg-slate-900 hover:text-white"
                    }`}
                  >
                    <Icon
                      size={20}
                      className={`${
                        active
                          ? "text-white"
                          : "text-slate-400 group-hover:text-white"
                      }`}
                    />

                    <span className="font-medium">
                      {item.name}
                    </span>
                  </Link>
                );
              })}

            </div>

          </div>
        ))}

      </nav>

      {/* Footer */}

      <div className="border-t border-slate-800 p-5">

        <div className="mb-4 flex items-center gap-3 rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-3">

          <ShieldCheck
            size={18}
            className="text-emerald-400"
          />


        </div>

        <p className="text-center text-xs text-slate-500">
          ElPay v1.0.0
        </p>

      </div>

    </aside>
  );
}