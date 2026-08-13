import type { Metadata } from "next";

import "./globals.css";

import { Providers } from "../src/providers/Providers";

export const metadata: Metadata = {
  title: "ElPay",
  description:
    "Web3 Payment Infrastructure",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}