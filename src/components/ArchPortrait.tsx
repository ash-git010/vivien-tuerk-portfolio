import Image from "next/image";

import { images } from "@/content/site";

type ArchPortraitProps = {
  className?: string;
  priority?: boolean;
  sizes?: string;
};

/**
 * The signature element: an arch crop (semicircular top, square bottom) with a
 * 1px gold hairline held at a small gap outside it.
 *
 * `rounded-t-full` resolves to a true semicircle here because CSS clamps the
 * radii proportionally: for a box whose height exceeds half its width, the top
 * radii settle at exactly half the width and the two quarter-circles meet.
 */
export function ArchPortrait({
  className,
  priority = false,
  sizes = "(min-width: 1024px) 440px, 60vw",
}: ArchPortraitProps) {
  return (
    <div className={`relative ${className ?? ""}`}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-t-full bg-navy-soft">
        <Image
          src={images.portrait.src}
          alt={images.portrait.alt}
          width={images.portrait.width}
          height={images.portrait.height}
          priority={priority}
          sizes={sizes}
          className="h-full w-full object-cover object-top"
        />
      </div>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2.5 rounded-t-full border border-gold/55 sm:-inset-3"
      />
    </div>
  );
}
