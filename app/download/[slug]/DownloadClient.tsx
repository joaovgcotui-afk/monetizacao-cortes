"use client";

interface DownloadClientProps {
  title: string;
  downloadUrl: string;
}

export default function DownloadClient({
  title,
  downloadUrl,
}: DownloadClientProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-2">
        Download: {title}
      </h1>

      <a
        href={downloadUrl}
        className="w-full inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium text-center"
      >
        Baixar agora
      </a>

      {/* ANÚNCIO */}
      <div className="mt-6 flex justify-center">
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          async
          data-cfasync="false"
          src="//pl28098779.effectivegatecpm.com/1c959dd5f342a21ba393399bea75687ad/invoke.js"
        ></script>

        <div id="container-1c959dd5f342a21ba393399bea75687ad" />
      </div>
    </div>
  );
}
