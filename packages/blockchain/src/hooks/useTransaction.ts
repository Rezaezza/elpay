import { useState } from "react";

export function useTransaction() {
  const [hash, setHash] =
    useState<`0x${string}`>();

  const [status, setStatus] =
    useState<
      | "idle"
      | "pending"
      | "success"
      | "error"
    >("idle");

  return {
    hash,

    status,

    setHash,

    setStatus,
  };
}