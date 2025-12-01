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
  const [adsLoaded, setAdsLoaded] = useState(false)
  const [imaLoaded, setImaLoaded] = useState(false)

  useEffect(() => {
    if (!videoRef.current) return
    if (!adsLoaded || !imaLoaded) return // ESPERA AMBOS OS PLUGINS CARREGAREM

    const player = videojs(videoRef.current, {
      controls: true,
      preload: 'auto',
      fluid: true,
      autoplay: false,
      poster,
    })

    // Inicializa plugins
    player.ads() // agora existe
    player.ima({
      adTagUrl: 'https://vod.adcash.com/vast-test.xml',
      debug: true,
    })

    return () => {
      player.dispose()
    }
  }, [adsLoaded, imaLoaded, src, poster])

  return (
    <>
      {/* PLUGIN DE ADS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/6.9.0/videojs-contrib-ads.min.js"
        strategy="afterInteractive"
        onLoad={() => setAdsLoaded(true)}
      />

      {/* PLUGIN DE IMA + SDK DO GOOGLE */}
      <Script
        src="https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.min.js"
        strategy="afterInteractive"
        onLoad={() => setImaLoaded(true)}
      />

      <Script
        src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        strategy="afterInteractive"
      />

      {/* CSS DO IMA */}
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
