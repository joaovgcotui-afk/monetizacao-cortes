"use client";

import { useEffect } from "react";

/**
 * Banner 300x250 do Adsterra.
 * Usa atOptions + invoke.js.
 */
export function AdsterraBanner300() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const container = document.getElementById("adsterra-banner-300x250");
    if (!container) return;

    // evita duplicar scripts
    if (container.getAttribute("data-adsterra-initialized") === "true") return;
    container.setAttribute("data-adsterra-initialized", "true");

    const scriptConfig = document.createElement("script");
    scriptConfig.type = "text/javascript";
    scriptConfig.innerHTML = `
      atOptions = {
        'key' : 'ba483f356ee397e3d51e1beac74584c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;

    const scriptInvoke = document.createElement("script");
    scriptInvoke.type = "text/javascript";
    scriptInvoke.src =
      "//www.highperformanceformat.com/ba483f356ee397e3d51e1beac74584c6/invoke.js";
    scriptInvoke.async = true;

    container.appendChild(scriptConfig);
    container.appendChild(scriptInvoke);
  }, []);

  return (
    <div
      id="adsterra-banner-300x250"
      className="my-6 mx-auto flex justify-center"
      style={{ width: 300, height: 250 }}
    />
  );
}
