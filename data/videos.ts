// ================================
//  IMPORTAR TODAS AS CATEGORIAS
// ================================
import { videos as asmr } from "./videos/videos_asmr";
// import { videos as automobilismo } from "./videos/videos_automobilismo";
// import { videos as caminhoes } from "./videos/videos_caminhoes";
// import { videos as carrosEsportivos } from "./videos/videos_carros-esportivos";
// import { videos as carrosLuxuosos } from "./videos/videos_carros-luxuosos";
// import { videos as carrosVariados } from "./videos/videos_carros-variados";
// import { videos as cuidadoPessoal } from "./videos/videos_cuidado-pessoal";
// import { videos as diy } from "./videos/videos_diy";
// import { videos as falhas } from "./videos/videos_falhas-e-tombos";
// import { videos as insetos } from "./videos/videos_insetos";
// import { videos as iaVariados } from "./videos/videos_ia-variados";
// import { videos as iaGatinhos } from "./videos/videos_ia-gatinhos";


// ==================================================
//  ARRAY FINAL — TODOS OS VÍDEOS DO SITE
// ==================================================
export const videos = [
  ...asmr,

  // Quando você gerar as outras categorias, basta ir removendo os "//"
  // e adicionando os spreads abaixo:

  // ...automobilismo,
  // ...caminhoes,
  // ...carrosEsportivos,
  // ...carrosLuxuosos,
  // ...carrosVariados,
  // ...cuidadoPessoal,
  // ...diy,
  // ...falhas,
  // ...insetos,
  // ...iaVariados,
  // ...iaGatinhos,
];
