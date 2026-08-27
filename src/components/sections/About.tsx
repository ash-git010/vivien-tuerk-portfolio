import Image from "next/image";

import { Divider } from "@/components/Divider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { about, images, stats, workingStyle } from "@/content/site";

/**
 * Über mich also carries the Arbeitsweise trio and the four stats. Both were
 * folded in here rather than given sections of their own: a visitor deciding in
 * forty seconds should not have to scroll past a standalone stat bar, and
 * neither block is a separate answer to a separate question.
 */
export function About() {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="ueber-mich-heading"
      className="bg-cream px-gutter py-section"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="eyebrow text-gold-ink">{about.eyebrow}</p>
          <h2
            id="ueber-mich-heading"
            className="section-heading mt-5 max-w-[20ch] text-ink"
          >
            {about.headingLead} <em>{about.headingEmphasis}</em>
          </h2>
          <div className="mt-8 max-w-[19rem]">
            <Divider />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="lg:col-span-7" delay={0.05}>
            <p className="lede max-w-[34rem] text-ink">{about.lede}</p>
            <div className="mt-8 max-w-[34rem] space-y-[1.15em]">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)} className="body-text">
                  {paragraph}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal className="lg:col-span-4 lg:col-start-9" delay={0.12}>
            <div className="flex justify-start">
              <div className="rounded-full border border-gold/50 p-2">
                <Image
                  src={images.portraitSquare.src}
                  alt={images.portraitSquare.alt}
                  width={images.portraitSquare.width}
                  height={images.portraitSquare.height}
                  sizes="(min-width: 1024px) 220px, 180px"
                  className="size-[180px] rounded-full object-cover lg:size-[220px]"
                />
              </div>
            </div>

            <dl className="mt-10 border-t border-hairline">
              {about.facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-col gap-1 border-b border-hairline py-4 sm:flex-row sm:items-baseline sm:gap-6"
                >
                  <dt className="label-caps shrink-0 text-meta sm:w-[7.5rem]">
                    {fact.label}
                  </dt>
                  <dd className="text-[0.9375rem] leading-[1.5] text-ink">
                    {"href" in fact && fact.href ? (
                      <a
                        href={fact.href}
                        className="underline decoration-gold/60 underline-offset-4 transition-colors hover:text-gold-ink"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      fact.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Four stats. Deliberately not a stat bar: modest size, hairline ruled,
            sharing this surface rather than owning a section. */}
        <Reveal className="mt-16 lg:mt-20">
          <p className="label-caps text-meta">{stats.eyebrow}</p>
          <div className="mt-6 grid grid-cols-2 border-t border-hairline sm:grid-cols-4">
            {stats.items.map((item) => (
              <div
                key={item.label}
                className="border-b border-hairline px-0 py-6 sm:border-l sm:px-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <p className="font-display text-[2.5rem] font-light leading-none tracking-[0.02em] text-ink lining-nums">
                  {item.value}
                </p>
                <p className="meta-text mt-3 max-w-[16rem] text-meta">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-16 lg:mt-20">
          <Divider />
        </Reveal>

        <Reveal className="mt-14 lg:mt-16">
          <p className="eyebrow text-gold-ink">{workingStyle.eyebrow}</p>
        </Reveal>

        <RevealGroup className="mt-8 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {workingStyle.items.map((item) => (
            <RevealItem key={item.num} className="border-t border-gold/45 pt-6">
              <p aria-hidden="true" className="ornament text-meta">
                {item.num}
              </p>
              <h3 className="card-title mt-4 text-ink">{item.title}</h3>
              <p className="body-text mt-3">{item.text}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
