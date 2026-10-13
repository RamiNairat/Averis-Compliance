import { type ReactNode, useId } from "react";
import { useReveal } from "../lib/useReveal";
import "./compare.css";

export type CompareRow = { source: string; value: string };
export type CompareFlag = { row: number; against?: number; mode: "chars" | "value" };

type Props = {
  field: string;
  rows: CompareRow[];
  flag?: CompareFlag;
  // Note shown under the flagged value (hero).
  note?: string;
  size?: "lg" | "sm";
  // Plays the entrance on page load instead of on scroll.
  intro?: boolean;
};

// Splits `value` into runs, marking positions where it differs from `other`.
function diffRuns(value: string, other: string) {
  const runs: { text: string; diff: boolean }[] = [];
  for (let i = 0; i < value.length; i++) {
    const diff = value[i] !== other[i];
    const last = runs[runs.length - 1];
    if (last && last.diff === diff) last.text += value[i];
    else runs.push({ text: value[i], diff });
  }
  return runs;
}

export function Compare({ field, rows, flag, note, size = "sm", intro = false }: Props) {
  const revealRef = useReveal<HTMLElement>(!intro);
  const noteId = useId();
  const flagged = flag ? rows[flag.row] : undefined;
  const reference = flag?.against !== undefined ? rows[flag.against] : undefined;
  const isMismatch = Boolean(flag && reference);

  function renderValue(row: CompareRow, index: number): ReactNode {
    if (flag && index === flag.row) {
      if (flag.mode === "chars" && reference) {
        let leadPlaced = false;
        return diffRuns(row.value, reference.value).map((run, i) => {
          if (!run.diff) return run.text;
          const lead = !leadPlaced && note;
          leadPlaced = true;
          return (
            <mark key={i} className="cmp__mark">
              {run.text}
              {lead && <span className="cmp__lead" aria-hidden="true" />}
            </mark>
          );
        });
      }
      return <mark className="cmp__mark cmp__mark--whole">{row.value}</mark>;
    }
    // The reference value lights the same positions while the flag is inspected.
    if (flag?.mode === "chars" && reference && flagged && index === flag.against) {
      return diffRuns(row.value, flagged.value).map((run, i) =>
        run.diff ? (
          <span key={i} className="cmp__echo">
            {run.text}
          </span>
        ) : (
          run.text
        ),
      );
    }
    return row.value;
  }

  function status(row: CompareRow, index: number) {
    if (flag && index === flag.row) {
      return <span className="cmp__status cmp__status--flag">{isMismatch ? "Doesn’t match" : "Worth checking"}</span>;
    }
    const matches = flag ? reference && row.value === reference.value : rows.every((r) => r.value === rows[0].value);
    return matches ? <span className="cmp__status">Matches</span> : null;
  }

  return (
    <figure ref={revealRef} className={`cmp cmp--${size} ${intro ? "cmp--intro" : ""}`.trim()}>
      <figcaption className="cmp__head">
        <span className="cmp__field">{field}</span>
        <span className="cmp__count">
          {rows.length === 1 ? "one document" : `checked across ${rows.length} documents`}
        </span>
      </figcaption>
      <ul className="cmp__rows">
        {rows.map((row, i) => {
          const isFlag = flag?.row === i;
          return (
            <li
              key={`${row.source}-${i}`}
              className="cmp__row"
              data-state={isFlag ? "flag" : flag?.against === i ? "ref" : undefined}
              tabIndex={isFlag && reference ? 0 : undefined}
              aria-describedby={isFlag && note ? noteId : undefined}
            >
              <span className="cmp__source">{row.source}</span>
              <span className="cmp__value id">{renderValue(row, i)}</span>
              {status(row, i)}
            </li>
          );
        })}
      </ul>
      {note && (
        <p className="cmp__note" id={noteId}>
          <strong>{isMismatch ? "Mismatch found" : "Worth checking"}</strong>
          {note}
        </p>
      )}
    </figure>
  );
}
