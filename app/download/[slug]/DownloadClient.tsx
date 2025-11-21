"use client";

import { VideoPlayerWithAds } from "../../components/VideoPlayerWithAds";
import { AdsterraNativeBanner } from "../../components/ads/AdsterraNativeBanner";
import { AdsterraBanner300 } from "../../components/ads/AdsterraBanner300";
import { AdCashZone } from "../../components/ads/AdCashZone";

interface DownloadClientProps {
  title: string;
  downloadUrl: string;
  thumbnail: string;
}

// 👇 Trocar esses valores pelos IDs reais do painel
const HILLTOP_SPOT_ID = "SEU_HILLTOP_SPOT_ID";
const ADCASH_ZONE_ID = "SEU_ADCASH_ZONE_ID";

export default function DownloadClient({
  title,
  downloadUrl,
  thumbnail,
}: DownloadClientProps) {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-6">
      {/* Cabeçalho */}
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">
          Assista ao corte com um anúncio rápido e depois baixe o arquivo em
          alta qualidade para usar nos seus canais.
        </p>
      </header>

      {/* Player com pré-roll Hilltop */}
      <section className="space-y-3">
        <VideoPlayerWithAds
          src={downloadUrl}
          poster={thumbnail}
          hilltopSpotId={HILLTOP_SPOT_ID}
        />

        <p className="text-xs text-gray-400">
          Um anúncio em vídeo pode aparecer antes do conteúdo. Essa é a forma de
          manter o projeto vivo e continuar produzindo cortes prontos. 🙌
        </p>
      </section>

      {/* Botão de download principal */}
      <section className="space-y-4">
        <a
          href={downloadUrl}
          className="w-full inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg font-semibold text-sm transition-colors"
          download
        >
          ⬇️ Baixar arquivo de vídeo
        </a>

        {/* Bloco de anúncios em volta do player */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Coluna 1 – Native Adsterra */}
          <div className="border border-gray-100 rounded-xl p-3">
            <h2 className="text-xs font-semibold text-gray-500 mb-2">
              Conteúdo recomendado (Adsterra)
            </h2>

            <div className="flex justify-center">
              <AdsterraNativeBanner />
            </div>
          </div>

          {/* Coluna 2 – AdCash + Banner 300x250 */}
          <div className="border border-gray-100 rounded-xl p-3 space-y-3">
            <h2 className="text-xs font-semibold text-gray-500">
              Mais oportunidades de ganho
            </h2>

            {/* AdCash CPC */}
            <div className="w-full flex justify-center">
              <AdCashZone
                zoneId={ADCASH_ZONE_ID}
                containerId="adcash-download-zone"
              />
            </div>

            {/* Banner 300x250 Adsterra */}
            <div className="w-full flex justify-center">
              <AdsterraBanner300 />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
