import DownloadClient from "./DownloadClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  return <DownloadClient slug={slug} />;
}
