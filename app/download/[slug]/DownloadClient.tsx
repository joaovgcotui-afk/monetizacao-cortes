"use client";

import { VideoPlayerWithAds } from "../../components/VideoPlayerWithAds";
import { AdsterraNativeBanner } from "../../components/ads/AdsterraNativeBanner";
import { AdsterraBanner300 } from "../../components/ads/AdsterraBanner300";
import { AdCashZone } from "../../components/ads/AdCashZone";
import { MonetagSmartLink } from "../../components/ads/MonetagSmartLink";

// 🔥 IDs reais — coloque os seus aqui assim que tiver
const HILLTOP_SPOT_ID = "SEU_HILLTOP_SPOT_ID";
const ADCASH_ZONE_ID = "SEU_ADCASH_ZONE_ID";

interface DownloadClientProps {
  title: string;
  downloadUrl: string;
  thumbnail: string;
}

export default function DownloadClient({
  title,
  downloadUrl,
  thumbnail,
}: DownloadClientProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-8">
      {/* Cabeçalho */}
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">
          Assista ao corte com um anúncio rápido e depois baixe o arquivo em
          alta qualidade.
        </p>
      </header>

      {/* Player + Pre-Roll */}
      <section className="space-y-3">
        <VideoPlayerWithAds
          src={downloadUrl}
          poster={thumbnail}
          hilltopSpotId={HILLTOP_SPOT_ID}
        />

        <p className="text-xs text-gray-400">
          O anúncio em vídeo pode aparecer antes do conteúdo — isso ajuda a
          manter tudo gratuito. 🙌
        </p>
      </section>

      {/* Botões de Download */}
      <section className="space-y-4">
        {/* Download principal */}
        <a
          href={downloadUrl}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors"
          download
        >
          ⬇️ Baixar arquivo de vídeo
        </a>

        {/* Monetag SmartLink (fallback altamente rentável) */}
        <div className="text-center">
          <MonetagSmartLink />
        </div>
      </section>

      {/* Bloco de anúncios lateral */}
      <section className="grid gap-4 sm:grid-cols-2">
        {/* Coluna 1 – Adsterra Native */}
        <div className="border border-gray-100 rounded-xl p-4">
          <h2 className="text-xs font-semibold text-gray-500 mb-2">
            Conteúdo recomendado (Adsterra)
          </h2>

          <div className="flex justify-center">
            <AdsterraNativeBanner />
          </div>
        </div>

        {/* Coluna 2 – AdCash + Adsterra Banner */}
        <div className="border border-gray-100 rounded-xl p-4 space-y-4">
          <h2 className="text-xs font-semibold text-gray-500">
            Mais oportunidades de ganho 💰
          </h2>

          {/* AdCash CPC */}
          <div className="flex justify-center">
            <AdCashZone
              zoneId={ADCASH_ZONE_ID}
              containerId="adcash-download-zone"
            />
          </div>

          {/* Adsterra Banner 300 */}
          <div className="flex justify-center">
            <AdsterraBanner300 />
          </div>
        </div>
      </section>
    </div>
  );
}
