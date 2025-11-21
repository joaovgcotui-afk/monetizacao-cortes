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
      <body>
        <AdsClient />
        {children}
      </body>
    </html>
  );
}
