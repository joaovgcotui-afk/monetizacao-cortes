// app/download/[slug]/page.tsx
import { videos } from "@/data/videos";
import DownloadClient from "./DownloadClient";

interface PageProps {
  params: { slug: string };
}

export default function DownloadPage({ params }: PageProps) {
  const { slug } = params;

  const video = videos.find((v) => v.slug === slug);

  if (!video) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-600 text-lg">Vídeo não encontrado.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-3xl w-full py-8">
        <DownloadClient
          title={video.title}
          downloadUrl={video.downloadUrl}
          thumbnail={video.thumbnail}
        />
      </div>
    </main>
  );
}
