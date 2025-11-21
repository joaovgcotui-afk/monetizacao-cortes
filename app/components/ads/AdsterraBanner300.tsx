"use client";

import { useEffect } from "react";

export function AdsterraBanner300() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // garante que o script global exista
    const configScript = document.createElement("script");
    configScript.innerHTML = `
      atOptions = {
        'key' : 'ba483f356ee397e3d51e1beac74584c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(configScript);

    const invokeScript = document.createElement("script");
    invokeScript.src =
      "//www.highperformanceformat.com/ba483f356ee397e3d51e1beac74584c6/invoke.js";
    invokeScript.async = true;
    document.body.appendChild(invokeScript);
  }, []);

  return (
    <div
      id="adsterra-300"
      className="w-full flex justify-center items-center border border-gray-200 rounded-md"
      style={{ minHeight: 260 }}
    />
  );
}
