"use client";

import { usePathname } from "next/navigation";
// Adsterra Social Bar e outros, se você já tiver componentes pra eles
// import { AdsterraSocialBar } from "./ads/AdsterraSocialBar";

export function AdsClient() {
  const pathname = usePathname();

  // Exemplo de regras: se quiser aliviar ads em alguma rota
  const isDownloadPage = pathname?.startsWith("/download");

  return (
    <>
      {/* Se você tiver um componente pra SocialBar do Adsterra, injeta aqui */}
      {/* <AdsterraSocialBar /> */}

      {/* Dá pra adicionar lógica:
          - menos ads na home
          - mais agressivo em /download
      */}
      {isDownloadPage && (
        <>{/* Se quiser algo extra só na página de download, injeta aqui */}</>
      )}
    </>
  );
}
