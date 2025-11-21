"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

export function MonetagInterstitial() {
  // Script do formato Interstitial (do painel Monetag)
  useThirdPartyScript({
    id: "monetag-interstitial",
    src: "https://js.monetag.com/YOUR_INTERSTITIAL_TAG.js", // TODO: trocar
  });

  return null;
}
