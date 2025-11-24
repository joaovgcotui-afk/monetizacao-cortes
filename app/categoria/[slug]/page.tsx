// app/categoria/[slug]/page.tsx
"use client";

import Link from "next/link";
import { videos } from "@/data/videos";

export default function CategoriaPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  // Filtrar vídeos reais pela categoria
  const filtered = videos.filter((v) => v.category === slug);

  return (
    <main className="min-h-screen bg-gray-50">
      {/* HEADER */}
      <header className="border-b bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700">
            ← Voltar
          </Link>

          <h1 className="text-xl font-bold text-gray-900 capitalize">
            Categoria: {slug}
          </h1>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8">
        {/* Se não tiver vídeos */}
        {filtered.length === 0 && (
          <p className="text-gray-600">
            Nenhum vídeo encontrado para esta categoria.
          </p>
        )}

        {/* GRID REAL */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((v) => (
            <div
              key={v.slug}
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition"
            >
              <div className="relative h-40 bg-gray-200">
                <img
                  src={v.thumbnail}
                  alt={v.title}
                  className="w-full h-full object-cover"
                />
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
