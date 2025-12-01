'use client'

import { useEffect, useRef } from 'react'

// IMPORTS CORRETOS (relativos)
import { categories } from '../data/categories'
import { thumbnails } from '../data/thumbnails'

type Category = (typeof categories)[number]
type GroupsMap = Record<string, Category[]>

// ÍCONES AUTOMÁTICOS POR GRUPO
function getIcon(cat: Category): string {
  switch (cat.group) {
    case 'asmr':
      return '🎧'
    case 'automotivo':
      return '🚗'
    case 'consertos':
      return '🛠️'
    case 'cuidado':
      return '💅'
    case 'diy':
      return '🏠'
    case 'fails':
      return '💥'
    case 'insetos':
      return '🐜'
    case 'ia':
      return '🤖'
    case 'crime':
      return '🚓'
    case 'limpeza':
      return '🧽'
    case 'luxo':
      return '💎'
    case 'gastronomia':
      return '🍳'
    case 'fronteira':
      return '🛂'
    case 'parkour':
      return '🤸'
    case 'pica-pau':
      return '🐦'
    case 'religiao':
      return '✝️'
    case 'saude':
      return '⚕️'
    default:
      return '📺'
  }
}

interface CategoryCarouselProps {
  groupName: string
  items: Category[]
}

function CategoryCarousel({ groupName, items }: CategoryCarouselProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    const interval = setInterval(() => {
      if (!container) return

      const maxLeft = container.scrollWidth - container.clientWidth
      const atEnd = container.scrollLeft >= maxLeft - 10

      container.scrollTo({
        left: atEnd ? 0 : container.scrollLeft + 260,
        behavior: 'smooth',
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const prettyName = groupName
    .replace('-', ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  const scroll = (dir: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    container.scrollBy({
      left: dir === 'left' ? -300 : 300,
      behavior: 'smooth',
    })
  }

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold capitalize text-zinc-50 flex items-center gap-2">
        <span className="inline-block h-6 w-1 rounded-full bg-blue-500" />
        {prettyName}
      </h3>

      <div className="relative group">
        {/* Botão esquerdo */}
        <button
          type="button"
          onClick={() => scroll('left')}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-20
            bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 shadow-lg rounded-full p-2
            opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          ❮
        </button>

        {/* Carrossel */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto gap-4 pb-3 flex-nowrap carousel-scroll
            scroll-smooth whitespace-nowrap relative"
        >
          <div className="pointer-events-none absolute left-0 top-0 w-14 h-full bg-gradient-to-r from-zinc-950 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 w-14 h-full bg-gradient-to-l from-zinc-950 to-transparent z-10" />

          {items.map((cat) => (
            <a
              key={cat.slug}
              href={`/categoria/${cat.slug}`}
              className="group/card w-[180px] sm:w-[220px] inline-block bg-white/5
                border border-zinc-700/60 rounded-2xl shadow-[0_18px_45px_rgba(0,0,0,0.55)]
                hover:shadow-[0_22px_60px_rgba(37,99,235,0.55)]
                hover:border-blue-500/70 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.03]
                flex-shrink-0 overflow-hidden backdrop-blur-xl"
            >
              <div className="relative h-32 w-full bg-zinc-900 overflow-hidden">
                <img
                  src={thumbnails[cat.slug]}
                  alt={cat.name}
                  className="h-full w-full object-cover transform group-hover/card:scale-105
                    transition-transform duration-500"
                  loading="lazy"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                <div className="absolute right-2 top-2 bg-black/70 text-xs text-zinc-50 rounded-full px-2 py-1 shadow">
                  {getIcon(cat)}
                </div>

                <div className="absolute left-3 bottom-2 text-[11px] uppercase tracking-wide text-zinc-200 bg-black/60 px-2 py-1 rounded-full">
                  Ver vídeos
                </div>
              </div>

              <div className="px-3 py-3">
                <h4 className="font-semibold text-zinc-50 truncate">
                  {cat.name}
                </h4>
                <p className="text-xs text-zinc-400 mt-0.5">
                  {cat.group.toUpperCase()}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* Botão direito */}
        <button
          type="button"
          onClick={() => scroll('right')}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-20
            bg-zinc-900/80 hover:bg-zinc-800 border border-zinc-700 shadow-lg rounded-full p-2
            opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          ❯
        </button>
      </div>
    </div>
  )
}

export default function Home() {
  const groups: GroupsMap = categories.reduce((acc, cat) => {
    if (!acc[cat.group]) acc[cat.group] = []
    acc[cat.group].push(cat)
    return acc
  }, {} as GroupsMap)

  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/80 backdrop-blur-2xl">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 shadow-lg text-xl">
              ▶
            </span>
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-bold tracking-wide">
                Monetização Cortes Studio
              </h1>
              <p className="text-xs text-zinc-400">
                Biblioteca de vídeos pronta para monetizar canais.
              </p>
            </div>
          </div>

          <div className="text-[11px] px-3 py-1 rounded-full border border-zinc-700 bg-zinc-900/70 text-zinc-300 uppercase tracking-[0.12em]">
            Tema escuro ativo
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-8 flex flex-col gap-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold">
            Categorias em destaque
          </h2>
          <p className="text-sm text-zinc-400 max-w-lg">
            Escolha um nicho, baixe os vídeos e comece a postar cortes prontos
            em poucos minutos.
          </p>
        </div>

        <div className="space-y-12">
          {Object.entries(groups).map(([groupName, items]) => (
            <CategoryCarousel
              key={groupName}
              groupName={groupName}
              items={items}
            />
          ))}
        </div>

        <div className="flex justify-center my-12"></div>
      </section>
    </main>
  )
}
