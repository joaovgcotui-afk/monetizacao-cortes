import { categories } from "../../../data/categories";
import { videos } from "../../../data/videos";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoriaPage({ params }: PageProps) {
  const { slug } = await params;

  const categoria = categories.find((c) => c.slug === slug);

  if (!categoria) {
    return (
      <p className="p-6 text-center text-gray-600">Categoria não encontrada.</p>
    );
  }

  const videosDaCategoria = videos.filter((v) => v.category === categoria.slug);

  return (
    <main className="min-h-screen bg-gray-50">
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

        {videosDaCategoria.length === 0 && (
          <p className="text-gray-600 mt-4 bg-white p-4 rounded shadow">
            Ainda não há vídeos aqui.
          </p>
        )}

        {/* GRID DE VÍDEOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {videosDaCategoria.map((video) => (
            <div
              key={video.slug}
              className="bg-white border border-gray-200 shadow-sm hover:shadow-md transition-shadow rounded-lg p-4"
            >
              <div className="h-40 bg-gray-200 rounded flex items-center justify-center text-gray-500 text-xl mb-4">
                {video.title}
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
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
