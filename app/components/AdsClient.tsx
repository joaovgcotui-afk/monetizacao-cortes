"use client";

import Script from "next/script";

export default function AdsClient() {
  return (
    <>
      {/* 🔥 Social Bar */}
      <Script
        id="adsterra-social-bar"
        strategy="afterInteractive"
        src="//pl28098744.effectivegatecpm.com/c6/83/87/c68387c69919500d593aefd1718898c5.js"
      />

      {/* 🔥 Popunder */}
      <Script
        id="adsterra-popunder"
        strategy="afterInteractive"
        src="//pl28098761.effectivegatecpm.com/64/73/b6/6473b62e25e81b3ba1470d9dd3c53185.js"
      />

      {/* 🔥 Banner 300x250 */}
      <div className="flex justify-center my-6">
        <Script
          id="adsterra-banner"
          strategy="afterInteractive"
          src="//www.highperformanceformat.com/ba483f356ee397e3d51e1beac74584c6/invoke.js"
        />
      </div>
    </>
  );
}
