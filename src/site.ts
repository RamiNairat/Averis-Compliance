// Site-wide facts. Change contact details or the domain here only.

export const site = {
  name: "Averis Compliance",
  shortName: "Averis",
  founder: "Rami",
  // No custom domain yet. When one is connected, update this value and the two
  // URLs in public/robots.txt and public/sitemap.xml.
  url: "https://averis-compliance.vercel.app",
  // Temporary address until a domain mailbox exists.
  email: "rami.nairatt@gmail.com",
  phone: { display: "647 646 4631", href: "tel:+16476464631" },
  upworkUrl: "https://www.upwork.com/freelancers/~017300443a4cf262ca",
  // Contact form submissions are delivered by Formspree to the email above.
  formEndpoint: "https://formspree.io/f/mjgdeyal",
  description:
    "Averis reviews Amazon compliance documents, including CPCs, UN38.3 summaries, SDS files, FCC documentation and test reports, for inconsistencies before you submit.",
} as const;

export const scopeStatement =
  "Averis provides document review and operational compliance support. Averis is not a law firm, does not provide legal advice, does not perform laboratory testing, does not issue certifications and cannot guarantee marketplace or regulatory approval.";

// Compact version for the footer; the full statement appears once in page content.
export const scopeShort =
  "Averis provides document-review support and does not provide legal advice, testing, certification issuance or approval guarantees.";
