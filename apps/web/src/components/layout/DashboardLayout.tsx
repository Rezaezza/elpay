"use client";

import type { ReactNode } from "react";

import {
  Footer,
  Navbar,
  Sidebar,
} from "@/components/layout";

interface DashboardLayoutProps {
  children: ReactNode;
}

export function DashboardLayout({
  children,
}: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">

      <div className="flex">

        {/* Sidebar */}

        <Sidebar />

        {/* Main */}

        <div className="flex min-h-screen flex-1 flex-col">

          <Navbar />

          <main className="flex-1 px-8 py-8">

            {children}

          </main>

          <Footer />

        </div>

      </div>

    </div>
  );
}