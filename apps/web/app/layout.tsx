import "./globals.css";

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
      </body>
    </html>
  );
}