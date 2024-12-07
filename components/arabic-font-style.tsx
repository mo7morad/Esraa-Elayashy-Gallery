'use client';

import { Noto_Sans_Arabic } from "next/font/google";

const arabic = Noto_Sans_Arabic({ subsets: ["arabic"] });

export function ArabicFontStyle() {
  return (
    <style jsx global>{`
      .font-arabic {
        font-family: ${arabic.style.fontFamily};
      }
    `}</style>
  );
}
