"use client";

import { motion, useReducedMotion } from "motion/react";

const EASE = [0.22, 1, 0.36, 1] as const;

type DividerProps = {
  /** Surface the divider sits on. */
  tone?: "light" | "dark";
  className?: string;
};

/**
 * The recurring motif: a 1px gold hairline with a small rotated square centred
 * in it. The rule draws itself outward from the centre, then the diamond fades
 * in once the rule has landed.
 *
 * Purely decorative, so it is hidden from the accessibility tree. The rotated
 * square is a static transform, never an animated rotation.
 *
 * This is the only place the diamond appears on the site. Repeating it at
 * bullet scale would spend the motif rather than establish it.
 */
export function Divider({ tone = "light", className }: DividerProps) {
  const reduce = useReducedMotion();

  const rule = tone === "dark" ? "bg-gold-light/40" : "bg-gold/50";
  const diamond = tone === "dark" ? "bg-gold-light" : "bg-gold";

  const ruleMotion = {
    initial: { scaleX: reduce ? 1 : 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true, amount: 0.6 },
    transition: { duration: reduce ? 0 : 0.7, ease: EASE },
  } as const;

  return (
    <div
      aria-hidden="true"
      className={`flex w-full items-center gap-3 ${className ?? ""}`}
    >
      <motion.span
        {...ruleMotion}
        className={`h-px flex-1 origin-center ${rule}`}
      />
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          duration: reduce ? 0.2 : 0.4,
          delay: reduce ? 0 : 0.55,
          ease: EASE,
        }}
        style={{ rotate: 45 }}
        className={`size-[7px] shrink-0 ${diamond}`}
      />
      <motion.span
        {...ruleMotion}
        className={`h-px flex-1 origin-center ${rule}`}
      />
    </div>
  );
}
