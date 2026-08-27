"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

import { hero, meta, nav, ui } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Slim sticky header. It fades in at 1.4s, once the hero entrance has finished,
 * so it never competes with that sequence. Transparent while over the hero,
 * then cream with a bottom hairline once scrolled past it.
 */
export function SiteHeader() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight - 120);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: reduce ? 0.3 : 0.5,
          delay: reduce ? 0 : 1.4,
          ease: EASE,
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-hairline bg-cream"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[60px] w-full max-w-[1120px] items-center justify-between px-gutter lg:h-[68px]">
          <a
            href="#hero"
            className={`font-display text-[1.0625rem] tracking-[0.16em] transition-colors duration-300 lg:text-[1.125rem] ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            {meta.name}
          </a>

          <nav
            aria-label={ui.navLabel}
            className="hidden items-center gap-8 lg:flex"
          >
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-[0.875rem] tracking-[0.04em] transition-colors duration-200 ${
                  scrolled
                    ? "text-body hover:text-gold-ink"
                    : "text-cream/75 hover:text-gold-light"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href={hero.primaryCta.href}
              className={`btn ${scrolled ? "btn-ghost-light" : "btn-ghost-dark"} px-5 py-3.5`}
            >
              {hero.primaryCta.label}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            className={`label-caps transition-colors duration-300 lg:hidden ${
              scrolled ? "text-ink" : "text-cream"
            }`}
          >
            {ui.menuOpen}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0.15 : 0.28, ease: EASE }}
            className="fixed inset-0 z-[60] bg-navy-deep lg:hidden"
          >
            <div className="flex h-[60px] items-center justify-end px-gutter">
              <button
                type="button"
                autoFocus
                onClick={() => setMenuOpen(false)}
                className="label-caps text-gold-light"
              >
                {ui.menuClose}
              </button>
            </div>

            <nav
              aria-label={ui.navLabel}
              className="flex flex-col gap-7 px-gutter pt-12"
            >
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-[2rem] leading-none text-cream"
                >
                  {item.label}
                </a>
              ))}

              <a
                href={hero.primaryCta.href}
                onClick={() => setMenuOpen(false)}
                className="btn btn-primary mt-4 self-start"
              >
                {hero.primaryCta.label}
              </a>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
