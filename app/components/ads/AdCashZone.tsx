"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    aclib?: {
      runBanner: (params: { zoneId: string }) => void;
      loadAds?: () => void;
    };
  }
}

interface AdCashZoneProps {
  zoneId: string;
  containerId: string;
}

export function AdCashZone({ zoneId, containerId }: AdCashZoneProps) {
  useEffect(() => {
    const loadAd = () => {
      try {
        if (window.aclib?.runBanner) {
          window.aclib.runBanner({ zoneId });
        }
      } catch (err) {
        console.error("AdCash error:", err);
      }
    };

    // carregar a lib apenas 1 vez
    if (!document.getElementById("aclib")) {
      const script = document.createElement("script");
      script.id = "aclib";
      script.src = "//acscdn.com/script/aclib.js";
      script.async = true;
      script.onload = loadAd;
      document.head.appendChild(script);
    } else {
      loadAd();
    }
  }, [zoneId]);

  return (
    <div
      id={containerId}
      className="w-full flex justify-center items-center border border-gray-200 rounded-md bg-gray-50"
      style={{ minHeight: 260 }}
    />
  );
}
