"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

/**
 * Popunder do Adsterra.
 * Script original:
 * <script type='text/javascript' src='//pl28098761.effectivegatecpm.com/64/73/b6/6473b62e25e81b3ba1470d9dd3c53185.js'></script>
 */
export function AdsterraPopunder() {
  useThirdPartyScript({
    id: "adsterra-popunder",
    src: "//pl28098761.effectivegatecpm.com/64/73/b6/6473b62e25e81b3ba1470d9dd3c53185.js",
  });

  return null;
}
