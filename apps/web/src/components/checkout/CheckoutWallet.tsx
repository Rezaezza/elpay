"use client";

import { ConnectWalletButton } from "@/components/wallet/ConnectWalletButton";

export function CheckoutWallet() {
  return (
    <div className="p-6 border-t border-neutral-800">
      <ConnectWalletButton />
    </div>
  );
}