"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";
import { useEffect } from "react";

type AdCashZoneProps = {
  /** ID da zone (copiado do painel AdCash). */
  zoneId: string;
  /** Opcional: id do container pra você identificar no DOM. */
  containerId?: string;
};

declare global {
  interface Window {
    acAsyc?: Array<{
      type: string;
      id: string;
      elementId: string;
    }>;
  }
}

/**
 * Componente genérico da zone AdCash.
 * Use esse cara onde quiser renderizar o bloco (abaixo do player, por ex).
 */
export function AdCashZone({
  zoneId,
  containerId = "adcash-zone-1",
}: AdCashZoneProps) {
  useThirdPartyScript({
    id: "adcash-main-script",
    src: "https://static.adcash.com/script/adcash.js", // normalmente é algo assim, ajuste com o snippet oficial
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    window.acAsyc = window.acAsyc || [];
    window.acAsyc.push({
      type: "zone",
      id: zoneId,
      elementId: containerId,
    });
  }, [zoneId, containerId]);

  return <div id={containerId} />;
}
