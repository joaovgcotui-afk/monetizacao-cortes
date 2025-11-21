// app/hooks/useAdblockDetector.ts
"use client";

import { useEffect, useState } from "react";

export function useAdblockDetector(delay = 1500) {
  const [isChecking, setIsChecking] = useState(true);
  const [isAdblock, setIsAdblock] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const bait = document.createElement("div");
    bait.className = "adsbox pub_300x250 banner_ad ad-unit textAd";
    bait.style.position = "absolute";
    bait.style.left = "-9999px";
    bait.style.top = "-9999px";

    document.body.appendChild(bait);

    const timer = window.setTimeout(() => {
      try {
        const style = window.getComputedStyle(bait);
        const blocked =
          bait.offsetParent === null ||
          bait.offsetHeight === 0 ||
          bait.offsetWidth === 0 ||
          style.display === "none" ||
          style.visibility === "hidden";

        setIsAdblock(blocked);
      } catch (e) {
        // se der erro aqui, assumimos que há adblock
        setIsAdblock(true);
      } finally {
        setIsChecking(false);
        if (bait.parentNode) {
          bait.parentNode.removeChild(bait);
        }
      }
    }, delay);

    return () => {
      clearTimeout(timer);
      if (bait.parentNode) {
        bait.parentNode.removeChild(bait);
      }
    };
  }, [delay]);

  return { isChecking, isAdblock };
}
