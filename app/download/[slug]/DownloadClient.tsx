"use client";

import { AdsterraNativeBanner } from "../../components/ads/AdsterraNativeBanner";

interface DownloadClientProps {
  title: string;
  downloadUrl: string;
}

export default function DownloadClient({
  title,
  downloadUrl,
}: DownloadClientProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Download: {title}
      </h1>

      <a
        href={downloadUrl}
        className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium text-center"
      >
        Baixar agora
      </a>

      {/* ANÚNCIO ADSTERRA - GRID */}
      <div className="mt-6 flex justify-center">
        <AdsterraNativeBanner />
      </div>
    </div>
  );
}
