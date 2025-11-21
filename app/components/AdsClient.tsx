"use client";

import { usePathname } from "next/navigation";
import { AdsterraSocialBar } from "./ads/AdsterraSocialBar";
import { AdsterraPopunder } from "./ads/AdsterraPopunder";
import { MonetagSticky } from "./ads/MonetagSticky";

export function AdsClient() {
  const pathname = usePathname();
  const isDownloadPage = pathname?.startsWith("/download");

  return (
    <>
      <AdsterraSocialBar />
      {isDownloadPage && <AdsterraPopunder />}
      <MonetagSticky />
    </>
  );
}
