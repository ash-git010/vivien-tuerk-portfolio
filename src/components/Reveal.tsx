"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

import { useMediaQuery } from "@/lib/use-media-query";

const EASE = [0.22, 1, 0.36, 1] as const;
const DISTANCE = 20;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/** Single element reveal: fade up, once, at ~20% intersection. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduce ? 0 : DISTANCE }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: reduce ? 0.3 : 0.6,
        ease: EASE,
        delay: reduce ? 0 : delay,
      }}
    >
      {children}
    </motion.div>
  );
}

type RevealGroupProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
  amount?: number;
};

/**
 * Group reveal. The parent owns the viewport trigger, so the whole group fires
 * on one intersection rather than each child fighting for its own.
 *
 * Below 1024px the stagger collapses to zero: with six stacked service cards,
 * per-card staggering means the visitor watches six separate arrivals while
 * scrolling, which is exactly the fidgetiness the motion budget rules out.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
  amount = 0.2,
}: RevealGroupProps) {
  const reduce = useReducedMotion();
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const step = reduce || !isDesktop ? 0 : stagger;

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: step } } }}
    >
      {children}
    </motion.div>
  );
}

/** Child of RevealGroup. Inherits the parent's trigger via variants. */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: reduce ? 0 : DISTANCE },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: reduce ? 0.3 : 0.6, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
