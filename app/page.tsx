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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-10">
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

        {/* BANNER 300X250 */}
        <div className="flex justify-center my-10">
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script type="text/javascript">
            {`
              atOptions = {
                key: 'ba483f356ee397e3d51e1beac74584c6',
                format: 'iframe',
                height: 250,
                width: 300,
                params: {}
              };
            `}
          </script>

          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type="text/javascript"
            src="//www.highperformanceformat.com/ba483f356ee397e3d51e1beac74584c6/invoke.js"
          ></script>
        </div>

        {/* NATIVE BANNER */}
        <div className="my-10 flex justify-center">
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            async
            data-cfasync="false"
            src="//pl28098779.effectivegatecpm.com/1c959dd5f34a21ba393399bea75687ad/invoke.js"
          ></script>

          <div id="container-1c959dd5f34a21ba393399bea75687ad"></div>
        </div>
      </section>
    </main>
  );
}
