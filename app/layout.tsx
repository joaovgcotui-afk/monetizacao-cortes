import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Monetização Cortes Studio",
  description: "Sistema de distribuição de cortes com monetização por tráfego.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        {/* POPUNDER — Adsterra */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="//pl28098761.effectivegatecpm.com/64/73/b6/6473b62e25e81b3ba1470d9dd3c53185.js"
        ></script>
      </head>

      <body className="bg-gray-50 text-gray-900 flex flex-col min-h-screen">
        <div className="flex-grow">{children}</div>

        {/* FOOTER */}
        <footer className="bg-white border-t border-gray-200 mt-10">
          <div className="max-w-6xl mx-auto px-6 py-6 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Monetização Cortes Studio</p>
            <div className="mt-2 space-x-4">
              <a href="#" className="hover:text-gray-800 transition">
                Termos
              </a>
              <a href="#" className="hover:text-gray-800 transition">
                Privacidade
              </a>
              <a href="#" className="hover:text-gray-800 transition">
                Contatos
              </a>
            </div>
          </div>
        </footer>

        {/* SOCIAL BAR — Adsterra */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          type="text/javascript"
          src="//pl28098744.effectivegatecpm.com/c6/83/87/c68387c69919500d593aefd1718898c5.js"
        ></script>
      </body>
    </html>
  );
}
