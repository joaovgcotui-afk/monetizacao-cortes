import Link from 'next/link'

import { videos_asmr } from '@/data/videos/videos_asmr'
import { videos_automobilismo } from '@/data/videos/videos_automobilismo'
import { videos_caminhoes } from '@/data/videos/videos_caminhoes'

import type { VideoItem } from '@/data/videos/videos_asmr'

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

  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 uppercase">{slug}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <Link
            key={video.slug}
            href={`/download/${video.slug}`}
            className="bg-zinc-900 p-4 rounded-lg border border-zinc-700 hover:border-blue-500 transition text-center"
          >
            {video.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
