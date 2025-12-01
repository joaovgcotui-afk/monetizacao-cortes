'use client'

import { useEffect } from 'react'
import fluidPlayer from 'fluid-player'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  useEffect(() => {
    if (typeof window === 'undefined') return

    const player = fluidPlayer('video-player', {
      layoutControls: {
        fillToContainer: true,
        posterImage: poster || '',
        autoPlay: false,
        mute: false,

        allowTheatre: true,
        allowTheatreFullscreen: true, // NOME CORRETO
        allowDownload: false,
        allowFullscreen: true,
        primaryColor: '#00c3ff',
      },

      vastOptions: {
        adList: [
          {
            roll: 'preRoll',
            vastTag: 'https://youradexchange.com/video/select.php?r=10666514',
            adText: 'Seu vídeo começará após o anúncio...',
            adTextPosition: 'bottom right', // POSIÇÃO VÁLIDA
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
      id="video-player"
      controls
      playsInline
      className="w-full h-auto rounded-lg overflow-hidden"
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
