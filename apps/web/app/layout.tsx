import "./globals.css";

import { Toaster } from "sonner";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { WalletProvider } from "@/providers/WalletProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <WalletProvider>
          <DashboardLayout>
            {children}
          </DashboardLayout>
        </WalletProvider>
        <Toaster
          richColors
          position="top-right"
          closeButton
        />
      </body>
    </html>
  );
}