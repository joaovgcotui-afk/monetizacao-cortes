"use client";

import { useEffect, useRef, useState } from "react";
import { categories } from "@/data/categories";
import { thumbnails } from "@/data/thumbnails";

// ---------------------------------------------
// ICONES POR GRUPO (PRÉ-CALCULADOS)
// ---------------------------------------------
const ICONS: Record<string, string> = {
  asmr: "🎧",
  automotivo: "🚗",
  consertos: "🛠️",
  cuidado: "💅",
  diy: "🏠",
  fails: "💥",
  insetos: "🐜",
  ia: "🤖",
  crime: "🚓",
  limpeza: "🧽",
  luxo: "💎",
  gastronomia: "🍳",
  fronteira: "🛂",
  parkour: "🤸",
  "pica-pau": "🐦",
  religiao: "✝️",
  saude: "⚕️",
};

function getIcon(group: string) {
  return ICONS[group] ?? "📺";
}

// ---------------------------------------------
// AGRUPADOR DE CATEGORIAS
// ---------------------------------------------
function groupCategories(list: typeof categories) {
  return list.reduce((acc: Record<string, typeof categories>, cat) => {
    if (!acc[cat.group]) acc[cat.group] = [];
    acc[cat.group].push(cat);
    return acc;
  }, {});
}

const GROUPED = groupCategories(categories);

// ---------------------------------------------
// SKELETON LOADING
// ---------------------------------------------
function SkeletonCard() {
  return (
    <div className="w-[220px] h-[180px] bg-gray-200 rounded-2xl animate-skeleton"></div>
  );
}

// ---------------------------------------------
// CATEGORY CAROUSEL
// ---------------------------------------------
type Category = (typeof categories)[number];

function CategoryCarousel({
  groupName,
  items,
}: {
  groupName: string;
  items: Category[];
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [loading, setLoading] = useState(true);

  // Simulação leve de loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const interval = setInterval(() => {
      if (!el) return;

      const maxLeft = el.scrollWidth - el.clientWidth;
      const atEnd = el.scrollLeft >= maxLeft - 10;

      el.scrollTo({
        left: atEnd ? 0 : el.scrollLeft + 260,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Scroll manual
  const move = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    el.scrollBy({
      left: dir === "left" ? -260 : 260,
      behavior: "smooth",
    });
  };

  const prettyName = groupName
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  return (
    <div className="space-y-3 fade-in">
      <h3 className="text-xl font-bold capitalize">{prettyName}</h3>

      <div className="relative group">
        {/* Botão esquerda */}
        <button
          aria-label="Scroll left"
          onClick={() => move("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
        >
          ❮
        </button>

        {/* CARROSSEL */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-3 flex-nowrap scroll-smooth whitespace-nowrap"
        >
          {loading
            ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />)
            : items.map((cat) => (
                <a
                  key={cat.slug}
                  href={`/categoria/${cat.slug}`}
                  className="
                    w-[220px] bg-white border border-gray-200 rounded-2xl shadow
                    hover:shadow-xl transition-all duration-500
                    hover:scale-[1.05] hover:-translate-y-1
                    flex-shrink-0 overflow-hidden
                  "
                >
                  <div className="relative h-32 w-full bg-gray-100">
                    <img
                      src={thumbnails[cat.slug]}
                      alt={`Categoria ${cat.name}`}
                      className="w-full h-full object-cover transition duration-500"
                      loading="lazy"
                      decoding="async"
                    />

                    <div className="absolute right-2 top-2 bg-white/80 rounded-full px-2 py-1 text-xs shadow">
                      {getIcon(cat.group)}
                    </div>
                  </div>

                  <div className="px-3 py-3 space-y-1">
                    <h4 className="font-semibold text-gray-800 truncate">
                      {cat.name}
                    </h4>
                    <p className="text-sm text-gray-500">Ver vídeos</p>
                  </div>
                </a>
              ))}
        </div>

        {/* Botão direita */}
        <button
          aria-label="Scroll right"
          onClick={() => move("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
          bg-white shadow-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

// ------------------------------------------------
// HOME PAGE
// ------------------------------------------------
export default function Home() {
  // Restaurar posição do scroll
  useEffect(() => {
    const saved = sessionStorage.getItem("scrollHome");
    if (saved) {
      window.scrollTo(0, Number(saved));
    }
  }, []);

  // Salvar posição do scroll
  useEffect(() => {
    const save = () =>
      sessionStorage.setItem("scrollHome", String(window.scrollY));
    window.addEventListener("scroll", save);
    return () => window.removeEventListener("scroll", save);
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 fade-in">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-gray-800">
            Monetização Cortes Studio
          </h1>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10 space-y-12">
        <h2 className="text-2xl font-bold text-gray-800">Categorias</h2>

        {Object.entries(GROUPED).map(([group, cats]) => (
          <CategoryCarousel key={group} groupName={group} items={cats} />
        ))}
      </section>
    </main>
  );
}
