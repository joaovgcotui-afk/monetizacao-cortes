'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    fluidPlayer: any
  }
}

export default function FluidPlayer({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  const videoId = useRef(`fp-${Math.random().toString(36).slice(2)}`)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const init = () => {
      window.fluidPlayer(videoId.current, {
        layoutControls: {
          autoPlay: false,
          fillToContainer: true,
          mute: false,
          primaryColor: '#4F46E5',
        },
        vastOptions: {
          adList: [
            {
              roll: 'preRoll',
              vastTag: 'https://youradexchange.com/video/select.php?r=10666514',
              adText: 'Seu vídeo começará após o anúncio...',
              adTextPosition: 'bottom left',
            },
          ],
        },
      })
    }

    // Carrega script do FluidPlayer somente 1x
    if (!(window as any).FLUIDPLAYER_SCRIPT_LOADED) {
      const s = document.createElement('script')
      s.src = 'https://cdn.fluidplayer.com/v3/current/fluidplayer.min.js'
      s.async = true
      s.onload = () => {
        ;(window as any).FLUIDPLAYER_SCRIPT_LOADED = true
        init()
      }
      document.body.appendChild(s)
    } else {
      init()
    }
  }, [src])

  return (
    <video
      id={videoId.current}
      controls
      poster={poster}
      style={{ width: '100%', borderRadius: 12, overflow: 'hidden' }}
    >
      <source src={src} type="video/mp4" />
    </video>
  )
}
