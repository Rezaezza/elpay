"use client";

import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

export function LoadingButton({
  loading = false,
  children,
  className = "",
  disabled,
  ...props
}: Props) {
  return (
    <button
      disabled={loading || disabled}
      className={`
        flex
        w-full
        items-center
        justify-center
        gap-2
        rounded-xl
        py-3
        font-semibold
        transition
        disabled:cursor-not-allowed
        disabled:opacity-60
        ${className}
      `}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}

      {children}
    </button>
  );
}