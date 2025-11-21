"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

export function MonetagInPage() {
  // PEGAR A URL EXATA DO SCRIPT NO PAINEL DO MONETAG
  useThirdPartyScript({
    id: "monetag-inpage",
    src: "https://js.monetag.com/YOUR_INPAGE_TAG.js", // TODO: trocar pela sua tag
  });

  return null;
}
