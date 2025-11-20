import Image from "next/image";
import { categories } from "../../../data/categories";
import { videos } from "../../../data/videos";
import { thumbnails } from "../../../data/thumbnails";
import AdsClient from "../../components/AdsClient";

interface PageProps {
  params: { slug: string };
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = params;

  const categoria = categories.find((c) => c.slug === slug);

  if (!categoria) {
    return (
      <main className="min-h-screen bg-gray-50">
        <p className="p-6 text-center text-gray-600 text-lg">
          Categoria não encontrada.
        </p>
      </main>
    );
  }

  const videosDaCategoria = videos.filter((v) => v.category === categoria.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* ANÚNCIOS */}
      <AdsClient />

      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <h1 className="text-xl font-bold text-gray-800">{categoria.name}</h1>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Vídeos desta categoria:
        </h2>

        {/* Banner logo abaixo do título */}
        <AdsClient />

        {videosDaCategoria.length === 0 && (
          <p className="text-gray-600 mt-4 bg-white p-4 rounded shadow">
            Ainda não há vídeos aqui.
          </p>
        )}

        {/* GRID DE VÍDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {videosDaCategoria.map((video) => {
            const thumb = thumbnails[categoria.slug];

            return (
              <div
                key={video.slug}
                className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-4"
              >
                {/* card thumbnail */}
                <div className="mb-4 w-full h-40 relative rounded overflow-hidden bg-gray-100">
                  {thumb ? (
                    <Image
                      src={thumb}
                      alt={video.title}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-500 text-lg">
                      Sem thumbnail
                    </div>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {video.title}
                </h3>

                <a
                  href={`/download/${video.slug}`}
                  className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium"
                >
                  Download
                </a>

                {/* Banner no final do card */}
                <div className="mt-4">
                  <AdsClient />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
