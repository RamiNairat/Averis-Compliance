// Fictional sample review. Northpine Baby is not a real company and no
// customer documents were used.

export type Severity = "high" | "medium" | "low" | "pass";

export const severityLabel: Record<Severity, string> = {
  high: "High",
  medium: "Medium",
  low: "Low",
  pass: "Pass",
};

export type DocId = "A" | "B" | "C" | "D" | "E";

export type Finding = {
  title: string;
  severity: Severity;
  field: string;
  rows: { doc: DocId; value: string }[];
  // Which row is flagged, and which row it's compared against. "chars" marks
  // the differing characters; "value" flags the whole value.
  flag?: { row: number; against?: number; mode: "chars" | "value" };
  note: string;
  action: string;
};

export const sampleDocuments: Record<DocId, { name: string; detail: string }> = {
  A: { name: "Amazon listing", detail: "Battery and product fields" },
  B: { name: "UN38.3 test summary", detail: "Issued by the battery supplier" },
  C: { name: "Safety data sheet", detail: "Lithium polymer battery" },
  D: { name: "Test report", detail: "Product-level electrical report" },
  E: { name: "Commercial invoice", detail: "Factory to importer" },
};

export const sampleReview = {
  reference: "Review 001",
  brand: "Northpine Baby",
  product: "Rechargeable bottle warmer",
  model: "NP-W2",
  service: "Battery SKU Readiness Review",
  findings: [
    {
      title: "Battery model mismatch",
      severity: "high",
      field: "Battery model",
      rows: [
        { doc: "B", value: "LP-503040" },
        { doc: "C", value: "LP-503045" },
      ],
      flag: { row: 1, against: 0, mode: "chars" },
      note: "Both documents should describe the battery that ships in the product. With two model numbers, it isn’t clear which battery either document covers.",
      action: "Confirm with the supplier which battery is fitted in production units, and request a UN38.3 summary and SDS that both name that model.",
    },
    {
      title: "Listing battery count doesn’t match the product",
      severity: "medium",
      field: "Number of batteries",
      rows: [
        { doc: "A", value: "2" },
        { doc: "D", value: "1 built-in pack" },
        { doc: "E", value: "1 built-in pack" },
      ],
      flag: { row: 0, against: 1, mode: "value" },
      note: "The listing describes two batteries. Every supplier document describes one built-in pack.",
      action: "Correct the battery fields in the listing to one built-in battery pack.",
    },
    {
      title: "SDS issue date is several years old",
      severity: "low",
      field: "Date of issue",
      rows: [{ doc: "C", value: "2019" }],
      flag: { row: 0, mode: "value" },
      note: "An older SDS is not automatically a problem, but it may not reflect the current battery or supplier.",
      action: "Ask the supplier whether a current revision is available.",
    },
    {
      title: "Watt-hour rating is consistent",
      severity: "pass",
      field: "Rated energy",
      rows: [
        { doc: "A", value: "2.22 Wh" },
        { doc: "B", value: "2.22 Wh" },
        { doc: "C", value: "2.22 Wh" },
      ],
      note: "The rating matches across the battery documents and the listing.",
      action: "No action needed.",
    },
  ] satisfies Finding[] as Finding[],
  supplierRequests: [
    "Which battery model is fitted in production units of NP-W2: LP-503040 or LP-503045?",
    "Please send the UN38.3 test summary and SDS for that exact battery model.",
    "Is a more recent revision of the SDS available?",
  ],
  nextSteps: [
    "Send the supplier questions and wait for matching battery documents.",
    "Correct the listing’s battery fields to one built-in pack.",
    "When corrected documents arrive, check that the battery model appears identically on the UN38.3 summary, the SDS and the test report.",
    "Submit or resubmit the package.",
  ],
};
