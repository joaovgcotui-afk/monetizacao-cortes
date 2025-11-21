import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
