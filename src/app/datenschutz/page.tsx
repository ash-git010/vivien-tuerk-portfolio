import type { Metadata } from "next";

import { LegalPage } from "@/components/LegalPage";
import { datenschutz } from "@/content/site";

export const metadata: Metadata = {
  title: datenschutz.title,
  robots: { index: false, follow: true },
};

export default function DatenschutzPage() {
  return <LegalPage doc={datenschutz} />;
}
