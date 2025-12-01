'use client'

import { useEffect, useRef } from 'react'

declare global {
  interface Window {
    google: any
  }
}

export default function VideoPlayerWithAds({
  src,
  poster,
}: {
  src: string
  poster?: string
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const adContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!videoRef.current || !adContainerRef.current) return

    // 👉 Carregar Script do Google IMA
    const imaScript = document.createElement('script')
    imaScript.src = 'https://imasdk.googleapis.com/js/sdkloader/ima3.js'
    imaScript.async = true
    imaScript.onload = startAds
    document.body.appendChild(imaScript)

    function startAds() {
      const videoElement = videoRef.current!
      const adContainer = adContainerRef.current!

      const adDisplayContainer = new window.google.ima.AdDisplayContainer(
        adContainer,
        videoElement,
      )

      const adsLoader = new window.google.ima.AdsLoader(adDisplayContainer)

      const adsRequest = new window.google.ima.AdsRequest()
      adsRequest.adTagUrl = 'https://vod.adcash.com/vast-test.xml'

      adsLoader.addEventListener(
        window.google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
        (e: any) => {
          const adsManager = e.getAdsManager(videoElement)

          videoElement.addEventListener('play', () => {
            adDisplayContainer.initialize()
          })

          try {
            adsManager.init(640, 360, window.google.ima.ViewMode.NORMAL)
            adsManager.start()
          } catch (err) {
            console.warn('Erro ao iniciar ads:', err)
            videoElement.play()
          }
        },
      )

      adsLoader.requestAds(adsRequest)
    }

    return () => {}
  }, [src, poster])

  return (
    <div className="relative w-full">
      {/* Container do anúncio */}
      <div
        ref={adContainerRef}
        className="absolute inset-0 z-20 bg-black/80 flex items-center justify-center"
      ></div>

      {/* Vídeo principal */}
      <video
        ref={videoRef}
        poster={poster}
        controls
        className="w-full rounded-2xl shadow-lg"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  )
}
