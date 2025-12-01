'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [scriptLoaded, setScriptLoaded] = useState(false)

  useEffect(() => {
    if (!scriptLoaded) return
    if (!videoRef.current) return

    const fp = (window as any).fluidPlayer
    if (!fp) return

    const player = fp(videoRef.current, {
      layoutControls: {
        fillToContainer: true,
        posterImage: poster || '',
        autoPlay: false,
        mute: false,
        allowTheatre: true,
        allowFullscreen: true,
        allowDownload: false,
        primaryColor: '#00c3ff',
      },
      vastOptions: {
        adList: [
          {
            roll: 'preRoll',
            vastTag: 'https://vod.adcash.com/vast-test.xml',
            adText: 'Seu vídeo começará após o anúncio...',
            adTextPosition: 'bottom right',
          },
        ],
      },
    })

    return () => {
      try {
        player?.destroy()
      } catch {}
    }
  }, [scriptLoaded, src, poster])

  return (
    <>
      {/* Carregar o script da CDN corretamente via Next.js */}
      <Script
        src="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js"
        strategy="afterInteractive"
        onLoad={() => setScriptLoaded(true)}
      />

      {/* Carregar o CSS globalmente */}
      <link
        rel="stylesheet"
        href="https://cdn.fluidplayer.com/v3/current/fluidplayer.min.css"
      />

      <video
        ref={videoRef}
        playsInline
        controls={false}
        className="w-full rounded-lg overflow-hidden"
      >
        <source src={src} type="video/mp4" />
      </video>
    </>
  )
}
