import type { ReactNode } from "react";

import { Sidebar } from "./Sidebar";


interface AppShellProps {
  children: ReactNode;
}

export function AppShell({
  children,
}: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-zinc-950 text-white">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        

        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}