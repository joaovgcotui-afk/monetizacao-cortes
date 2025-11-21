"use client";

import { VideoPlayerWithAds } from "../../components/VideoPlayerWithAds";
import { AdsterraNativeBanner } from "../../components/ads/AdsterraNativeBanner";
import { AdsterraBanner300 } from "../../components/ads/AdsterraBanner300";
import { AdCashZone } from "../../components/ads/AdCashZone";
import { MonetagSmartLink } from "../../components/ads/MonetagSmartLink";

interface DownloadClientProps {
  title: string;
  downloadUrl: string;
  thumbnail: string;
}

const ADCASH_ZONE_ID = "10633666";

export default function DownloadClient({
  title,
  downloadUrl,
  thumbnail,
}: DownloadClientProps) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-6 sm:p-10 mt-6 space-y-8 border border-gray-100">
      {/* HEADER */}
      <header className="space-y-2 text-center">
        <h1 className="text-3xl font-extrabold text-gray-900">{title}</h1>

        <p className="text-gray-600 text-sm">
          Assista rapidamente e baixe o arquivo em alta qualidade.
        </p>
      </header>

      {/* PLAYER */}
      <section className="space-y-3">
        <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
          <VideoPlayerWithAds src={downloadUrl} poster={thumbnail} />
        </div>

        <p className="text-xs text-center text-gray-400">
          Esses anúncios ajudam a manter o projeto ativo e gratuito 🙌
        </p>
      </section>

      {/* DOWNLOAD */}
      <section className="space-y-4 text-center">
        <a
          href={downloadUrl}
          className="block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-base font-semibold shadow transition"
          download
        >
          ⬇️ Baixar arquivo de vídeo
        </a>

        <div className="text-center opacity-80 text-sm">
          <MonetagSmartLink />
        </div>
      </section>

      {/* GRID DE ANÚNCIOS */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* ADSTERRA NATIVE */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 shadow-sm">
          <h2 className="text-xs font-semibold text-gray-500 mb-3">
            Conteúdo recomendado
          </h2>

          <div className="flex justify-center">
            <AdsterraNativeBanner />
          </div>
        </div>

        {/* ADCASH + BANNER 300 */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 space-y-4 shadow-sm">
          <h2 className="text-xs font-semibold text-gray-500">
            Mais Oportunidades 💰
          </h2>

          {/* ADCASH */}
          <div
            className="rounded-lg bg-white border border-gray-200 p-2 flex justify-center items-center shadow-sm"
            style={{ minHeight: 250 }}
          >
            <AdCashZone
              zoneId={ADCASH_ZONE_ID}
              containerId="adcash-download-zone"
            />
          </div>

          {/* BANNER 300 */}
          <div
            className="rounded-lg bg-white border border-gray-200 p-2 flex justify-center items-center shadow-sm"
            style={{ minHeight: 250 }}
          >
            <AdsterraBanner300 />
          </div>
        </div>
      </section>
    </div>
  );
}
