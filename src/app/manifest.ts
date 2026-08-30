import type { MetadataRoute } from "next";

import { meta } from "@/content/site";

/**
 * Served at /manifest.webmanifest. The 192 and 512 icons stay in public/
 * rather than moving into app/: they are referenced by URL from here, not
 * picked up by the file-based metadata convention the way icon.svg,
 * apple-icon.png and favicon.ico are.
 *
 * theme_color matches viewport.themeColor in layout.tsx. Keep them in step.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: meta.title,
    short_name: meta.name,
    description: meta.description,
    lang: "de",
    start_url: "/",
    display: "standalone",
    background_color: "#FBF8F3",
    theme_color: "#0A1424",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
