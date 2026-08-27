import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

/**
 * Three static pages, so this is written out by hand rather than derived.
 * lastModified is the build time, which is also the only moment the content of
 * a fully static site can change.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/impressum`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${siteUrl}/datenschutz`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
