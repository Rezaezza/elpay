import { Bell } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-zinc-800 bg-zinc-950 px-8">
      <h1 className="text-lg font-semibold text-white">
        ElPay Dashboard
      </h1>

      <button className="rounded-xl border border-zinc-800 p-2 hover:bg-zinc-900">
        <Bell size={18} />
      </button>
    </header>
  );
}