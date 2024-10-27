import type { Metadata } from "next";
import "./globals.css";
import TRPCProvider from "@/providers/trpc";
import { montserrat } from "./fonts";
import { SessionProvider } from "next-auth/react";

export const metadata: Metadata = {
  title: "Cybership",
  description: "Customers' Orders",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <SessionProvider>
          <TRPCProvider>{children}</TRPCProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
