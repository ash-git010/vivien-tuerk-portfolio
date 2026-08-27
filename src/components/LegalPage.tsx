import Link from "next/link";

import { SiteFooter } from "@/components/SiteFooter";
import { meta, ui } from "@/content/site";

type LegalDoc = {
  readonly title: string;
  readonly intro?: string;
  readonly sections: readonly {
    readonly title: string;
    readonly body: readonly string[];
    /** Address-shaped block: set at list leading, not paragraph leading. */
    readonly tight?: boolean;
  }[];
};

/**
 * Legal pages get their own slim header rather than SiteHeader: the anchor nav
 * points at sections that only exist on the landing page.
 */
export function LegalPage({ doc }: { doc: LegalDoc }) {
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
          <h1 className="section-heading text-ink">{doc.title}</h1>
          <span
            aria-hidden="true"
            className="mt-6 block h-px w-16 bg-gold/60"
          />

          {doc.intro ? (
            <p className="body-text mt-8 text-ink">{doc.intro}</p>
          ) : null}

          <div className="mt-12 space-y-10">
            {doc.sections.map((section) => (
              <section key={section.title}>
                <h2 className="label-caps text-meta">{section.title}</h2>
                <div className={section.tight ? "mt-4 space-y-1" : "mt-4 space-y-[1.15em]"}>
                  {section.body.map((line) => (
                    <p key={line.slice(0, 32)} className="body-text">
                      {line}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
