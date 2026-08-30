import type { MetadataRoute } from "next";

import { siteUrl } from "@/lib/site-url";

/**
 * Only the landing page. /impressum and /datenschutz both set
 * robots: { index: false }, and listing a noindex URL in a submitted sitemap
 * just earns an "Excluded by noindex tag" report in Search Console. They stay
 * reachable through the footer, which is all they need.
 *
 * lastModified is the build time, which is also the only moment the content of
 * a fully static site can change.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
