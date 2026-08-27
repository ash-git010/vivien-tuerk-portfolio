import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Qualifications } from "@/components/sections/Qualifications";
import { Services } from "@/components/sections/Services";
import { Tools } from "@/components/sections/Tools";
import { ui } from "@/content/site";

export default function Home() {
  return (
    <>
      <a
        href="#inhalt"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-cream focus:px-4 focus:py-3 focus:text-ink"
      >
        {ui.skipToContent}
      </a>
      <SiteHeader />
      <main id="inhalt" className="flex-1">
        <Hero />
        <About />
        <Services />
        <Qualifications />
        <Tools />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
