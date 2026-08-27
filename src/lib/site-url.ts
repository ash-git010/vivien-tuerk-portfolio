import { meta } from "@/content/site";

/**
 * Absolute base for the canonical link and the OG image URL.
 *
 * Until the domain was decided this fell back to the deployment's own
 * VERCEL_URL so review builds stayed self-consistent. meta.url now carries the
 * real domain, so the fallback is retired.
 */
export const siteUrl = meta.url;
