"use client";

import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";

export function DashboardLayout({
  children,
}:{
  children:React.ReactNode;
}){

  return(

<div className="relative flex min-h-screen overflow-hidden">

<div className="
pointer-events-none
absolute
right-[-200px]
top-[-200px]
h-[500px]
w-[500px]
rounded-full
bg-blue-600/20
blur-[180px]
"/>

<div className="
pointer-events-none
absolute
bottom-[-200px]
left-[-200px]
h-[500px]
w-[500px]
rounded-full
bg-violet-600/20
blur-[180px]
"/>

<Sidebar/>

<div className="relative z-10 flex flex-1 flex-col">

<Topbar/>

<main className="flex-1 p-8 lg:p-10">

<div className="mx-auto w-full max-w-7xl">

{children}

</div>

</main>

</div>

</div>

  );

}