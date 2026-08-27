import { Divider } from "@/components/Divider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { services } from "@/content/site";

/**
 * Leistungen sits on navy: it is the one section that has to sell, so it gets
 * the highest-contrast surface rather than being the third cream screen in a
 * row.
 *
 * All six cards stay expanded at every width. Collapsing them into an accordion
 * on mobile would hide the exact content the visitor came to read.
 */
export function Services() {
  return (
    <section
      id="leistungen"
      aria-labelledby="leistungen-heading"
      className="bg-navy px-gutter py-section"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal className="flex flex-col items-center text-center">
          <p className="eyebrow text-gold-light">{services.eyebrow}</p>
          <h2
            id="leistungen-heading"
            className="section-heading mt-5 max-w-[18ch] text-cream"
          >
            {services.heading}
          </h2>
          <div className="mt-8 w-full max-w-[19rem]">
            <Divider tone="dark" />
          </div>
        </Reveal>

        <RevealGroup className="mt-14 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-6">
          {services.items.map((item) => (
            <RevealItem key={item.num}>
              <article className="h-full rounded-[2px] border border-gold/40 bg-navy-soft p-6 transition-[transform,border-color] duration-[250ms] ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-[3px] hover:border-gold lg:p-8">
                <p aria-hidden="true" className="ornament text-gold-light/70">
                  {item.num}
                </p>

                {/* From sm up, two lines are reserved so every bullet list in a
                    row starts on the same baseline: the six titles are unequal
                    lengths. Single-column has no row to align to. */}
                <h3 className="card-title mt-5 text-cream sm:min-h-[2.4em]">
                  {item.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="mt-1 block h-px w-8 bg-gold/50"
                />

                <ul className="mt-5 space-y-2.5">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[0.7em] h-px w-2 shrink-0 bg-gold/70"
                      />
                      <span className="bullet-text text-cream/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </RevealItem>
          ))}
        </RevealGroup>

        {/* The pull quote closes the section rather than opening it: the cards
            are what a cold visitor came for and should not be delayed. */}
        <Reveal className="mt-16 flex flex-col items-center lg:mt-20">
          <span aria-hidden="true" className="h-px w-16 bg-gold/50" />
          <blockquote className="mt-8 max-w-[46rem] text-center">
            <p className="font-display text-[1.375rem] font-normal italic leading-[1.45] text-gold-light sm:text-[1.75rem]">
              {services.pullQuote}
            </p>
          </blockquote>
          <span aria-hidden="true" className="mt-8 h-px w-16 bg-gold/50" />
        </Reveal>
      </div>
    </section>
  );
}
