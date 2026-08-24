import { cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex rounded-full px-3 py-1 text-xs font-medium",
  {
    variants: {
      variant: {
        success:
          "bg-emerald-600/20 text-emerald-400",

        warning:
          "bg-yellow-600/20 text-yellow-400",

        danger:
          "bg-red-600/20 text-red-400",

        info:
          "bg-blue-600/20 text-blue-400",
      },
    },

    defaultVariants: {
      variant: "info",
    },
  },
);

export function Badge({
  variant,

  className,

  children,
}: any) {
  return (
    <span
      className={cn(
        badgeVariants({
          variant,
        }),
        className,
      )}
    >
      {children}
    </span>
  );
}