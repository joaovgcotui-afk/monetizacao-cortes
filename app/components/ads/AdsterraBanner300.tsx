"use client";

import { useEffect } from "react";

export function AdsterraBanner300() {
  useEffect(() => {
    // evita múltiplos scripts duplicados
    if (document.getElementById("as-300-script")) return;

    // configurações
    const configScript = document.createElement("script");
    configScript.id = "as-300-config";
    configScript.innerHTML = `
      window.atOptions = {
        'key' : 'ba483f356ee397e3d51e1beac74584c6',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(configScript);

    // script de invocação
    const invokeScript = document.createElement("script");
    invokeScript.id = "as-300-script";
    invokeScript.src =
      "//www.highperformanceformat.com/ba483f356ee397e3d51e1beac74584c6/invoke.js";
    invokeScript.async = true;

    // IMPORTANTÍSSIMO: somente executa APÓS o script ser adicionado dentro da div
    const container = document.getElementById("adsterra-300");
    if (container) container.appendChild(invokeScript);

    return () => {
      configScript.remove();
      invokeScript.remove();
    };
  }, []);

  return (
    <div
      id="adsterra-300"
      className="w-full flex justify-center items-center border border-gray-200 rounded-md bg-gray-50"
      style={{ minHeight: 260 }}
    />
  );
}
