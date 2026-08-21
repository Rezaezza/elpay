"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
          "bg-neutral-900 text-white hover:bg-neutral-800",

        outline:
          "border border-neutral-300 bg-white hover:bg-neutral-100",

        ghost:
          "hover:bg-neutral-100",

        danger:
          "bg-red-600 text-white hover:bg-red-700",
      },

      size: {
        sm: "h-9 px-3",

        md: "h-11 px-5",

        lg: "h-12 px-8",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        buttonVariants({
          variant,
          size,
        }),
        className
      )}
      {...props}
    />
  );
}