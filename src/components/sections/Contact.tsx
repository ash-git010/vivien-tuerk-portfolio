import { Divider } from "@/components/Divider";
import { Reveal, RevealGroup, RevealItem } from "@/components/Reveal";
import { cta } from "@/content/site";

/**
 * v1 ships with mailto: and tel: only. A contact form means processing personal
 * data, which means a consent checkbox, a processor and more privacy text.
 */
export function Contact() {
  return (
    <section
      id="kontakt"
      aria-labelledby="kontakt-heading"
      className="bg-navy px-gutter pb-[calc(var(--spacing-section)+2rem)] pt-section"
    >
      <div className="mx-auto w-full max-w-[1120px]">
        <Reveal>
          <p className="eyebrow text-gold-light">{cta.eyebrow}</p>
          <h2 id="kontakt-heading" className="section-heading mt-5 text-cream">
            {cta.heading}
          </h2>
          <div className="mt-8 max-w-[19rem]">
            <Divider tone="dark" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-x-16">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <p className="body-text max-w-[30rem] text-cream/80">{cta.text}</p>
            <p className="tagline mt-8 max-w-[30rem] text-gold-light">
              {cta.closing}
            </p>
          </Reveal>

          <RevealGroup
            className="lg:col-span-6 lg:col-start-7"
            amount={0.15}
          >
            <dl className="border-t border-gold/25">
              {cta.channels.map((channel) => (
                <RevealItem key={channel.label}>
                  <div className="flex flex-col gap-1.5 border-b border-gold/25 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                    <dt className="label-caps shrink-0 text-gold-light/80 sm:w-[7.5rem]">
                      {channel.label}
                    </dt>
                    <dd className="text-[1.0625rem] leading-[1.4] text-cream">
                      {"href" in channel && channel.href ? (
                        <a
                          href={channel.href}
                          {...(channel.href.startsWith("http")
                            ? { target: "_blank", rel: "noopener noreferrer" }
                            : {})}
                          className="break-words underline decoration-gold/50 underline-offset-4 transition-colors duration-200 hover:text-gold-light hover:decoration-gold"
                        >
                          {channel.value}
                        </a>
                      ) : (
                        channel.value
                      )}
                    </dd>
                  </div>
                </RevealItem>
              ))}
            </dl>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
