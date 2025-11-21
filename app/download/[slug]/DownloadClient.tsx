"use client";

import { useAdblockDetector } from "@/app/hooks/useAdblockDetector";
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
  const { isChecking, isAdblock } = useAdblockDetector();

  return (
    <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 space-y-8">
      {/* Cabeçalho */}
      <header className="space-y-1">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500">
          Assista a um anúncio rápido e depois baixe o arquivo em alta
          qualidade.
        </p>
      </header>

      {/* AVISO DE ADBLOCK ATIVO */}
      {!isChecking && isAdblock && (
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-800 text-sm p-3 rounded-lg">
          <strong>Detectamos um bloqueador de anúncios 👀</strong>
          <br />
          Para liberar o download, desative o AdBlock para{" "}
          <span className="font-semibold">monetizacaocortes.online</span>.
        </div>
      )}

      {/* Player */}
      <section className="space-y-3">
        <VideoPlayerWithAds src={downloadUrl} poster={thumbnail} />

        <p className="text-xs text-gray-400">
          Esse pequeno anúncio antes do vídeo ajuda a manter o projeto vivo. 🙌
        </p>
      </section>

      {/* Botão de download (bloqueado se AdBlock ativo) */}
      <section className="space-y-4">
        <button
          disabled={isAdblock}
          onClick={() => {
            if (!isAdblock) {
              window.location.href = downloadUrl;
            }
          }}
          className={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-sm transition
            ${
              isAdblock
                ? "bg-gray-400 cursor-not-allowed text-gray-200"
                : "bg-blue-600 hover:bg-blue-700 text-white"
            }`}
        >
          ⬇️ Baixar arquivo de vídeo
        </button>

        {/* SmartLink */}
        <div className="text-center">
          <MonetagSmartLink />
        </div>
      </section>

      {/* Banners */}
      <section className="grid gap-6 md:grid-cols-2">
        {/* Native Adsterra */}
        <div className="border border-gray-100 rounded-xl p-4">
          <h2 className="text-xs font-semibold text-gray-500 mb-2">
            Conteúdo recomendado (Adsterra)
          </h2>
          <div className="flex justify-center">
            <AdsterraNativeBanner />
          </div>
        </div>

        {/* AdCash + Banner 300 */}
        <div className="border border-gray-100 rounded-xl p-4 space-y-4">
          <h2 className="text-xs font-semibold text-gray-500">
            Mais oportunidades de ganho 💰
          </h2>

          <div
            className="w-full flex justify-center items-center border border-gray-200 rounded-lg bg-gray-50"
            style={{ minHeight: 260 }}
          >
            <AdCashZone
              zoneId={ADCASH_ZONE_ID}
              containerId="adcash-download-zone"
            />
          </div>

          <div
            className="w-full flex justify-center items-center border border-gray-200 rounded-lg bg-gray-50"
            style={{ minHeight: 260 }}
          >
            <AdsterraBanner300 />
          </div>
        </div>
      </section>
    </div>
  );
}
