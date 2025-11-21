// app/categoria/[slug]/page.tsx
import Link from "next/link";

export default function FakeCategoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // vídeos fake para teste
  const fakeVideos = Array.from({ length: 6 }).map((_, i) => ({
    slug: `fake-video-${i + 1}`,
    title: `Vídeo Fake ${i + 1}`,
    thumbnail: `https://placehold.co/600x400?text=Fake+${i + 1}`,
  }));

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Voltar
          </Link>

          <h1 className="text-xl font-bold text-gray-900">
            Categoria Fake: {slug}
          </h1>
        </div>
      </header>

      {/* GRID FALSA DE VÍDEOS */}
      <section className="max-w-6xl mx-auto px-6 py-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {fakeVideos.map((v) => (
            <div
              key={v.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <div className="relative h-40 bg-gray-200">
                <img src={v.thumbnail} className="w-full h-full object-cover" />
              </div>

              <div className="p-4 space-y-2">
                <h3 className="font-bold">{v.title}</h3>

                <Link
                  href={`/download/${v.slug}`}
                  className="inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors w-full"
                >
                  Assistir & Baixar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
