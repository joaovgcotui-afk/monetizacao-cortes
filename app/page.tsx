export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">
            Monetização Cortes Studio
          </h1>
        </div>
      </header>

      {/* CONTEÚDO */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Categorias</h2>
        <p className="text-gray-600 mb-6">
          Selecione uma categoria para começar:
        </p>

        {/* GRID DE CATEGORIAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            { name: "Podcast", slug: "podcast" },
            { name: "Motivacional", slug: "motivacional" },
            { name: "Clipes Virais", slug: "clipes-virais" },
            { name: "Entrevistas", slug: "entrevistas" },
          ].map((cat) => (
            <a
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="bg-white shadow rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 hover:border-gray-300"
            >
              <div className="h-24 bg-gray-100 rounded flex items-center justify-center text-gray-400 text-lg font-semibold mb-4">
                {cat.name[0]}
              </div>

              <h3 className="text-lg font-semibold text-gray-800">
                {cat.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Ver vídeos dessa categoria
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
