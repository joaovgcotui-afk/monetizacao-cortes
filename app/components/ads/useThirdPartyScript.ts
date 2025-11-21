"use client";

import { useEffect } from "react";

type UseThirdPartyScriptOptions = {
  id: string;
  src: string;
  async?: boolean;
  attrs?: Record<string, string>;
};

/**
 * Injeta um <script> externo no client **apenas 1 vez por ID**.
 */
export function useThirdPartyScript({
  id,
  src,
  async = true,
  attrs = {},
}: UseThirdPartyScriptOptions) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // se já existe, não injeta de novo
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;
    script.src = src;
    script.async = async;

    Object.entries(attrs).forEach(([key, value]) => {
      script.setAttribute(key, value);
    });

    document.body.appendChild(script);

    return () => {
      // se quiser remover ao desmontar, descomente:
      // script.remove();
    };
  }, [id, src, async, attrs]);
}
