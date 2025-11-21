"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

export function AdsterraNativeBanner() {
  useThirdPartyScript({
    id: "adsterra-native-banner",
    src: "//pl28098779.effectivegatecpm.com/1c959dd5f34a21ba393399bea75687ad/invoke.js",
    async: true,
    attrs: {
      "data-cfasync": "false",
    },
  });

  return (
    <div
      id="container-1c959dd5f34a21ba393399bea75687ad"
      className="w-full flex justify-center my-6"
    />
  );
}
