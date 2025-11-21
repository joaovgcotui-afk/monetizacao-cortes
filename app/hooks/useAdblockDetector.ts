"use client";

import { useEffect, useState } from "react";

export function useAdblockDetector(delay = 1200) {
  const [isAdblock, setIsAdblock] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    let bait: HTMLElement | null = document.createElement("div");

    bait.className =
      "adsbox pub_300x250 text-ad banner-ad ad-unit textads pub_300x250";
    bait.style.position = "absolute";
    bait.style.left = "-9999px";
    bait.style.top = "-9999px";

    document.body.appendChild(bait);

    const timer = window.setTimeout(() => {
      try {
        const style = window.getComputedStyle(bait);
        const blocked =
          !bait ||
          bait.offsetParent === null ||
          bait.offsetHeight === 0 ||
          bait.offsetWidth === 0 ||
          style.display === "none" ||
          style.visibility === "hidden";

        // 🔥 EVITAR FALSO POSITIVO:
        // se a página ainda estiver carregando ads, NÃO acusar adblock
        if (performance.now() < 800) {
          setIsAdblock(false);
        } else {
          setIsAdblock(blocked);
        }
      } catch {
        // erro DEFINITIVO → algo bloqueou
        setIsAdblock(true);
      } finally {
        setIsChecking(false);
        if (bait && bait.parentNode) bait.parentNode.removeChild(bait);
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      if (bait && bait.parentNode) bait.parentNode.removeChild(bait);
    };
  }, [delay]);

  return { isChecking, isAdblock };
}
