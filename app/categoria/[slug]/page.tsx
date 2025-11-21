import Image from "next/image";
import Link from "next/link";
import { categories } from "@/data/categories";
import { videos } from "@/data/videos";
import { thumbnails } from "@/data/thumbnails";

interface PageProps {
  params: { slug: string };
}

export default function CategoriaPage({ params }: PageProps) {
  const { slug } = params;

  const categoria = categories.find((c) => c.slug === slug);

  if (!categoria) {
    return (
      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="p-6 text-center text-gray-600 text-lg">
          Categoria não encontrada.
        </p>
      </main>
    );
  }

  const videosDaCategoria = videos.filter((v) => v.category === categoria.slug);

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Voltar para categorias
          </Link>

          <h1 className="text-xl font-bold text-gray-900">{categoria.name}</h1>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8">
        {videosDaCategoria.length === 0 ? (
          <p className="text-gray-600">
            Ainda não há vídeos cadastrados para esta categoria.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videosDaCategoria.map((video) => {
              const thumb = thumbnails[video.category] ?? video.thumbnail;

              return (
                <div
                  key={video.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col"
                >
                  <div className="mb-4 w-full h-40 relative bg-gray-100">
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

                  <div className="px-4 pb-4 flex flex-col flex-1">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                      {video.title}
                    </h3>

                    <p className="text-xs text-gray-500 mb-3">
                      Clique para assistir com anúncio e baixar o arquivo.
                    </p>

                    <Link
                      href={`/download/${video.slug}`}
                      className="mt-auto inline-flex justify-center items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors"
                    >
                      Assistir & baixar
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </section>
    </main>
  );
}
