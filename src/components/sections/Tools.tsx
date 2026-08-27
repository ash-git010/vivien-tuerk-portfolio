import { Divider } from "@/components/Divider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { tools } from "@/content/site";

/**
 * Languages are rendered as name plus level, in words.
 *
 * The content file also carries a numeric `value` per language. It is
 * deliberately unused: drawing "Französisch 35%" as a one-third-full bar turns
 * a plain fact into a graphic depiction of a weakness, on a page whose job is
 * credibility. Proficiency bars are also the clearest tell of a portfolio
 * template.
 */
export function Tools() {
  return (
    <section
      id="tools"
      aria-labelledby="tools-heading"
      className="border-t border-hairline bg-cream-warm px-gutter py-section-tight"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="eyebrow text-gold-ink">{tools.eyebrow}</p>
          <h2 id="tools-heading" className="section-heading mt-5 text-ink">
            {tools.heading}
          </h2>
          <div className="mt-8 max-w-[19rem]">
            <Divider />
          </div>
        </Reveal>

        <RevealGroup className="mt-12 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-3">
          {tools.groups.map((group) => (
            <RevealItem key={group.title}>
              <h3 className="label-caps text-meta">{group.title}</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-[2px] border border-hairline bg-cream px-3 py-1.5 text-[0.875rem] leading-none text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </RevealItem>
          ))}
        </RevealGroup>

        <Reveal className="mt-14 lg:mt-16">
          <h3 className="label-caps text-meta">{tools.languages.title}</h3>
          <dl className="mt-6 grid grid-cols-2 border-t border-hairline sm:grid-cols-4">
            {tools.languages.items.map((language) => (
              <div
                key={language.name}
                className="border-b border-hairline py-5 sm:border-l sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
              >
                <dt className="text-[1.0625rem] font-medium leading-none text-ink">
                  {language.name}
                </dt>
                <dd className="meta-text mt-2 text-meta">{language.level}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
