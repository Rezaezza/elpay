import { ReactNode } from "react";

interface CheckoutLayoutProps {
  children: ReactNode;
}

export function CheckoutLayout({
  children,
}: CheckoutLayoutProps) {
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="mx-auto flex min-h-screen w-full max-w-xl items-center justify-center p-6">
        <div className="w-full rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl">
          {children}
        </div>
      </div>
    </div>
  );
}