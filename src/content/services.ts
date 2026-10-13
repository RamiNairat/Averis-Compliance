// Single source for service names, prices and scope. Used by the home page,
// the services page and the contact form.

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  brief: string;
  kind: "reactive" | "proactive";
  situation: string;
  summary: string;
  price: string;
  priceNote: string;
  turnaround: string;
  scope: string;
  triggers: string[];
  reviewed: string[];
  deliverables: string[];
  addOns: { label: string; price: string }[];
  notIncluded: string[];
};

export const services: Service[] = [
  {
    slug: "rejection-review",
    name: "Rejection Review",
    shortName: "Rejection review",
    brief: "For an active Amazon compliance notice, rejection or suppressed listing.",
    kind: "reactive",
    situation: "You have an Amazon compliance notice, document rejection or suppressed listing.",
    summary:
      "I read the notice, go through the documents you submitted or plan to submit, and tell you what doesn’t line up, what to ask your supplier for, and what to fix before you resubmit.",
    price: "$195",
    priceNote: "per notice",
    turnaround: "Usually 24 hours",
    scope: "One notice, and up to about three ASINs that share the same document set.",
    triggers: [
      "“Insufficient documentation” or a document rejection",
      "A product compliance request with a deadline",
      "A suppressed or blocked listing",
      "Repeated requests for the same documents",
    ],
    reviewed: [
      "The Amazon notice or request text",
      "The documents submitted, or ready to submit",
      "The relevant listing fields",
    ],
    deliverables: [
      "Document-to-document mismatches",
      "Listing-to-document mismatches",
      "Questions to put to your supplier",
      "A resubmission checklist",
    ],
    addOns: [
      { label: "Same-day turnaround", price: "+$150" },
      { label: "Re-check of the corrected package before you resubmit", price: "$95" },
    ],
    notIncluded: [
      "Communicating with Amazon on your behalf",
      "Legal advice",
      "Laboratory testing",
      "Issuing certificates",
      "Any guarantee of approval",
    ],
  },
  {
    slug: "battery-sku-readiness",
    name: "Battery SKU Readiness Review",
    shortName: "Battery SKU readiness",
    brief: "For rechargeable or battery-powered products before launch or relisting.",
    kind: "proactive",
    situation: "You’re launching or relisting a rechargeable or battery-powered product.",
    summary:
      "A cross-document check of the battery paperwork against the product and the listing, done before Amazon asks for it.",
    price: "$295",
    priceNote: "first product family",
    turnaround: "Usually 48 hours",
    scope: "One product family. Related families can be added.",
    triggers: [
      "A new SKU, model or color variant",
      "A new supplier or battery source",
      "A dangerous-goods review or battery document request",
    ],
    reviewed: [
      "UN38.3 test summary",
      "Safety Data Sheet (SDS)",
      "Relevant test reports",
      "Amazon listing battery fields",
      "Model numbers, brand names and battery details",
    ],
    deliverables: [
      "Findings on model, battery model, watt-hours, cell type, manufacturer, brand and listing details",
      "A gap list",
      "A supplier request list",
      "Recommended next actions",
    ],
    addOns: [{ label: "Each additional related product family", price: "$150" }],
    notIncluded: [
      "Laboratory testing",
      "Writing or editing an SDS",
      "Dangerous-goods shipping classification",
      "Issuing certificates",
      "Legal advice",
    ],
  },
  {
    slug: "childrens-product-certificate",
    name: "US Children’s Product Certificate Review",
    shortName: "US children’s certificate review",
    brief: "For toys and children’s products sold in the United States.",
    kind: "proactive",
    situation: "You sell toys, baby products or other children’s products in the United States.",
    summary:
      "A check of your CPC against the test report, the product and the listing, so the certificate data is complete and consistent before it’s requested.",
    price: "$250",
    priceNote: "per product",
    turnaround: "Usually 48 hours",
    scope: "One product and its CPC, with the supporting test report.",
    triggers: [
      "A new children’s product",
      "An Amazon CPC request",
      "Entering the US market",
      "Preparing certificate data, or checking one from a supplier",
    ],
    reviewed: [
      "Children’s Product Certificate (CPC)",
      "Applicable test report and laboratory details",
      "Product information and listing age range",
      "Tracking label information, where applicable",
    ],
    deliverables: [
      "Required CPC information, present or missing",
      "Product identification, importer and manufacturer details",
      "Rule references and test-report match",
      "Laboratory, manufacture and test dates and locations",
      "Consistency with the product and listing",
    ],
    addOns: [],
    notIncluded: [
      "Issuing a CPC",
      "Performing testing",
      "Filing with regulators",
      "Legal advice",
    ],
  },
  {
    slug: "catalog-document-audit",
    name: "Catalog Document Audit",
    shortName: "Catalog document audit",
    brief: "For brands with several regulated products to check at once.",
    kind: "proactive",
    situation: "You have several regulated products and want the whole set checked at once.",
    summary:
      "A review of each SKU’s documents, then a priority list across the catalog, so you know which gaps to close first.",
    price: "$750",
    priceNote: "up to five SKUs",
    turnaround: "Usually five business days",
    scope: "Up to five SKUs. Additional SKUs can be added.",
    triggers: [
      "Catalog expansion or several launches at once",
      "A new factory",
      "Recent compliance problems",
      "Preparing ahead of Q4",
      "An internal process review",
    ],
    reviewed: ["The document set for each SKU, against the product and its listing"],
    deliverables: [
      "One written review per SKU",
      "A priority list across the catalog",
      "Identified risks and gaps",
      "A 30-minute walkthrough call",
      "Recommended next steps",
    ],
    addOns: [{ label: "Each additional SKU", price: "$125" }],
    notIncluded: ["Ongoing account management"],
  },
];
