"use client";

import { useCallback, useState } from "react";
import {
  useAccount,
  useSignMessage,
} from "wagmi";

import { api } from "@/lib/api";
import { saveToken } from "@/lib/auth";

export function useSiweLogin() {
  const { address, isConnected } =
    useAccount();

  const {
    signMessageAsync,
  } = useSignMessage();

  const [isLoggingIn, setIsLoggingIn] =
    useState(false);

  const [error, setError] =
    useState<string | null>(null);

  const [isAuthenticated, setIsAuthenticated] =
    useState(false);

  const login = useCallback(
    async () => {
      if (!isConnected || !address) {
        throw new Error(
          "Wallet belum terhubung",
        );
      }

      setIsLoggingIn(true);
      setError(null);

      try {
        // 1. Get nonce
        const {
          nonce,
        } = await api.auth.nonce();

        // 2. Create SIWE message
        const {
          message,
        } = await api.auth.message({
          address,
          nonce,
        });

        // 3. Ask wallet to sign SIWE message
        const signature =
          await signMessageAsync({
            message,
          });

        // 4. Verify signature on backend
        const result =
          await api.auth.verify({
            address,
            message,
            signature,
          });

        // 5. Store JWT
        saveToken(result.jwt);

        setIsAuthenticated(true);

        return result;
      } catch (err) {
        const message =
          err instanceof Error
            ? err.message
            : "Login gagal";

        setError(message);

        throw err;
      } finally {
        setIsLoggingIn(false);
      }
    },
    [
      address,
      isConnected,
      signMessageAsync,
    ],
  );

  return {
    login,
    isLoggingIn,
    isAuthenticated,
    error,
    address,
  };
}