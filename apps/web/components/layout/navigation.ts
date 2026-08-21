import {
  BarChart3,
  CreditCard,
  FileText,
  LayoutDashboard,
  Settings,
  ShieldCheck,
  Store,
} from "lucide-react";

import type { LucideIcon } from "lucide-react";

export interface NavigationItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navigation: NavigationItem[] = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Merchant",
    href: "/merchant",
    icon: Store,
  },
  {
    title: "Payments",
    href: "/payments",
    icon: CreditCard,
  },
  {
    title: "Escrow",
    href: "/escrow",
    icon: ShieldCheck,
  },
  {
    title: "Invoices",
    href: "/invoices",
    icon: FileText,
  },
  {
    title: "Analytics",
    href: "/analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];