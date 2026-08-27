"use client";

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

<div
  className="
    mx-auto
    flex
    h-20
    max-w-7xl
    items-center
    justify-end
    px-8
  "
>


<div className="flex items-center gap-4">


<WalletChip/>

</div>

</div>

</header>
  );
}