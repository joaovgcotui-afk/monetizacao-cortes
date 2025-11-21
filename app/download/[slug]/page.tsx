// app/download/[slug]/page.tsx
import DownloadClient from "./DownloadClient";

export default function FakeDownloadPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // vídeo fake
  const fakeVideo = {
    title: `Vídeo Fake (${slug})`,
    thumbnail: "https://placehold.co/600x400?text=Thumbnail+Fake",
    downloadUrl:
      "https://file-examples.com/storage/fe07bb39d93a0386e4b22ba/2017/04/file_example_MP4_480_1_5MG.mp4",
  };

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 sm:px-6">
      <div className="max-w-3xl w-full py-8">
        <DownloadClient
          title={fakeVideo.title}
          downloadUrl={fakeVideo.downloadUrl}
          thumbnail={fakeVideo.thumbnail}
        />
      </div>
    </main>
  );
}
