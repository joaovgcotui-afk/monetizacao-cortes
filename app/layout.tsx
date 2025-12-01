import type { Metadata } from 'next'
import './globals.css'
import { AdsClient } from './components/AdsClient'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Monetização Cortes Studio',
  description: 'Cortes prontos para ganhar dinheiro',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link
          href="https://vjs.zencdn.net/8.3.0/video-js.css"
          rel="stylesheet"
        />
        <link
          href="https://imasdk.googleapis.com/js/sdkloader/ima3.js"
          rel="preload"
          as="script"
        />
        {/* Monetag Site Verification */}
        <meta name="monetag" content="743381a3c558995ad993355162fc7956" />
      </head>

      <body className="bg-gray-50">
        <AdsClient />
        {children}
      </body>
    </html>
  )
}
