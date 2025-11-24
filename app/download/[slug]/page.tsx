// app/download/[slug]/page.tsx
"use client";

import { videos } from "@/data/videos";
import DownloadClient from "./DownloadClient";

export default function DownloadPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Buscar vídeo REAL pelo slug
  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Vídeo não encontrado 😕
          </h1>
          <p className="text-gray-600">
            O vídeo solicitado não existe ou foi removido.
          </p>

          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Voltar ao início
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-3xl w-full py-8">
        <DownloadClient
          title={video.title}
          downloadUrl={video.downloadUrl}
          thumbnail={video.thumbnail}
        />
      </div>
    </main>
  );
}
