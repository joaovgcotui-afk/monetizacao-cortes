'use client'

import { useEffect, useRef } from 'react'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    if (!videoRef.current) return
    if (typeof window === 'undefined') return

    const fluidPlayer = (window as any).fluidPlayer
    if (!fluidPlayer) return

    const player = fluidPlayer(videoRef.current, {
      layoutControls: {
        fillToContainer: true,
        posterImage: poster || '',
        autoPlay: false,
        mute: false,
        allowTheatre: true,
        allowTheatreFullscreen: true,
        allowFullscreen: true,
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
      playsInline
      controls={false}
      className="w-full rounded-lg overflow-hidden"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
