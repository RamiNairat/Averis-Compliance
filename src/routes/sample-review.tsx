import { CtaBand } from "../components/CtaBand";
import { FindingItem, ReportShell, SeverityTag } from "../components/Report";
import { type DocId, type Severity, sampleDocuments, sampleReview } from "../content/sample-review";
import { pageMeta } from "../lib/meta";
import "./sample-review.css";

export const meta = () =>
  pageMeta({
    path: "/sample-review",
    title: "Sample review",
    description:
      "A fictional Battery SKU Readiness Review showing how Averis reports document mismatches: the evidence, a priority and a clear action for each finding.",
  });

const severityOrder: Severity[] = ["high", "medium", "low", "pass"];

export default function SampleReview() {
  const { findings } = sampleReview;
  const counts = severityOrder.map((severity) => ({
    severity,
    count: findings.filter((f) => f.severity === severity).length,
  }));

  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>What a review looks like</h1>
          <p className="lede">
            This is a Battery SKU Readiness Review written the way every Averis review is: what I checked, what
            doesn’t agree, how much it matters and what to do next.
          </p>
          <p className="fiction">
            This is a fictional sample. Northpine Baby is an invented brand, and the documents and values are made up.
          </p>
        </div>
      </header>

      <div className="band">
        <div className="wrap sample-page">
          <ReportShell titleId="sample-report">
            <section className="report__section" aria-labelledby="summary-title">
              <h2 id="summary-title">Summary</h2>
              <p className="summary__text">
                The battery documents don’t agree on which battery is in the product, and the listing overstates the
                battery count. Both should be sorted out before you submit. The SDS date is worth confirming, and the
                watt-hour rating is consistent everywhere.
              </p>
              <ul className="summary__counts" aria-label="Findings by severity">
                {counts.map(({ severity, count }) => (
                  <li key={severity}>
                    <SeverityTag severity={severity} /> <span>{count}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="report__section" aria-labelledby="docs-title">
              <h2 id="docs-title">Documents reviewed</h2>
              <ul className="doc-list">
                {(Object.keys(sampleDocuments) as DocId[]).map((id) => (
                  <li key={id}>
                    <span className="doc-list__name">{sampleDocuments[id].name}</span>
                    <span className="doc-list__detail">{sampleDocuments[id].detail}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="findings-title">
              <h2 id="findings-title" className="report__findings-title">
                Findings
              </h2>
              {findings.map((finding, i) => (
                <FindingItem key={finding.title} finding={finding} number={i + 1} open />
              ))}
            </section>

            <section className="report__section report__split" aria-label="Next steps">
              <div>
                <h2>Questions for the supplier</h2>
                <ol className="numbered">
                  {sampleReview.supplierRequests.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
              <div>
                <h2>Recommended next steps</h2>
                <ol className="numbered">
                  {sampleReview.nextSteps.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
              </div>
            </section>

            <section className="report__section report__limits" aria-labelledby="limits-title">
              <h2 id="limits-title">Limits of this review</h2>
              <p>
                This review compares the documents with each other, with the product details provided and with the
                listing. It doesn’t verify laboratory results, test the product, determine dangerous-goods
                classification or predict Amazon’s decision.
              </p>
            </section>
          </ReportShell>

          <aside className="reading-guide" aria-labelledby="guide-title">
            <h2 id="guide-title">How to read it</h2>
            <p>
              Each finding quotes the values from the documents themselves, so you can check my reading. Where two
              values differ, the differing characters are highlighted:{" "}
              <span className="id">
                LP-50304<mark>5</mark>
              </span>
              .
            </p>
            <p>Priorities tell you what to deal with first:</p>
            <ul className="guide-sev">
              <li>
                <SeverityTag severity="high" /> likely to cause a rejection or follow-up
              </li>
              <li>
                <SeverityTag severity="medium" /> worth correcting before you submit
              </li>
              <li>
                <SeverityTag severity="low" /> worth confirming
              </li>
              <li>
                <SeverityTag severity="pass" /> checked and consistent
              </li>
            </ul>
            <p>Every finding ends with a next step.</p>
          </aside>
        </div>
      </div>

      <CtaBand title="Want this for your own documents?" />
    </>
  );
}
