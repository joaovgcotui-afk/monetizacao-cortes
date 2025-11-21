"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

/**
 * Social Bar global do Adsterra.
 * Script original:
 * <script type='text/javascript' src='//pl28098744.effectivegatecpm.com/c6/83/87/c68387c69919500d593aefd1718898c5.js'></script>
 */
export function AdsterraSocialBar() {
  useThirdPartyScript({
    id: "adsterra-socialbar",
    src: "//pl28098744.effectivegatecpm.com/c6/83/87/c68387c69919500d593aefd1718898c5.js",
  });

  return null;
}
