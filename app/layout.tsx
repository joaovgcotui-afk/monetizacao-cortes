import type { Metadata } from "next";
import "./globals.css";
import { AdsClient } from "./components/AdsClient";

export const metadata: Metadata = {
  title: "Monetização Cortes Studio",
  description: "Cortes prontos para ganhar dinheiro",
  other: {
    monetag: "e4fb8463355290be58c5f75c62fe35c8",
  },
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
