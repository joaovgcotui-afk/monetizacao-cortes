'use client'

import { useEffect, useRef } from 'react'
import fluidPlayer from 'fluid-player'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (typeof window === 'undefined') return

    // Inicializar somente quando o vídeo existir
    const player = fluidPlayer(videoRef.current, {
      layoutControls: {
        fillToContainer: true,
        posterImage: poster || '',
        autoPlay: false,
        mute: false,
        allowTheatre: true,
        allowTheatreFullscreen: true,
        allowDownload: false,
        allowFullscreen: true,
        primaryColor: '#00c3ff',
      },
      vastOptions: {
        adList: [
          {
            roll: 'preRoll',
            // TESTE GARANTIDO
            vastTag: 'https://vod.adcash.com/vast-test.xml',
            adText: 'Seu vídeo começará após o anúncio...',
            adTextPosition: 'bottom right',
          },
        ],
        showPlayButton: true,
      },
    })

    return () => {
      try {
        player?.destroy()
      } catch {}
    }
  }, [src, poster])

  return (
    <video
      ref={videoRef}
      id="video-player"
      controls={false} // REMOVE CONTROLES DO PLAYER NATIVO
      playsInline
      className="w-full h-auto rounded-lg overflow-hidden"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
