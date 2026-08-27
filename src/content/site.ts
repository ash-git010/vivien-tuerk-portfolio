/**
 * site.ts — single source of truth for all copy on the site.
 *
 * Every German string was extracted from Vivien's approved portfolio PDF, or adapted
 * for a client-facing register where marked with ADAPTED FOR WEB.
 *
 * Rules when editing:
 *   - No em dashes, no dash-heavy construction. Commas, periods, colons.
 *   - "Arbeitsfelder", never "Branchen".
 *   - Ausbildung carries no years.
 *   - Never add a claim that is not already true here.
 *
 * Place at: src/content/site.ts
 */

export const meta = {
  name: "Vivien Türk",
  title: "Vivien Türk · Virtuelle Assistenz im Rhein-Main-Gebiet",
  description:
    "Virtuelle Assistenz für Coaches, Berater und kleine Unternehmen im Rhein-Main-Gebiet. Backoffice, Kundenservice, Recruiting und Organisation. Vor Ort, hybrid oder remote.",
  locale: "de_DE",
  url: "https://vivien-tuerk.de",
} as const;

export const contact = {
  phone: "+49 1522 9591655",
  phoneHref: "tel:+4915229591655",
  email: "vivien.tuerk9@gmail.com",
  emailHref: "mailto:vivien.tuerk9@gmail.com",
  street: "Binger Str. 249",
  city: "55218 Ingelheim am Rhein",
  region: "Rhein-Main-Gebiet",
  linkedinLabel: "linkedin.com/in/vivien-türk-ab2623316",
  linkedinHref: "https://www.linkedin.com/in/vivien-t%C3%BCrk-ab2623316",
} as const;

export const nav = [
  { label: "Über mich", href: "#ueber-mich" },
  { label: "Leistungen", href: "#leistungen" },
  { label: "Qualifikationen", href: "#qualifikationen" },
  { label: "Tools", href: "#tools" },
  { label: "Kontakt", href: "#kontakt" },
] as const;

export const hero = {
  eyebrow: "Virtuelle Assistenz",
  name: "Vivien Türk",
  roles: [
    "Assistenz der Geschäftsführung",
    "Customer Support",
    "Recruiting",
    "Gästebetreuung",
    "Office & Backoffice Management",
  ],
  tagline: "Klarheit ins Chaos. Mit Struktur und Herz.",
  // ADAPTED FOR WEB: states the offer plainly for a visitor arriving cold from an outreach message.
  subline:
    "Ich unterstütze Coaches, Berater und kleine Unternehmen im Rhein-Main-Gebiet bei Backoffice, Kundenkommunikation und Organisation. Vor Ort, hybrid oder remote.",
  primaryCta: { label: "Gespräch vereinbaren", href: "#kontakt" },
  secondaryCta: { label: "Leistungen ansehen", href: "#leistungen" },
  footLine: "Ingelheim am Rhein · Rhein-Main-Gebiet",
} as const;

export const about = {
  eyebrow: "Über mich",
  // The italic clause is set separately so the display face can emphasise it.
  headingLead: "Ich halte die Fäden zusammen,",
  headingEmphasis: "damit andere frei arbeiten können.",
  lede: "Organisationsstarke kaufmännische Fachkraft mit mehrjähriger Erfahrung in Assistenz, Customer Support, Recruiting und Backoffice.",
  paragraphs: [
    "Beruflich schlägt mein Herz für Struktur, Organisation und Kommunikation. Ob in der Assistenz der Geschäftsführung, im Backoffice oder in der Kunden- und Gästebetreuung: Ich bringe Klarheit ins Chaos, behalte den Überblick über parallele Themen und sorge dafür, dass Projekte und Prozesse verlässlich laufen.",
    "Ich arbeite strukturiert, serviceorientiert und eigenverantwortlich und schätze den direkten Kontakt mit Menschen. In der Zusammenarbeit ist mir wichtig, dass sie nicht nur effizient, sondern auch herzlich und auf Augenhöhe ist.",
    "Durch Stationen in Vertrieb, E-Commerce, Kundenservice und Pflegeberatung arbeite ich mich schnell in neue Arbeitsfelder, Tools und Prozesse ein. Genau das schätze ich an meiner Arbeit.",
    "Privat reise ich leidenschaftlich gern und entdecke neue Kulturen. Energie schöpfe ich außerdem aus Theater und Tanz.",
  ],
  facts: [
    { label: "Standort", value: "Ingelheim am Rhein · Rhein-Main" },
    { label: "Einsatzform", value: "Vor Ort · Hybrid · Remote" },
    { label: "Telefon", value: contact.phone, href: contact.phoneHref },
    { label: "E-Mail", value: contact.email, href: contact.emailHref },
  ],
} as const;

export const workingStyle = {
  eyebrow: "Meine Arbeitsweise",
  items: [
    {
      num: "01",
      title: "Strukturiert",
      text: "Klare Prozesse, saubere Dokumentation und Termine, die halten. Nichts geht verloren.",
    },
    {
      num: "02",
      title: "Serviceorientiert",
      text: "Freundlich, verbindlich und lösungsorientiert, im Kundenkontakt wie im Team.",
    },
    {
      num: "03",
      title: "Eigenverantwortlich",
      text: "Schnelle Auffassungsgabe, kurze Einarbeitung und Themen, die ich selbstständig zu Ende bringe.",
    },
  ],
} as const;

export const stats = {
  eyebrow: "Auf einen Blick",
  items: [
    { value: "10+", label: "Jahre Erfahrung in der Assistenz und Kundenkommunikation" },
    { value: "6+", label: "verschiedene Arbeitsfelder" },
    { value: "20+", label: "Tools & Systeme" },
    { value: "4", label: "Sprachen im Einsatz" },
  ],
} as const;

export const services = {
  eyebrow: "Leistungen",
  heading: "Wofür Sie mich einsetzen können.",
  pullQuote:
    "Mein Anspruch: Aufgaben nicht nur abarbeiten, sondern mitdenken. Prozesse verstehen, Lücken erkennen und Verantwortung übernehmen, bevor jemand danach fragen muss.",
  items: [
    {
      num: "01",
      title: "Backoffice & Organisation",
      points: [
        "Termin- & Kalenderverwaltung",
        "E-Mail-Management & Korrespondenz",
        "Ablage- & Dokumentenmanagement",
        "Assistenz der Geschäftsführung",
      ],
    },
    {
      num: "02",
      title: "Personal & Recruiting",
      points: [
        "Active Sourcing & Bewerbermanagement",
        "Koordination von Interviews",
        "Onboarding neuer Mitarbeitender",
        "Pflege von Mitarbeiterdaten",
      ],
    },
    {
      num: "03",
      title: "Kundenservice & Community",
      points: [
        "Professioneller Chat- & E-Mail-Support",
        "Telefonische Kundenkommunikation",
        "Beschwerde- & Reklamationsmanagement",
        "Community- & Bewertungsmanagement",
      ],
    },
    {
      num: "04",
      title: "Vertrieb & Kundenbetreuung",
      points: [
        "Vertriebsinnendienst & Inside Sales",
        "Akquise & Nachfassen von Angeboten",
        "Betreuung von Bestandskunden",
        "CRM-Pflege & Datenqualität",
      ],
    },
    {
      num: "05",
      title: "Buchhaltung & Finance",
      points: [
        "Rechnungsstellung & Mahnwesen",
        "Reisekostenabrechnung",
        "Vorbereitende Buchhaltung",
        "Aufbereitung für den Steuerberater",
      ],
    },
    {
      num: "06",
      title: "Projekt- & Eventmanagement",
      points: [
        "Planung & Nachverfolgung von Projekten",
        "Schnittstelle zwischen Teams & Abteilungen",
        "Reise- & Gästemanagement",
        "Organisation von Terminen & Events",
      ],
    },
  ],
} as const;

export const qualifications = {
  eyebrow: "Qualifikationen",
  heading: "Meine fachliche Grundlage.",
  // No years. This is deliberate, do not add them back.
  education: {
    title: "Ausbildung",
    items: [
      "Mittlere Reife",
      "Allgemeine Hochschulreife",
      "Abgeschlossene Ausbildung zur Medizinischen Fachangestellten",
      "Externenprüfung zur Kauffrau für Büromanagement",
      "Psychologie B. Sc.",
    ],
  },
  training: {
    title: "Weiterbildungen",
    items: [
      "Recruiting",
      "Sales Management",
      "Teamleitung",
      "Social Media Management",
      "Community Management",
      "Beschwerdemanagement",
      "Psychologie",
      "Patientenkommunikation",
      "Pflegeberatung",
      "Mediation",
      "Trauerbegleitung",
    ],
  },
} as const;

export const tools = {
  eyebrow: "Tools & Sprachen",
  heading: "Womit ich arbeite.",
  groups: [
    {
      title: "Projekt- & Aufgabenmanagement",
      items: ["Asana", "Trello", "ClickUp", "Jira", "Miro"],
    },
    {
      title: "Kundenservice & Ticketing",
      items: ["Zendesk", "Freshdesk", "Gorgias", "Trustpilot", "LeadDesk / Elsbeth"],
    },
    {
      title: "CRM & Vertrieb",
      items: ["Salesforce", "HubSpot", "LinkedIn"],
    },
    {
      title: "E-Commerce & Buchungen",
      items: ["Shopify", "JTL WaWi", "Billbee / Easybill", "Airbnb / Booking"],
    },
    {
      title: "Büro & Buchhaltung",
      items: ["MS Office", "Google Workspace", "Sheets / Forms", "Lexware"],
    },
    {
      title: "Kommunikation & Kreation",
      items: ["Slack", "Signal", "Canva", "CapCut"],
    },
  ],
  languages: {
    title: "Sprachen",
    items: [
      { name: "Deutsch", level: "Muttersprache", value: 100 },
      { name: "Englisch", level: "Sehr gut", value: 85 },
      { name: "Französisch", level: "Grundkenntnisse", value: 35 },
      { name: "Spanisch", level: "Grundkenntnisse", value: 35 },
    ],
  },
} as const;

export const cta = {
  eyebrow: "Kontakt",
  heading: "Lassen Sie uns sprechen.",
  text: "Ich freue mich auf ein persönliches Gespräch und darauf, zu erfahren, wo ich Sie und Ihr Team am besten entlasten kann.",
  closing:
    "Ob als feste Assistenz im Team oder projektweise im Backoffice: Ich sorge dafür, dass Ihr Tagesgeschäft verlässlich läuft.",
  channels: [
    { label: "Telefon", value: contact.phone, href: contact.phoneHref },
    { label: "E-Mail", value: contact.email, href: contact.emailHref },
    { label: "Adresse", value: `${contact.street}, ${contact.city}` },
    { label: "LinkedIn", value: contact.linkedinLabel, href: contact.linkedinHref },
  ],
} as const;

export const footer = {
  tagline: "Assistenz · Customer Support · Recruiting",
  links: [
    { label: "Impressum", href: "/impressum" },
    { label: "Datenschutz", href: "/datenschutz" },
  ],
} as const;

export const images = {
  portrait: {
    src: "/vivien-portrait.jpg",
    width: 1086,
    height: 1448,
    alt: "Vivien Türk, virtuelle Assistenz aus Ingelheim am Rhein",
  },
  portraitSquare: {
    src: "/vivien-portrait-square.jpg",
    width: 800,
    height: 800,
    alt: "Porträt von Vivien Türk",
  },
} as const;

/* ---------------------------------------------------------------------------
 * Interface labels. Here rather than in components so no German string is ever
 * hardcoded in JSX.
 * ------------------------------------------------------------------------- */
export const ui = {
  menuOpen: "Menü",
  menuClose: "Schließen",
  navLabel: "Hauptnavigation",
  skipToContent: "Zum Inhalt springen",
  backHome: "Zurück zur Startseite",
  toTop: "Nach oben",
} as const;

/* ---------------------------------------------------------------------------
 * Legal pages. Required for a German business site: Impressum under § 5 DDG,
 * Datenschutzerklärung under DSGVO.
 *
 * TWO THINGS ASH MUST CONFIRM WITH VIVIEN BEFORE LAUNCH:
 *   1. USt-IdNr. If she has one it is mandatory here. If she runs under the
 *      Kleinunternehmerregelung, there is nothing to add and this is fine.
 *   2. The Impressum publishes her home address to a crawlable page. The PDF
 *      already carried it, but a PDF is not indexed by Google and this is.
 * ------------------------------------------------------------------------- */
export const impressum = {
  title: "Impressum",
  sections: [
    {
      title: "Angaben gemäß § 5 DDG",
      tight: true,
      body: [
        meta.name,
        "Virtuelle Assistenz",
        contact.street,
        contact.city,
      ],
    },
    {
      title: "Kontakt",
      tight: true,
      body: [`Telefon: ${contact.phone}`, `E-Mail: ${contact.email}`],
    },
    {
      title: "Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV",
      tight: true,
      body: [meta.name, contact.street, contact.city],
    },
    {
      title: "Verbraucherstreitbeilegung",
      body: [
        "Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.",
      ],
    },
    {
      title: "Haftung für Inhalte",
      body: [
        "Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen. Als Diensteanbieterin bin ich gemäß § 7 Abs. 1 DDG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.",
      ],
    },
    {
      title: "Haftung für Links",
      body: [
        "Mein Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für die Inhalte der verlinkten Seiten ist stets die jeweilige Anbieterin oder der jeweilige Anbieter verantwortlich. Bei Bekanntwerden von Rechtsverletzungen entferne ich derartige Links umgehend.",
      ],
    },
    {
      title: "Urheberrecht",
      body: [
        "Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Eine Vervielfältigung, Bearbeitung oder Verbreitung außerhalb der Grenzen des Urheberrechts bedarf meiner schriftlichen Zustimmung.",
      ],
    },
  ],
} as const;

export const datenschutz = {
  title: "Datenschutzerklärung",
  intro:
    "Der Schutz Ihrer persönlichen Daten ist mir wichtig. Diese Website erhebt so wenige Daten wie technisch möglich. Es kommen weder Cookies noch Analysewerkzeuge oder Werbenetzwerke zum Einsatz.",
  sections: [
    {
      title: "Verantwortliche Stelle",
      body: [
        "Verantwortlich für die Datenverarbeitung auf dieser Website ist:",
        `${meta.name}, ${contact.street}, ${contact.city}`,
        `Telefon: ${contact.phone}, E-Mail: ${contact.email}`,
      ],
    },
    {
      title: "Hosting",
      body: [
        "Diese Website wird bei Vercel Inc. gehostet, einem Anbieter mit Sitz in den USA. Vercel verarbeitet dabei personenbezogene Daten in meinem Auftrag, insbesondere die technisch erforderlichen Zugriffsdaten. Grundlage ist ein Auftragsverarbeitungsvertrag nach Art. 28 DSGVO. Die Übermittlung in die USA ist durch Standardvertragsklauseln der EU-Kommission abgesichert. Weitere Informationen finden Sie unter vercel.com/legal/privacy-policy.",
      ],
    },
    {
      title: "Server-Logfiles",
      body: [
        "Beim Aufruf dieser Website werden automatisch Informationen erfasst, die Ihr Browser übermittelt. Dazu gehören Browsertyp und Browserversion, verwendetes Betriebssystem, die zuvor besuchte Seite, der Hostname des zugreifenden Rechners, die Uhrzeit der Serveranfrage und die IP-Adresse.",
        "Diese Daten sind technisch erforderlich, um die Website auszuliefern und ihre Stabilität und Sicherheit zu gewährleisten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Eine Zusammenführung mit anderen Datenquellen findet nicht statt.",
      ],
    },
    {
      title: "Schriftarten",
      body: [
        "Diese Website verwendet die Schriftarten Cormorant Garamond und Jost. Beide werden lokal von meinem eigenen Server ausgeliefert und beim Seitenaufruf nicht von Google nachgeladen. Es wird dabei keine Verbindung zu Servern von Google aufgebaut und Ihre IP-Adresse wird nicht an Google übermittelt.",
      ],
    },
    {
      title: "Kontaktaufnahme",
      body: [
        "Diese Website enthält kein Kontaktformular. Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich die von Ihnen übermittelten Daten ausschließlich zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO bei einer Anfrage im Zusammenhang mit einem Vertrag, sonst Art. 6 Abs. 1 lit. f DSGVO.",
        "Ihre Anfrage und die zugehörigen Daten lösche ich, sobald der Anlass entfallen ist und keine gesetzlichen Aufbewahrungsfristen entgegenstehen.",
      ],
    },
    {
      title: "Cookies und Analyse",
      body: [
        "Diese Website setzt keine Cookies, verwendet keine Analysewerkzeuge, kein Tracking und keine Einbindung sozialer Netzwerke. Es ist daher auch kein Einwilligungsbanner erforderlich.",
      ],
    },
    {
      title: "Externe Links",
      body: [
        "Diese Website verlinkt auf mein LinkedIn-Profil. Beim Anklicken dieses Links verlassen Sie meine Website. Für die Datenverarbeitung durch LinkedIn ist ausschließlich der Betreiber dieser Plattform verantwortlich.",
      ],
    },
    {
      title: "Ihre Rechte",
      body: [
        "Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten, auf Berichtigung, Löschung, Einschränkung der Verarbeitung, Datenübertragbarkeit sowie ein Widerspruchsrecht. Wenden Sie sich dazu bitte an die oben genannten Kontaktdaten.",
        "Darüber hinaus steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu. Zuständig ist der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Rheinland-Pfalz.",
      ],
    },
  ],
} as const;
