"use client";

import { useEffect } from "react";

export function MonetagSticky() {
  useEffect(() => {
    const script = document.createElement("script");
    script.dataset.zone = "10217696";
    script.src = "https://nap5k.com/tag.min.js";
    document.body.appendChild(script);
  }, []);

  return null;
}
