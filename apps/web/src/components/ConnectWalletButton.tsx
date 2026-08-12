"use client";

import { useAccount } from "wagmi";

import { useAppKit } from "../providers/AppKitProvider";
import { useSiweLogin } from "../hooks/useSiweLogin";

export function ConnectWalletButton() {
  const { open } = useAppKit();

  const { isConnected } =
    useAccount();

  const {
    login,
    loading,
  } = useSiweLogin();

  if (!isConnected) {
    return (
      <button
        onClick={() => open()}
      >
        Connect Wallet
      </button>
    );
  }

  return (
    <button
      onClick={login}
      disabled={loading}
    >
      {loading
        ? "Signing..."
        : "Sign In"}
    </button>
  );
}