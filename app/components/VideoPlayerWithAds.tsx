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
    if (!adsLoaded || !imaLoaded) return

    // @ts-expect-error  – ignorar plugin sem tipos
    const player: any = videojs(videoRef.current, {
      controls: true,
      preload: 'auto',
      fluid: true,
      autoplay: false,
      poster,
    })

    // @ts-expect-error – ignorar plugin sem tipos
    player.ads()

    // @ts-expect-error – ignorar plugin sem tipos
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
      {/* Plugin ADS */}
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/videojs-contrib-ads/6.9.0/videojs-contrib-ads.min.js"
        strategy="afterInteractive"
        onLoad={() => setAdsLoaded(true)}
      />

      {/* Plugin IMA */}
      <Script
        src="https://cdn.jsdelivr.net/npm/videojs-ima@1.11.0/dist/videojs.ima.min.js"
        strategy="afterInteractive"
        onLoad={() => setImaLoaded(true)}
      />

      {/* SDK Google */}
      <Script
        src="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        strategy="afterInteractive"
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
