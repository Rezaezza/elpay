"use client";

import { useState } from "react";

import {
  useAccount,
  useSignMessage,
} from "wagmi";

import {
  getNonce,
  getMessage,
  verifySignature,
} from "../services/auth";

import { saveToken } from "../lib/auth";

export function useSiweLogin() {
  const { address } = useAccount();

  const {
    signMessageAsync,
  } = useSignMessage();

  const [loading, setLoading] =
    useState(false);

  async function login() {
    if (!address) return;

    setLoading(true);

    try {
      const nonce =
        await getNonce();

      const message =
        await getMessage(
          address,
          nonce.nonce,
        );

      const signature =
        await signMessageAsync({
          message: message.message,
        });

      const session =
        await verifySignature(
          address,
          message.message,
          signature,
        );

      saveToken(session.jwt);

      return session;

    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    login,
  };
}