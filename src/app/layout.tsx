import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { meta } from "@/content/site";
import { siteUrl } from "@/lib/site-url";
import "./globals.css";

/**
 * Both faces are downloaded at build time by next/font and served from our own
 * origin. No visitor IP ever reaches Google. Never replace this with a
 * <link> to fonts.googleapis.com: the Datenschutzerklaerung depends on it.
 *
 * latin-ext is required for ue / ae / oe.
 */
const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin", "latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: meta.title,
    template: `%s · ${meta.name}`,
  },
  description: meta.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: meta.locale,
    url: "/",
    siteName: meta.name,
    title: meta.title,
    description: meta.description,
  },
  twitter: {
    card: "summary_large_image",
    title: meta.title,
    description: meta.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A1424",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">{children}</body>
    </html>
  );
}
