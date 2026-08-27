import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { impressum } from "@/content/site";

export const metadata: Metadata = {
  title: impressum.title,
  robots: { index: false, follow: true },
};

export default function ImpressumPage() {
  return <LegalPage doc={impressum} />;
}
