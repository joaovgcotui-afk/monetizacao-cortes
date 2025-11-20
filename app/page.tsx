"use client";

import { useEffect, useRef } from "react";
import { categories } from "@/data/categories";
import { thumbnails } from "@/data/thumbnails";

type Category = (typeof categories)[number];
type GroupsMap = Record<string, Category[]>;

// ÍCONES AUTOMÁTICOS POR GRUPO
function getIcon(cat: Category): string {
  switch (cat.group) {
    case "asmr":
      return "🎧";
    case "automotivo":
      return "🚗";
    case "consertos":
      return "🛠️";
    case "cuidado":
      return "💅";
    case "diy":
      return "🏠";
    case "fails":
      return "💥";
    case "insetos":
      return "🐜";
    case "ia":
      return "🤖";
    case "crime":
      return "🚓";
    case "limpeza":
      return "🧽";
    case "luxo":
      return "💎";
    case "gastronomia":
      return "🍳";
    case "fronteira":
      return "🛂";
    case "parkour":
      return "🤸";
    case "pica-pau":
      return "🐦";
    case "religiao":
      return "✝️";
    case "saude":
      return "⚕️";
    default:
      return "📺";
  }
}

interface CategoryCarouselProps {
  groupName: string;
  items: Category[];
}

function CategoryCarousel({ groupName, items }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  // Auto-scroll
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      if (!container) return;

      const maxLeft = container.scrollWidth - container.clientWidth;
      const atEnd = container.scrollLeft >= maxLeft - 10;

      container.scrollTo({
        left: atEnd ? 0 : container.scrollLeft + 260,
        behavior: "smooth",
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prettyName = groupName
    .replace("-", " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());

  const scroll = (dir: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollBy({
      left: dir === "left" ? -300 : 300,
      behavior: "smooth",
    });
  };

  return (
    <div className="space-y-3">
      <h3 className="text-xl font-semibold capitalize">{prettyName}</h3>

      <div className="relative group">
        {/* Esquerda */}
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-white/80 hover:bg-white shadow-md rounded-full p-2
            opacity-0 group-hover:opacity-100 transition pointer-events-auto"
        >
          ❮
        </button>

        {/* CARROSSEL */}
        <div
          ref={scrollRef}
          className="
            flex overflow-x-auto gap-4 pb-3 flex-nowrap
            carousel-scroll scroll-smooth
            whitespace-nowrap relative pointer-events-auto
          "
        >
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 w-14 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 w-14 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {items.map((cat) => (
            <a
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="
                w-[220px] inline-block bg-white border border-gray-200
                rounded-xl shadow hover:shadow-xl transition-all duration-300
                hover:-translate-y-1 hover:scale-[1.03]
                flex-shrink-0 overflow-hidden
              "
            >
              {/* THUMBNAIL REAL DO FIREBASE */}
              <div className="relative h-32 w-full bg-gray-200">
                <img
                  src={thumbnails[cat.slug]}
                  alt={cat.name}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Ícone */}
                <div className="absolute right-2 top-2 bg-white/80 rounded-full px-2 py-1 text-xs shadow">
                  {getIcon(cat)}
                </div>
              </div>

              <div className="px-3 py-2">
                <h4 className="font-semibold text-gray-800 truncate">
                  {cat.name}
                </h4>
                <p className="text-sm text-gray-500">Ver vídeos</p>
              </div>
            </a>
          ))}
        </div>

        {/* Direita */}
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-white/80 hover:bg-white shadow-md rounded-full p-2
            opacity-0 group-hover:opacity-100 transition pointer-events-auto"
        >
          ❯
        </button>
      </div>
    </div>
  );
}

export default function Home() {
  const groups: GroupsMap = categories.reduce((acc, cat) => {
    if (!acc[cat.group]) acc[cat.group] = [];
    acc[cat.group].push(cat);
    return acc;
  }, {} as GroupsMap);

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
        <h2 className="text-2xl font-bold mb-8 text-gray-800">Categorias</h2>

        <div className="space-y-12">
          {Object.entries(groups).map(([groupName, items]) => (
            <CategoryCarousel
              key={groupName}
              groupName={groupName}
              items={items}
            />
          ))}
        </div>

        {/* ANÚNCIOS */}
        <div className="flex justify-center my-10">{/* ... */}</div>
      </section>
    </main>
  );
}
