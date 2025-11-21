"use client";

import { useEffect, useRef, useState } from "react";
import { HilltopPreRoll } from "./ads/HilltopPreRoll";

type VideoPlayerWithAdsProps = {
  src: string;
  poster?: string;
  hilltopSpotId: string;
};

export function VideoPlayerWithAds({
  src,
  poster,
  hilltopSpotId,
}: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [showMainVideo, setShowMainVideo] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setShowMainVideo(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, []);

  useEffect(() => {
    if (showMainVideo && videoRef.current) {
      videoRef.current.play().catch(() => {
        // autoplay falhou, o usuário terá que clicar
      });
    }
  }, [showMainVideo]);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {!showMainVideo && (
        <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden">
          {/* Overlay "Anúncio" + contador */}
          <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            Anúncio • {secondsLeft}s
          </div>

          {/* Container do player de vídeo do Hilltop */}
          <div
            id="hilltop-preroll-container"
            className="w-full h-full"
            data-spot-id={hilltopSpotId}
          />

          {/* Script do Hilltop (pre-roll) */}
          <HilltopPreRoll spotId={hilltopSpotId} />
        </div>
      )}

      {showMainVideo && (
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          controls
          className="w-full rounded-xl"
        />
      )}
    </div>
  );
}
