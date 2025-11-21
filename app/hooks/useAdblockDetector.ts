"use client";

import { useEffect, useState } from "react";

export function useAdblockDetector(delay = 2500) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAdblock, setIsAdblock] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let cancelled = false;

    // Bait que adblock geralmente bloqueia
    const bait = document.createElement("div");
    bait.className = "adsbox pub_300x250 adunit ad-banner ad-text adsense";
    bait.style.position = "absolute";
    bait.style.left = "-9999px";
    bait.style.top = "-9999px";

    document.body.appendChild(bait);

    // Função principal
    const runCheck = () => {
      if (cancelled) return;

      const style = window.getComputedStyle(bait);

      const blocked =
        !bait ||
        !bait.parentNode ||
        bait.offsetHeight === 0 ||
        bait.offsetWidth === 0 ||
        style.display === "none" ||
        style.visibility === "hidden";

      // Verifica presença de scripts de ads (reduz falsos positivos)
      const adsScriptsLoaded =
        document.querySelector("script[src*='aclib']") ||
        document.querySelector("script[src*='invoke.js']") ||
        document.querySelector("script[src*='banner.js']");

      if (adsScriptsLoaded && !blocked) {
        setIsAdblock(false);
      } else {
        setIsAdblock(blocked);
      }

      setIsChecking(false);

      if (bait.parentNode) bait.parentNode.removeChild(bait);
    };

    // Executa depois de alguns segundos para evitar falso positivo
    const timer = setTimeout(runCheck, delay);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (bait.parentNode) bait.parentNode.removeChild(bait);
    };
  }, [delay]);

  return { isChecking, isAdblock };
}
