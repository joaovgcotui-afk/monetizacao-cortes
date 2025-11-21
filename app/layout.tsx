import type { Metadata } from "next";
import "./globals.css";
import { AdsClient } from "./components/AdsClient";

export const metadata: Metadata = {
  title: "Monetização Cortes Studio",
  description: "Cortes prontos para ganhar dinheiro",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Monetag Site Verification */}
        <meta name="monetag" content="743381a3c558995ad993355162fc7956" />
      </head>

      <body className="bg-gray-50">
        <AdsClient />
        {children}
      </body>
    </html>
  );
}
