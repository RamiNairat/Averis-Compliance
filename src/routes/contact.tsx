import { ContactForm } from "../components/ContactForm";
import { pageMeta } from "../lib/meta";
import { site } from "../site";
import "./contact.css";

export const meta = () =>
  pageMeta({
    path: "/contact",
    title: "Get a free first look",
    description:
      "Tell Averis about your Amazon compliance notice or upcoming launch. You’ll get an initial triage: the most obvious issues and an honest view of whether a paid review would help.",
  });

export default function Contact() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Get a free first look.</h1>
          <p className="lede">
            Tell me what happened, or what you’re preparing to launch. I’ll reply with a quick triage: the one or two most
            obvious issues, and whether a paid review looks worth it. It’s not a full review.
          </p>
        </div>
      </header>

      <div className="wrap band contact">
        <ContactForm />

        <aside className="contact__aside" aria-label="About the first look">
          <section className="contact__next">
            <h2>What happens next</h2>
            <ol>
              <li>
                I read your message myself.
              </li>
              <li>
                I reply by email, normally within 24 hours, with a first read and, if useful, which review
                fits.
              </li>
              <li>
                If you go ahead, I tell you exactly which documents to send and how.
              </li>
            </ol>
          </section>

          <section className="contact__docs">
            <h2>About your documents</h2>
            <p>
              Supplier documents are often confidential. Please don’t share them through public “anyone with the link”
              URLs. Wait for my reply and send them directly.
            </p>
          </section>

          <section className="contact__direct">
            <h2>Prefer email or phone?</h2>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
            <p>
              <a href={site.phone.href}>{site.phone.display}</a>
            </p>
            <p className="hint">
              Rather hire through a platform? Averis is also on{" "}
              <a href={site.upworkUrl} rel="noopener">
                Upwork
              </a>
              .
            </p>
          </section>
        </aside>
      </div>
    </>
  );
}
