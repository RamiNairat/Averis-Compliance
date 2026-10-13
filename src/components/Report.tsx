import type { ReactNode } from "react";
import { type Finding, type Severity, sampleDocuments, sampleReview, severityLabel } from "../content/sample-review";
import { Compare } from "./Compare";
import "./report.css";

export function SeverityTag({ severity }: { severity: Severity }) {
  return (
    <span className={`sev sev--${severity}`}>
      <span className="visually-hidden">Severity: </span>
      {severityLabel[severity]}
    </span>
  );
}

export function FindingItem({
  finding,
  number,
  open = false,
  headingLevel: Heading = "h3",
}: {
  finding: Finding;
  number: number;
  open?: boolean;
  headingLevel?: "h3" | "h4";
}) {
  return (
    <details className="finding" open={open}>
      <summary className="finding__sum">
        <span className="finding__num">{number}</span>
        <Heading className="finding__title">{finding.title}</Heading>
        <SeverityTag severity={finding.severity} />
        <span className="finding__chev" aria-hidden="true" />
      </summary>
      <div className="finding__body">
        <Compare
          field={finding.field}
          rows={finding.rows.map((row) => ({ source: sampleDocuments[row.doc].name, value: row.value }))}
          flag={finding.flag}
        />
        <p className="finding__note">{finding.note}</p>
        <p className="finding__action">
          <strong>What to do:</strong> {finding.action}
        </p>
      </div>
    </details>
  );
}

export function ReportShell({ children, titleId }: { children: ReactNode; titleId?: string }) {
  const { findings } = sampleReview;
  const issues = findings.filter((f) => f.severity !== "pass").length;

  return (
    <article className="report" aria-labelledby={titleId}>
      <header className="report__head">
        <div>
          <p id={titleId} className="report__title">
            {sampleReview.brand}, <span className="id">{sampleReview.model}</span>
          </p>
          <p className="report__sub">
            {sampleReview.service} · {sampleReview.product}
          </p>
        </div>
        <p className="report__tag">Fictional sample</p>
      </header>
      <dl className="report__meta">
        <div>
          <dt>Documents reviewed</dt>
          <dd>{Object.keys(sampleDocuments).length}</dd>
        </div>
        <div>
          <dt>Findings</dt>
          <dd>{issues} to address</dd>
        </div>
        <div>
          <dt>Checks passed</dt>
          <dd>{findings.length - issues}</dd>
        </div>
      </dl>
      {children}
    </article>
  );
}
