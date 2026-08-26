"use client";

import { Search, Bell } from "lucide-react";
import { WalletChip } from "@/components/wallet/WalletChip";

export function Topbar() {
  return (
<header className="
sticky
top-0
z-30
border-b
border-slate-800/70
bg-slate-950/60
backdrop-blur-xl
">

<div className="
mx-auto
flex
h-20
max-w-7xl
items-center
justify-between
px-8
">

<div className="relative">

<Search
size={18}
className="absolute left-4 top-4 text-slate-500"
/>

<input
placeholder="Search..."
className="
h-11
w-80
rounded-xl
border
border-slate-700
bg-slate-900/70
pl-11
text-sm
text-white
outline-none
transition
focus:border-blue-500
"
/>

</div>

<div className="flex items-center gap-4">

<div className="
rounded-xl
border
border-blue-500/40
bg-blue-500/10
px-4
py-2
text-sm
text-blue-300
">
Arc Testnet
</div>

<button
className="
rounded-xl
border
border-slate-700
bg-slate-900
p-3
transition
hover:border-blue-500
"
>
<Bell
size={18}
className="text-slate-300"
/>
</button>

<WalletChip/>

</div>

</div>

</header>
  );
}