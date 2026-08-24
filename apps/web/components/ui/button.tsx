import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-2xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2",
  {
    variants: {
      variant: {
        primary:
          "bg-blue-600 text-white hover:bg-blue-700",

        secondary:
          "bg-zinc-800 text-white hover:bg-zinc-700",

        outline:
          "border border-zinc-700 bg-transparent hover:bg-zinc-900",

        destructive:
          "bg-red-600 text-white hover:bg-red-700",

        ghost:
          "hover:bg-zinc-900",
      },

      size: {
        sm: "h-9 px-3",

        md: "h-11 px-5",

        lg: "h-12 px-7",

        icon: "h-11 w-11",
      },
    },

    defaultVariants: {
      variant: "primary",

      size: "md",
    },
  },
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
        className,
      )}
      {...props}
    />
  );
}