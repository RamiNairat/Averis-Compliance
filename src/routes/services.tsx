import { Link } from "react-router";
import { CtaBand } from "../components/CtaBand";
import { ServiceIndex } from "../components/ServiceIndex";
import { pageMeta } from "../lib/meta";
import { scopeStatement, site } from "../site";
import "./services.css";

export const meta = () =>
  pageMeta({
    path: "/services",
    title: "Services and pricing",
    description:
      "Fixed-price compliance document reviews: Rejection Review ($195), Battery SKU Readiness ($295), US Children’s Product Certificate Review ($250) and Catalog Document Audit ($750).",
  });

const faqs = [
  {
    q: "Is the free first look actually free?",
    a: "Yes. It’s an initial triage: I read the notice or your description, point out the one or two most obvious issues, and tell you whether a paid review looks useful. It isn’t a full review and there’s no written report.",
  },
  {
    q: "Will a review get my listing approved?",
    a: "No one outside Amazon can promise that, and I don’t. A review lowers the chance that you submit documents that contradict each other or your listing. Amazon makes its own decisions on its own timeline.",
  },
  {
    q: "Do you contact Amazon or my supplier for me?",
    a: "No. You stay in control of your account and your supplier relationship. I give you the findings and the exact questions to send.",
  },
  {
    q: "Do you create or edit documents?",
    a: "No. I don’t create, alter or backdate documents, and I won’t work with documents I believe have been altered. Corrected documents need to come from whoever issued them: your supplier, manufacturer or lab.",
  },
  {
    q: "How do I send my documents?",
    a: "Start with the contact form. I’ll reply by email and say how to send the files for your case. Please don’t post confidential supplier documents to public “anyone with the link” shares.",
  },
  {
    q: "What if my situation doesn’t fit these four services?",
    a: "Tell me anyway. If it’s outside what I review, I’ll tell you.",
  },
];

export default function Services() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Services and pricing</h1>
          <p className="lede">
            Four fixed-price reviews, each with a stated scope, a turnaround and a list of what it doesn’t cover. Prices
            in US dollars; turnaround times are approximate.
          </p>
        </div>
      </header>

      <section className="band services-index" id="pricing" aria-label="Services">
        <div className="wrap">
          <ServiceIndex open headingLevel="h2" />
        </div>
      </section>

      <section className="band band--wash" id="first-look" aria-labelledby="first-look-title">
        <div className="wrap first-look">
          <div>
            <h2 id="first-look-title">Not sure yet? Start with a free first look.</h2>
            <p className="first-look__lede">
              A quick triage before you pay for anything. Useful if you have a notice and don’t know where the
              problem is, or a launch coming and aren’t sure your documents agree.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Get a free first look
            </Link>
          </div>
          <div className="first-look__lists">
            <div>
              <h3>What you get</h3>
              <ul className="ticks">
                <li>An initial read of the notice or situation</li>
                <li>The one or two most obvious issues, if there are any</li>
                <li>Whether a paid review looks useful, and which one</li>
              </ul>
            </div>
            <div>
              <h3>What it isn’t</h3>
              <ul className="crosses">
                <li>A full document-by-document review</li>
                <li>A written findings report</li>
                <li>An obligation to buy anything</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="faq-title">
        <div className="wrap faq">
          <h2 id="faq-title">Questions</h2>
          <div className="faq__list">
            {faqs.map((faq) => (
              <details key={faq.q} className="faq__item">
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
            <details className="faq__item">
              <summary>Can I hire Averis through Upwork?</summary>
              <p>
                Yes. If you’d rather pay through a platform, Averis is also on{" "}
                <a href={site.upworkUrl} rel="noopener">
                  Upwork
                </a>
                .
              </p>
            </details>
            <p className="scope-note faq__scope">{scopeStatement}</p>
          </div>
        </div>
      </section>

      <CtaBand title="Not sure which review fits?" />
    </>
  );
}
