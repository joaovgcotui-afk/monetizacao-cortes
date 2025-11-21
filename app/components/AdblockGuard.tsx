// app/components/AdblockGuard.tsx
"use client";

import { useAdblockDetector } from "../hooks/useAdblockDetector";

interface AdblockGuardProps {
  mode?: "banner" | "wall";
}

export function AdblockGuard({ mode = "banner" }: AdblockGuardProps) {
  const { isChecking, isAdblock } = useAdblockDetector();

  if (isChecking || !isAdblock) return null;

  if (mode === "banner") {
    return (
      <div className="mt-3 rounded-lg border border-amber-300 bg-amber-50 text-amber-900 text-xs sm:text-sm px-3 py-2">
        <p className="font-semibold mb-1">
          Detectamos um bloqueador de anúncios 👀
        </p>
        <p>
          Esse projeto é mantido pelos anúncios. Considere desativar o AdBlock
          para <span className="font-semibold">monetizacaocortes.online</span>{" "}
          ou adicionar o site à lista de exceções. Assim a gente consegue
          continuar liberando cortes prontos de graça. 🙏
        </p>
      </div>
    );
  }

  // modo "wall" (se quiser endurecer depois)
  return (
    <div className="fixed inset-0 z-[9999] bg-black/70 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl p-5 space-y-3 text-center shadow-xl">
        <h2 className="text-lg font-bold text-gray-900">
          Por favor, desative o AdBlock 🙏
        </h2>
        <p className="text-sm text-gray-600">
          Nós usamos anúncios para manter o projeto vivo. Para continuar, por
          favor desative o bloqueador de anúncios para este site e recarregue a
          página.
        </p>
        <p className="text-xs text-gray-400">
          Depois de desativar, pressione <strong>F5</strong> ou recarregue a
          página.
        </p>
      </div>
    </div>
  );
}
