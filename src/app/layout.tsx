import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import { contact, hero, images, meta } from "@/content/site";
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

/**
 * schema.org ProfessionalService with Vivien embedded as the Person behind it.
 *
 * Every value is read from site.ts. Do not add a claim here that is not
 * already true there: no aggregateRating, no review, no foundingDate, no
 * priceRange. Google treats invented review markup as a manual-action offence
 * and this site has no reviews to cite.
 */
function structuredData() {
  const person = {
    "@type": "Person",
    "@id": `${siteUrl}/#vivien`,
    name: meta.name,
    jobTitle: hero.eyebrow,
    image: `${siteUrl}${images.portrait.src}`,
    sameAs: [contact.linkedinHref],
  };

  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${siteUrl}/#business`,
    name: meta.name,
    url: siteUrl,
    description: meta.description,
    image: `${siteUrl}${images.portrait.src}`,
    telephone: contact.phoneE164,
    email: contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.street,
      postalCode: contact.postalCode,
      addressLocality: contact.locality,
      addressCountry: "DE",
    },
    areaServed: {
      "@type": "Place",
      name: contact.region,
    },
    founder: person,
  };
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${cormorant.variable} ${jost.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream">
        {children}
        <script
          type="application/ld+json"
          // Static, author-controlled content. The escape guards against a
          // literal </script> ever appearing inside a copy string.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData()).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
