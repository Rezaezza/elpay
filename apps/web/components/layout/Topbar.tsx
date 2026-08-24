"use client";

import { Search } from "lucide-react";

import { AppKitButton } from "@reown/appkit/react";

export function Topbar(){

return(

<header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-8">

<div className="relative">

<Search

className="absolute left-4 top-3 text-slate-400"

/>

<input

placeholder="Search..."

className="pl-12 w-96 h-12 rounded-xl border border-slate-200 bg-slate-50"

/>

</div>

<div className="flex items-center gap-4">

<div className="px-4 py-2 rounded-xl bg-green-50 border">

Arc Testnet

</div>

<AppKitButton />

</div>

</header>

);

}