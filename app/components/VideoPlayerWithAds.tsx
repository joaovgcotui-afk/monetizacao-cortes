'use client'

import { useEffect, useRef } from 'react'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

// plugins
import 'videojs-contrib-ads'
import 'videojs-ima'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    if (!videoRef.current) return

    if (!playerRef.current) {
      playerRef.current = videojs(videoRef.current, {
        controls: true,
        preload: 'auto',
        autoplay: false,
        fluid: true,
        poster,
      })

      // inicializar ads plugin
      playerRef.current.ads()

      // configurar VAST via IMA
      playerRef.current.ima({
        id: 'video-player',
        adTagUrl: 'https://vod.adcash.com/vast-test.xml', // TAG DE TESTE
        debug: true,
        adsManagerLoadedCallback: () => {
          console.log('IMA Ads Manager Loaded')
        },
      })
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = null
      }
    }
  }, [src, poster])

  return (
    <div data-vjs-player>
      <video
        ref={videoRef}
        className="video-js vjs-default-skin vjs-big-play-centered"
        playsInline
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
