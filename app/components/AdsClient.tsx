"use client";

import { usePathname } from "next/navigation";
import { AdsterraSocialBar } from "./ads/AdsterraSocialBar";
import { AdsterraPopunder } from "./ads/AdsterraPopunder";

export function AdsClient() {
  const pathname = usePathname();
  const isDownloadPage = pathname?.startsWith("/download");

  return (
    <>
      {/* Social Bar em todas as páginas */}
      <AdsterraSocialBar />

      {/* Popunder só na página de download (mais agressivo) */}
      {isDownloadPage && <AdsterraPopunder />}
    </>
  );
}
