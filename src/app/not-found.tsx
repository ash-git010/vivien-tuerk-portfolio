import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { meta, notFound, ui } from "@/content/site";

export const metadata: Metadata = {
  title: notFound.title,
  robots: { index: false, follow: true },
};

/**
 * Mirrors the slim header/footer shell LegalPage uses. Not routed through
 * LegalPage itself: that takes a sections array, and this page is one block of
 * copy plus a link back.
 */
export default function NotFoundPage() {
  return (
    <>
      <header className="border-b border-hairline bg-cream px-gutter">
        <div className="mx-auto flex h-[60px] w-full max-w-[1120px] items-center justify-between lg:h-[68px]">
          <Link
            href="/"
            className="font-display text-[1.0625rem] tracking-[0.16em] text-ink lg:text-[1.125rem]"
          >
            {meta.name}
          </Link>
          <Link
            href="/"
            className="meta-text text-body underline-offset-4 transition-colors hover:text-gold-ink hover:underline"
          >
            {ui.backHome}
          </Link>
        </div>
      </header>

      <main className="flex-1 bg-cream px-gutter py-section-tight">
        <div className="mx-auto w-full max-w-[44rem]">
          <p className="label-caps text-meta">{notFound.code}</p>
          <h1 className="section-heading mt-4 text-ink">{notFound.title}</h1>
          <span aria-hidden="true" className="mt-6 block h-px w-16 bg-gold/60" />
          <p className="body-text mt-8 text-ink">{notFound.text}</p>
          <Link
            href="/"
            className="meta-text mt-10 inline-block border border-gold px-6 py-3 text-ink transition-colors hover:bg-gold-soft"
          >
            {ui.backHome}
          </Link>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
