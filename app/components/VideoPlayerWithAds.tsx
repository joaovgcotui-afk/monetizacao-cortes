'use client'

import { useEffect, useRef, useState } from 'react'
import Script from 'next/script'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'

interface VideoPlayerWithAdsProps {
  src: string
  poster?: string
}

export function VideoPlayerWithAds({ src, poster }: VideoPlayerWithAdsProps) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    if (!videoRef.current || !ready) return

    // Os plugins DO CDN serão adicionados ao window.videojs automaticamente
    const player = (window as any).videojs(videoRef.current, {
      controls: true,
      preload: 'auto',
      fluid: true,
      autoplay: false,
      poster,
    })

    // Inicializar Sistema de Anúncios
    if (player.ads) {
      player.ads()
    }

    // Inicializar IMA / VAST
    if (player.ima) {
      player.ima({
        adTagUrl: 'https://vod.adcash.com/vast-test.xml',
        debug: true,
      })
    }

    return () => {
      player.dispose()
    }
  }, [ready, src, poster])

  return (
    <>
      {/* SDK Google IMA */}
      <Script
        src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        strategy="afterInteractive"
      />

      {/* videojs-contrib-ads */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/6.9.0/videojs-contrib-ads.min.js"
        strategy="afterInteractive"
      />

      {/* videojs-ima */}
      <Script
        src="https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.min.js"
        strategy="afterInteractive"
        onLoad={() => setReady(true)}
      />

      {/* CSS do IMA */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.css"
      />

      <div data-vjs-player>
        <video
          ref={videoRef}
          className="video-js vjs-default-skin vjs-big-play-centered"
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </>
  )
}
