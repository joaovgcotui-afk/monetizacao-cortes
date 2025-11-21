"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    aclib?: {
      runBanner: (params: { zoneId: string }) => void;
    };
  }
}

interface AdCashZoneProps {
  zoneId: string;
  containerId: string;
}

export function AdCashZone({ zoneId, containerId }: AdCashZoneProps) {
  useEffect(() => {
    // Carregar a biblioteca uma única vez
    if (!document.getElementById("aclib")) {
      const script = document.createElement("script");
      script.id = "aclib";
      script.src = "//acscdn.com/script/aclib.js";
      script.async = true;
      document.head.appendChild(script);
    }

    // Espera a lib carregar e executa o banner
    const timeout = setTimeout(() => {
      if (window.aclib) {
        window.aclib.runBanner({ zoneId });
      }
    }, 600);

    return () => clearTimeout(timeout);
  }, [zoneId]);

  return <div id={containerId} className="w-full flex justify-center"></div>;
}
