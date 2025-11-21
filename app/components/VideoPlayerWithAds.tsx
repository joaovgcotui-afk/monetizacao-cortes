"use client";

import { useEffect, useState } from "react";

interface VideoPlayerWithAdsProps {
  src: string;
  poster: string;
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const [showMainVideo, setShowMainVideo] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Controle do contador
  useEffect(() => {
    if (showMainVideo) return;

    if (countdown <= 0) {
      // dispara troca de vídeo em um microtask para evitar warning
      Promise.resolve().then(() => setShowMainVideo(true));
      return;
    }

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countdown, showMainVideo]);

  // Quando terminar o anúncio -> mostrar vídeo principal
  if (showMainVideo) {
    return (
      <video
        src={src}
        poster={poster}
        className="w-full rounded-lg"
        controls
        autoPlay
      />
    );
  }

  // Tela de “pré-roll”
  return (
    <div className="w-full rounded-lg bg-black text-white flex flex-col items-center justify-center aspect-video space-y-3">
      <p className="text-sm opacity-80">
        Anúncio rápido antes do vídeo principal.
      </p>

      <p className="text-lg font-semibold">
        Seu vídeo começa em {countdown}s...
      </p>

      <button
        onClick={() => setShowMainVideo(true)}
        className="mt-2 px-4 py-2 text-sm rounded bg-white text-black hover:bg-gray-200 transition"
      >
        Pular anúncio e assistir agora
      </button>
    </div>
  );
}
