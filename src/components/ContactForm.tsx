import { type FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router";
import { site } from "../site";

const situations = [
  { value: "notice", label: "I have an Amazon compliance notice or rejection" },
  { value: "battery", label: "I’m launching or relisting a battery-powered product" },
  { value: "cpc", label: "I sell children’s products in the US" },
  { value: "catalog", label: "I want several SKUs reviewed" },
  { value: "referral", label: "I’m referring a client or asking about partnership" },
  { value: "other", label: "Something else, or not sure" },
];

// Maps ?service= and ?topic= links from other pages to a preselected situation.
const presets: Record<string, string> = {
  "rejection-review": "notice",
  "battery-sku-readiness": "battery",
  "childrens-product-certificate": "cpc",
  "catalog-document-audit": "catalog",
  referral: "referral",
};

const documentTypes = ["CPC", "UN38.3 summary", "SDS", "FCC documentation", "Test report", "Invoice", "Not sure yet"];

type Status = { state: "idle" | "sending" } | { state: "sent"; email: string } | { state: "error"; message: string };

export function ContactForm() {
  const [searchParams] = useSearchParams();
  const [situation, setSituation] = useState("");
  const [status, setStatus] = useState<Status>({ state: "idle" });
  const resultRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const key = searchParams.get("service") ?? searchParams.get("topic");
    if (key && presets[key]) setSituation(presets[key]);
  }, [searchParams]);

  useEffect(() => {
    if (status.state === "sent") resultRef.current?.focus();
  }, [status.state]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const situationLabel = situations.find((s) => s.value === data.get("situation"))?.label ?? "";
    const email = String(data.get("email") ?? "");

    setStatus({ state: "sending" });
    try {
      const response = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email,
          company: data.get("company"),
          asin: data.get("asin"),
          situation: situationLabel,
          documents: data.getAll("documents").join(", "),
          message: data.get("message"),
          _subject: `First look request: ${situationLabel}`,
          _gotcha: data.get("_gotcha"),
        }),
      });
      if (response.ok) {
        setStatus({ state: "sent", email });
        return;
      }
      const body = await response.json().catch(() => null);
      const message =
        body?.errors?.map((e: { message: string }) => e.message).join(" ") ??
        body?.error ??
        "The form service returned an error.";
      setStatus({ state: "error", message });
    } catch {
      setStatus({ state: "error", message: "The message couldn’t be sent. Check your connection and try again." });
    }
  }

  if (status.state === "sent") {
    return (
      <div className="form-result" role="status">
        <h2 ref={resultRef} tabIndex={-1}>
          Message sent
        </h2>
        <p>
          Thanks. Your message has been delivered and I’ll reply to <strong>{status.email}</strong>. I aim to reply
          within 24 hours.
        </p>
        <p className="hint">Don’t send documents yet. My reply will say what’s needed and how to send it.</p>
      </div>
    );
  }

  const sending = status.state === "sending";

  return (
    <form className="contact-form fields" onSubmit={handleSubmit}>
      <div className="fields fields--2">
        <div className="field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" className="input" autoComplete="name" required />
        </div>
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" className="input" autoComplete="email" required />
        </div>
      </div>

      <div className="fields fields--2">
        <div className="field">
          <label htmlFor="company">
            Company <span className="opt">(optional)</span>
          </label>
          <input id="company" name="company" className="input" autoComplete="organization" />
        </div>
        <div className="field">
          <label htmlFor="asin">
            ASIN or listing URL <span className="opt">(optional)</span>
          </label>
          <input id="asin" name="asin" className="input" autoComplete="off" spellCheck={false} />
        </div>
      </div>

      <div className="field">
        <label htmlFor="situation">What’s the situation?</label>
        <select
          id="situation"
          name="situation"
          className="select"
          required
          value={situation}
          onChange={(event) => setSituation(event.target.value)}
        >
          <option value="" disabled>
            Choose one
          </option>
          {situations.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="field">
        <legend>
          Documents involved <span className="opt">(optional)</span>
        </legend>
        <div className="chips">
          {documentTypes.map((doc) => (
            <label key={doc} className="chip">
              <input type="checkbox" name="documents" value={doc} />
              {doc}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="message">What happened?</label>
        <textarea id="message" name="message" className="textarea" rows={7} required aria-describedby="message-hint" />
        <p id="message-hint" className="hint">
          If you have an Amazon notice, paste its text here. Otherwise, describe the product and what you’re
          preparing for.
        </p>
      </div>

      <div className="visually-hidden" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this field empty</label>
        <input id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
      </div>

      {status.state === "error" && (
        <p className="alert" role="alert">
          {status.message} You can also email <a href={`mailto:${site.email}`}>{site.email}</a> directly.
        </p>
      )}

      <div className="contact-form__submit">
        <button type="submit" className="btn btn--primary" disabled={sending}>
          {sending ? "Sending…" : "Send for a free first look"}
        </button>
        <p className="hint">This form doesn’t accept files. I’ll tell you how to send documents when I reply.</p>
      </div>
    </form>
  );
}
