import { videos_asmr } from '@/data/videos/videos_asmr'
import { videos_automobilismo } from '@/data/videos/videos_automobilismo'
import { videos_caminhoes } from '@/data/videos/videos_caminhoes'

import { buildFirebaseUrl } from '@/data/videos/urlBuilder'
import type { VideoItem } from '@/data/videos/videos_asmr'

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
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Vídeo não encontrado</h1>
      </div>
    )
  }

  const videoUrl = buildFirebaseUrl(video.category, video.fileName)

  return (
    <div className="p-10 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{video.title}</h1>

      <video
        src={videoUrl}
        controls
        className="w-full rounded-lg border border-gray-700 mb-6"
      />

      <a
        href={videoUrl}
        download
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg"
      >
        Baixar Vídeo
      </a>
    </div>
  )
}
