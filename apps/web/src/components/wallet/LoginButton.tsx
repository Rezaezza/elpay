"use client";

import { useSiweLogin } from "@/hooks/auth/useSiweLogin";

export function LoginButton() {
  const {
    login,
    isLoggingIn,
    isAuthenticated,
    error,
    address,
  } = useSiweLogin();

  if (isAuthenticated) {
    return (
      <div className="space-y-2">
        <div className="text-sm text-green-600">
          Wallet authenticated
        </div>

        {address && (
          <div className="text-xs text-muted-foreground">
            {address}
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-3">
      <button
        type="button"
        onClick={() => {
          void login();
        }}
        disabled={isLoggingIn}
        className="rounded-lg bg-black px-5 py-3 text-sm font-medium text-white disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoggingIn
          ? "Signing in..."
          : "Sign in with Wallet"}
      </button>

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}