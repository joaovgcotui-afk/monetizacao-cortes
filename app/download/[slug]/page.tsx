import { videos_asmr } from '@/data/videos/videos_asmr'
import { videos_automobilismo } from '@/data/videos/videos_automobilismo'
import { videos_caminhoes } from '@/data/videos/videos_caminhoes'

import { buildFirebaseUrl } from '@/data/videos/urlBuilder'
import type { VideoItem } from '@/data/videos/videos_asmr'

import { Waves, Car, Truck, Download } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

import FluidPlayer from '@/app/components/FluidPlayer'

export const dynamic = 'force-static'

export default async function DownloadPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const allVideos: VideoItem[] = [
    ...videos_asmr,
    ...videos_automobilismo,
    ...videos_caminhoes,
  ]

  const video = allVideos.find((v) => v.slug === slug)

  if (!video) {
    return (
      <main className="text-center text-zinc-200 p-10 bg-zinc-950 min-h-screen">
        <h1 className="text-2xl font-bold">Vídeo não encontrado</h1>
      </main>
    )
  }

  const videoUrl = buildFirebaseUrl(video.category, video.fileName)

  const categoryIcons: Record<string, LucideIcon> = {
    asmr: Waves,
    automobilismo: Car,
    caminhoes: Truck,
  }

  const Icon = categoryIcons[video.category] || Waves
  const prettyCategory = video.category.replace('-', ' ').toUpperCase()

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <Icon className="w-8 h-8 text-blue-500" />
          <h1 className="text-xl font-bold tracking-wide truncate">
            {video.title}
          </h1>
        </div>
      </header>

      <section className="max-w-4xl mx-auto px-6 py-10">
        <div
          className="
            bg-white/5 backdrop-blur-2xl rounded-3xl
            border border-zinc-700/60 shadow-[0_10px_40px_rgba(0,0,0,0.6)]
            p-8 relative overflow-hidden
          "
        >
          {/* TÍTULO */}
          <div className="flex items-center gap-4 mb-6">
            <Icon className="w-12 h-12 text-blue-500 drop-shadow-md" />
            <div>
              <h2 className="text-xl font-semibold">{video.title}</h2>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-900/70 text-blue-300 shadow-sm">
                {prettyCategory}
              </span>
            </div>
          </div>

          {/* PLAYER FLUID + VAST */}
          <FluidPlayer src={videoUrl} poster="" />

          {/* BOTÃO DE DOWNLOAD */}
          <a
            href={videoUrl}
            download={`${video.slug}.mp4`}
            target="_blank"
            rel="noopener noreferrer"
            className="
              flex items-center justify-center gap-2 mt-6
              bg-gradient-to-r from-blue-600 to-purple-600
              hover:from-blue-500 hover:to-purple-500
              text-white font-semibold px-6 py-3 rounded-xl
              shadow-lg hover:shadow-xl transition-all duration-300
            "
          >
            <Download className="w-5 h-5" />
            Baixar vídeo
          </a>
        </div>
      </section>
    </main>
  )
}
