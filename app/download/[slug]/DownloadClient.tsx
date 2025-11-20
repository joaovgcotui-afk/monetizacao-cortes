"use client";

import { useEffect, useState } from "react";
import { videos } from "../../../data/videos";

interface DownloadClientProps {
  slug: string;
}

export default function DownloadClient({ slug }: DownloadClientProps) {
  const video = videos.find((v) => v.slug === slug);

  const [seconds, setSeconds] = useState(10);
  const [canDownload, setCanDownload] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setCanDownload(true);
    }
  }, [seconds]);

  if (!video) {
    return (
      <p className="p-6 text-center text-gray-600">Vídeo não encontrado.</p>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">
            Download: {video.title}
          </h1>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="max-w-3xl mx-auto px-6 py-10">
        {/* Card */}
        <div className="bg-white shadow rounded-lg p-6 border border-gray-200">
          <p className="text-gray-700 text-lg mb-4">
            Aguarde <strong>{seconds}</strong> segundos para liberar o download:
          </p>

          {/* BLOCO DO ANÚNCIO */}
          <div className="bg-gray-200 h-48 rounded flex items-center justify-center mb-6">
            <p className="text-gray-600">Anúncio aqui</p>
          </div>

          {/* BOTÃO */}
          <a
            href={video.downloadUrl}
            download
            className={`w-full block text-center py-3 rounded text-white font-semibold transition ${
              canDownload
                ? "bg-blue-600 hover:bg-blue-700"
                : "bg-gray-400 cursor-not-allowed"
            }`}
          >
            {canDownload ? "Baixar Agora" : `Aguarde ${seconds}s`}
          </a>
        </div>
      </section>
    </main>
  );
}
