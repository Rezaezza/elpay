"use client";

import { useState } from "react";

import {
  ChevronDown,
  Copy,
  ExternalLink,
  LogOut,
} from "lucide-react";

import {
  useAccount,
  useDisconnect,
  useChainId,
} from "wagmi";

import { useAppKit } from "@reown/appkit/react";

export function WalletChip() {
  const { open } = useAppKit();

  const { address, isConnected } = useAccount();

  const { disconnect } = useDisconnect();

  const chainId = useChainId();

  const [openMenu, setOpenMenu] = useState(false);

  // Belum connect
  if (!isConnected) {
    return (
      <button
        onClick={() => open()}
        className="
          rounded-full
          bg-indigo-600
          px-5
          py-2.5
          text-white
          font-semibold
          hover:bg-indigo-700
        "
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <div className="relative">

      <button
        onClick={() => setOpenMenu(!openMenu)}
        className="
          flex
          items-center
          gap-3
          rounded-full
          border
          border-slate-200
          bg-slate-900
          px-4
          py-2
          shadow-sm
          hover:bg-slate-50
        "
      >
        <div className="h-3 w-3 rounded-full bg-emerald-400" />

        <span className="font-medium text-white">
          {address?.slice(0,6)}...
          {address?.slice(-4)}
        </span>

        <ChevronDown
          size={18}
          className={`
            transition-transform
            ${openMenu ? "rotate-180" : ""}
          `}
        />
      </button>

      {openMenu && (

        <div
   className="
absolute
right-0
mt-3
w-80
rounded-2xl
border
border-slate-200
bg-white
shadow-2xl
ring-1
ring-slate-200
p-5
z-50
"
 >

<div className="flex items-center gap-4">

<div className="
h-12
w-12
rounded-full
bg-gradient-to-br
from-indigo-500
to-violet-600
" />

            <div>

              <p className="text-slate-900 font-semibold">
                Connected
              </p>

              <p className="
mt-1
text-xs
break-all
text-slate-600
">
                {address}
              </p>

            </div>

          </div>

 

<div
  className="
    mt-5
    rounded-xl
    border
    border-indigo-100
    bg-indigo-50
    p-4
  "
>

  <p className="font-semibold text-indigo-700">
    Arc Testnet
  </p>

  <p className="mt-1 text-sm text-slate-600">
    Chain ID : {chainId}
  </p>

</div>

          <div className="mt-5 space-y-2">

 <button
  onClick={() => navigator.clipboard.writeText(address!)}
  className="
    flex
    w-full
    items-center
    gap-3
    rounded-xl
    p-3
    text-slate-700
    hover:bg-indigo-50
    hover:text-indigo-700
    transition
    cursor-pointer
  "
>
  <Copy
    size={18}
    className="text-indigo-600"
  />

  <span>Copy Address</span>
</button>

  <a
  href={`https://testnet.arcscan.app/address/${address}`}
  target="_blank"
  rel="noreferrer"
  className="
    flex
    items-center
    gap-3
    rounded-xl
    p-3
    text-slate-700
    hover:bg-indigo-50
    hover:text-indigo-700
    transition
  "
>
  <ExternalLink
    size={18}
    className="text-indigo-600"
  />

  <span>View Explorer</span>
</a>

 <button
  onClick={() => {
    disconnect();
    setOpenMenu(false);
  }}
  className="
    mt-2
    flex
    w-full
    items-center
    gap-3
    rounded-xl
    p-3
    text-red-600
    font-medium
    hover:bg-red-50
    transition
  "
>
  <LogOut
    size={18}
  />

  <span>Disconnect</span>
</button>

          </div>

        </div>

      )}

    </div>
  );
}