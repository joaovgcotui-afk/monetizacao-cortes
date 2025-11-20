export interface VideoItem {
  slug: string; // usado na rota /download/[slug]
  title: string; // nome exibido no card e página de download
  thumbnail: string; // imagem do card
  category: string; // slug da categoria
  downloadUrl: string; // link direto do Firebase Storage
}

// LISTA DE VÍDEOS
export const videos: VideoItem[] = [
  // EXEMPLO (vídeo ASMR já enviado por você)
  {
    slug: "asmr-1",
    title: "ASMR 1",
    thumbnail: "https://placehold.co/600x400?text=ASMR+1",
    category: "asmr",
    downloadUrl:
      "https://firebasestorage.googleapis.com/v0/b/monetizacao-cortes-studio.firebasestorage.app/o/ASMR1.mp4?alt=media&token=5389e7fb-61d1-4c09-962b-40fb2e532e37",
  },

  // Exemplo de estrutura correta para outros vídeos:
  /*
  {
    slug: "carros-esportivos-1",
    title: "Carros Esportivos 1",
    thumbnail: "https://placehold.co/600x400?text=Carros+Esportivos+1",
    category: "carros-esportivos",
    downloadUrl: "URL_DO_FIREBASE_AQUI",
  },
  {
    slug: "religiao-claudio-duarte-1",
    title: "Claudio Duarte - Pregação 1",
    thumbnail: "https://placehold.co/600x400?text=Claudio+Duarte+1",
    category: "religiao-claudio-duarte",
    downloadUrl: "URL_DO_FIREBASE_AQUI",
  },
  {
    slug: "saude-narrados-1",
    title: "Saúde Narrados 1",
    thumbnail: "https://placehold.co/600x400?text=Saude+1",
    category: "saude-narrados",
    downloadUrl: "URL_DO_FIREBASE_AQUI",
  },
  */
];
