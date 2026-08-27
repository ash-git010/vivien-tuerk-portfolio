"use client";

import { motion, useReducedMotion } from "motion/react";

import { ArchPortrait } from "@/components/ArchPortrait";
import { Divider } from "@/components/Divider";
import { hero } from "@/content/site";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * One orchestrated load sequence, finishing at 1.55s: the hairline frame draws
 * itself, then the portrait, name, role line, tagline, subline and calls to
 * action fade up in turn. Nothing scales, nothing springs, nothing repeats.
 */
export function Hero() {
  const reduce = useReducedMotion();

  const fade = (delay: number) => ({
    initial: { opacity: 0, y: reduce ? 0 : 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: reduce ? 0.3 : 0.55,
      delay: reduce ? 0 : delay,
      ease: EASE,
    },
  });

  const drawRule = (axis: "x" | "y") => ({
    initial: reduce
      ? { opacity: 0 }
      : { scaleX: axis === "x" ? 0 : 1, scaleY: axis === "y" ? 0 : 1 },
    animate: reduce ? { opacity: 1 } : { scaleX: 1, scaleY: 1 },
    transition: { duration: reduce ? 0.3 : 0.8, ease: EASE },
  });

  const [firstName, ...restName] = hero.name.split(" ");

  return (
    <section
      id="hero"
      aria-labelledby="hero-name"
      className="relative flex min-h-[max(100svh,640px)] items-center overflow-hidden bg-navy-deep px-gutter py-28 sm:py-32"
    >
      {/* Hairline frame. Four 1px rules, each drawing from its own origin. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-[calc(var(--spacing-gutter)*0.45)] bottom-[calc(var(--spacing-gutter)*0.45)] top-[76px] lg:top-[88px]"
      >
        <motion.span
          {...drawRule("x")}
          className="absolute left-0 top-0 h-px w-full origin-left bg-gold/25"
        />
        <motion.span
          {...drawRule("y")}
          className="absolute right-0 top-0 h-full w-px origin-top bg-gold/25"
        />
        <motion.span
          {...drawRule("x")}
          className="absolute bottom-0 right-0 h-px w-full origin-right bg-gold/25"
        />
        <motion.span
          {...drawRule("y")}
          className="absolute bottom-0 left-0 h-full w-px origin-bottom bg-gold/25"
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1120px] flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-12">
        {/* Eyebrow, name, divider */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-1">
          <motion.p {...fade(0.4)} className="eyebrow text-gold-light">
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.5)}
            id="hero-name"
            className="display-name mt-6 text-cream sm:mt-7"
          >
            <span className="block">{firstName}</span>
            <span className="block">{restName.join(" ")}</span>
          </motion.h1>

          <motion.div {...fade(0.65)} className="mt-7 max-w-[19rem]">
            <Divider tone="dark" />
          </motion.div>
        </div>

        {/* Portrait: second on mobile, right-hand column on desktop */}
        <motion.div
          {...fade(0.25)}
          className="mt-10 flex justify-center lg:col-span-5 lg:col-start-8 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:justify-end lg:self-center"
        >
          <ArchPortrait
            priority
            className="w-[62vw] max-w-[280px] lg:w-full lg:max-w-[400px]"
          />
        </motion.div>

        {/* Role line, tagline, subline, calls to action */}
        <div className="lg:col-span-6 lg:col-start-1 lg:row-start-2">
          <motion.p
            {...fade(0.7)}
            className="mt-9 max-w-[30rem] text-[0.9375rem] leading-[1.8] tracking-[0.02em] text-cream/75 lg:mt-9"
          >
            {hero.roles.join(" · ")}
          </motion.p>

          <motion.p
            {...fade(0.85)}
            className="tagline mt-8 text-gold-light"
          >
            {hero.tagline}
          </motion.p>

          <motion.p
            {...fade(0.95)}
            className="mt-6 max-w-[34rem] text-[1.0625rem] leading-[1.7] text-cream/80 sm:text-[1.25rem]"
          >
            {hero.subline}
          </motion.p>

          <motion.div
            {...fade(1.05)}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4"
          >
            <a href={hero.primaryCta.href} className="btn btn-primary">
              {hero.primaryCta.label}
            </a>
            <a href={hero.secondaryCta.href} className="btn btn-ghost-dark">
              {hero.secondaryCta.label}
            </a>
          </motion.div>

          <motion.p
            {...fade(1.15)}
            className="meta-text mt-10 text-cream/45 lg:mt-12"
          >
            {hero.footLine}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
