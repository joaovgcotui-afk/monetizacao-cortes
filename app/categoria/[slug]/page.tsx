import Link from 'next/link'
import { PlayCircle, Truck, Car, Waves, type LucideIcon } from 'lucide-react'

// IMPORTS RELATIVOS CORRETOS
import { videos_asmr } from '../../../data/videos/videos_asmr'
import { videos_automobilismo } from '../../../data/videos/videos_automobilismo'
import { videos_caminhoes } from '../../../data/videos/videos_caminhoes'
import type { VideoItem } from '../../../data/videos/videos_asmr'

export const dynamic = 'force-static'

export default async function CategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  let videos: VideoItem[] = []
  if (slug === 'asmr') videos = videos_asmr
  if (slug === 'automobilismo') videos = videos_automobilismo
  if (slug === 'caminhoes') videos = videos_caminhoes

  const categoryIcons: Record<string, LucideIcon> = {
    asmr: Waves,
    automobilismo: Car,
    caminhoes: Truck,
  }

  const Icon = categoryIcons[slug] || PlayCircle

  const prettyName = slug
    .replace('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-3">
          <Icon className="w-8 h-8 text-blue-500" />
          <h1 className="text-2xl font-bold tracking-wide">{prettyName}</h1>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-7">
          {videos.map((video) => (
            <Link
              key={video.slug}
              href={`/download/${video.slug}`}
              className="group relative p-5 rounded-2xl bg-white/5 backdrop-blur-xl
                border border-zinc-700/60 shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                hover:shadow-[0_22px_60px_rgba(37,99,235,0.55)]
                hover:border-blue-500/70 transition-all duration-300
                hover:-translate-y-2 hover:scale-[1.03]
                flex flex-col items-center gap-4"
            >
              <Icon className="w-10 h-10 text-blue-500 drop-shadow-md" />
              <span className="font-semibold text-center text-sm md:text-base tracking-wide">
                {video.title}
              </span>
              <span className="text-xs px-3 py-1 rounded-full bg-blue-900/70 text-blue-300 shadow-sm">
                {slug.toUpperCase()}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
