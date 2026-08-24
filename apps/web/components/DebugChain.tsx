"use client";

import { useAccount, useChainId } from "wagmi";

export default function DebugChain() {
  const chainId = useChainId();
  const account = useAccount();

  console.log("========== WAGMI ==========");
  console.log("Chain ID:", chainId);
  console.log("Connected:", account.isConnected);
  console.log("Address:", account.address);

  return null;
}