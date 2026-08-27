import { Divider } from "@/components/Divider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { qualifications } from "@/content/site";

/**
 * Ausbildung carries no years. That is deliberate and stays that way. There is
 * no Werdegang timeline here either.
 *
 * Both column headings are set in Jost, not Cormorant. The display face is
 * reserved for the hero name, section headings, card titles and the pull quote:
 * letting it drift into every subhead is what makes it stop meaning "heading".
 */
export function Qualifications() {
  return (
    <section
      id="qualifikationen"
      aria-labelledby="qualifikationen-heading"
      className="bg-cream px-gutter py-section"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="eyebrow text-gold-ink">{qualifications.eyebrow}</p>
          <h2
            id="qualifikationen-heading"
            className="section-heading mt-5 text-ink"
          >
            {qualifications.heading}
          </h2>
          <div className="mt-8 max-w-[19rem]">
            <Divider />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <h3 className="label-caps text-meta">
              {qualifications.education.title}
            </h3>
            <ul className="mt-6 border-t border-hairline">
              {qualifications.education.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-4 border-b border-hairline py-4"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[0.8em] h-px w-3 shrink-0 bg-gold"
                  />
                  <span className="text-[1.0625rem] leading-[1.5] text-ink">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.12}>
            <h3 className="label-caps text-meta">
              {qualifications.training.title}
            </h3>
            <RevealGroup
              className="mt-6 flex flex-wrap gap-2"
              stagger={0.03}
            >
              {qualifications.training.items.map((item) => (
                <RevealItem key={item}>
                  <span className="inline-block rounded-[2px] bg-gold-soft px-3.5 py-2 text-[0.9375rem] leading-none text-ink">
                    {item}
                  </span>
                </RevealItem>
              ))}
            </RevealGroup>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
