import Link from "next/link";

import { footer, meta } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep px-gutter py-10">
      <div className="mx-auto flex w-full max-w-[1120px] flex-col gap-6 border-t border-gold/20 pt-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-display text-[1rem] tracking-[0.16em] text-cream">
            {meta.name}
          </p>
          <p className="meta-text mt-2 text-cream/45">{footer.tagline}</p>
        </div>

        <nav aria-label="Rechtliches" className="flex gap-8">
          {footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="meta-text text-cream/60 underline-offset-4 transition-colors duration-200 hover:text-gold-light hover:underline"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
