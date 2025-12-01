// TIPAGEM
import type { VideoItem } from "./videos/videos_asmr";

// IMPORTAR TODAS AS CATEGORIAS
import { videos_asmr } from "./videos/videos_asmr";
import { videos_automobilismo } from "./videos/videos_automobilismo";
import { videos_caminhoes } from "./videos/videos_caminhoes";

// UNIFICAR
export const videos: VideoItem[] = [
  ...videos_asmr,
  ...videos_automobilismo,
  ...videos_caminhoes,
];
