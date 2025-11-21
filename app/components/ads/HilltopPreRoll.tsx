"use client";

import { useThirdPartyScript } from "./useThirdPartyScript";

type HilltopPreRollProps = {
  /** ID/spot do Hilltop, vindo do painel. */
  spotId: string;
};

/**
 * Injeta o script do Hilltop para vídeo pre-roll.
 * O player real vai aparecer dentro do container definido no VideoPlayerWithAds.
 */
export function HilltopPreRoll({ spotId }: HilltopPreRollProps) {
  // normalmente o Hilltop manda um script único que identifica o adspot via data-attr ou config
  useThirdPartyScript({
    id: "hilltop-preroll-script",
    src: "https://js.hilltopads.com/YOUR_HILLTOP_VIDEO_TAG.js", // TODO: trocar pelo script oficial
    attrs: {
      "data-spot-id": spotId,
    },
  });

  return null;
}
