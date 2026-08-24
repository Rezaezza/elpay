"use client";

import Link from "next/link";

import {

LayoutDashboard,

Wallet,

Receipt,

CreditCard,

BarChart3,

Users,

KeyRound,

Settings,

} from "lucide-react";

const menus=[

{
name:"Dashboard",
href:"/dashboard",
icon:LayoutDashboard
},

{
name:"Payments",
href:"/payments",
icon:CreditCard
},

{
name:"Invoices",
href:"/invoices",
icon:Receipt
},

{
name:"Wallet",
href:"/wallet",
icon:Wallet
},

{
name:"Analytics",
href:"/analytics",
icon:BarChart3
},

{
name:"Customers",
href:"/customers",
icon:Users
},

{
name:"API Keys",
href:"/developers",
icon:KeyRound
},

{
name:"Settings",
href:"/settings",
icon:Settings
},

];

export function Sidebar(){

return(

<aside className="w-72 bg-slate-950 text-white border-r border-slate-800">

<div className="h-20 flex items-center px-8">

<h1 className="text-3xl font-bold">

ElPay

</h1>

</div>

<nav className="px-4 space-y-2">

{

menus.map(item=>{

const Icon=item.icon;

return(

<Link

key={item.name}

href={item.href}

className="flex items-center gap-4 rounded-xl px-4 py-3 hover:bg-blue-600 transition"

>

<Icon size={20}/>

<span>

{item.name}

</span>

</Link>

);

})

}

</nav>

</aside>

);

}