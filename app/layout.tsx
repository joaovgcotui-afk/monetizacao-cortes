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
        {/* Verificação do MONETAG */}
        <meta name="monetag" content="e4fb8463355290be58c5f75c62fe35c8" />
      </head>
      <body>
        <AdsClient />
        {children}
      </body>
    </html>
  );
}
