"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function DesbloquearPage() {
  const [count, setCount] = useState(10); // tempo para liberar o botão final

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => (c > 0 ? c - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 p-6">
      <div
        className="max-w-lg w-full bg-white/90 backdrop-blur shadow-2xl rounded-2xl p-8
                   border border-gray-200 animate-fadeIn"
      >
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-4">
          🚫 AdBlock Detectado
        </h1>

        <p className="text-gray-600 text-center mb-6">
          Nosso sistema detectou que um bloqueador de anúncios está ativo.
          <br />
          Para continuar e liberar os downloads, siga os passos abaixo:
        </p>

        {/* 🟡 ALERTA */}
        <div className="bg-yellow-100 border border-yellow-300 text-yellow-900 px-4 py-3 rounded-lg mb-6 text-sm">
          <strong className="font-semibold">Por que isso é necessário?</strong>
          <br />
          Os anúncios mantêm o projeto vivo. Sem eles não conseguimos
          disponibilizar cortes gratuitos. 🙌
        </div>

        {/* 📘 TUTORIAL */}
        <div className="space-y-4 mb-8">
          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-800 mb-1">
              1. Desative o AdBlock
            </h2>
            <p className="text-gray-600 text-sm">
              Clique no ícone do adblock (🔴, 🛡 ou 🚫), depois escolha //
              eslint-disable-next-line react/no-unescaped-entities
              <strong>Não bloquear neste site</strong>
            </p>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-800 mb-1">
              2. Recarregue a página
            </h2>
            <p className="text-gray-600 text-sm">
              Após desativar, apenas recarregue o site para liberar o conteúdo.
            </p>
          </div>

          <div className="p-4 rounded-lg border border-gray-200 bg-gray-50">
            <h2 className="font-semibold text-gray-800 mb-1">
              3. Se o bloqueio persistir
            </h2>
            <p className="text-gray-600 text-sm">
              Certifique-se de não estar usando Chrome com “Proteção avançada”
              ou Brave Shield ativo.
            </p>
          </div>
        </div>

        {/* ⏳ COUNTDOWN */}
        <div className="text-center text-gray-700 mb-4">
          <p>Acesso será liberado em:</p>
          <span className="text-4xl font-extrabold text-gray-900">
            {count}s
          </span>
        </div>

        {/* 🔓 BOTÃO PRINCIPAL */}
        <div className="text-center">
          <Link
            href="/"
            className={`w-full block text-center px-6 py-3 rounded-lg font-semibold transition
              ${
                count === 0
                  ? "bg-green-600 hover:bg-green-700 text-white shadow-lg shadow-green-300"
                  : "bg-gray-400 text-gray-200 cursor-not-allowed"
              }
            `}
          >
            {count === 0 ? "Tudo pronto — voltar ao site!" : "Aguardando..."}
          </Link>
        </div>

        {/* 🔄 botão auxiliar */}
        <div className="text-center mt-4">
          <button
            onClick={() => window.location.reload()}
            className="text-blue-600 hover:text-blue-800 text-sm underline"
          >
            Já desativei — Recarregar agora
          </button>
        </div>
      </div>

      {/* 🔥 CSS animado (inline) */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.7s ease-out forwards;
        }
      `}</style>
    </main>
  );
}
