import { Link } from "react-router";
import { Compare } from "../components/Compare";
import { CtaBand } from "../components/CtaBand";
import { FindingItem, ReportShell, SeverityTag } from "../components/Report";
import { ServiceIndex } from "../components/ServiceIndex";
import { sampleReview } from "../content/sample-review";
import { services } from "../content/services";
import { pageMeta } from "../lib/meta";
import { scopeStatement, site } from "../site";
import "./home.css";

export const meta = () => pageMeta({ path: "/" });

const checks = [
  ["Model and variant numbers", "The same product written three different ways across a report, an SDS and a listing."],
  ["Battery details", "Battery model, cell type, watt-hours and count across the UN38.3 summary, SDS and listing."],
  ["Who’s named", "Whether the brand, manufacturer and importer on each document match the brand you sell under."],
  ["Age grading", "The listing’s age range against the certificate and test report, where applicable."],
  ["Labs, dates and locations", "Which lab tested what, when and where, and whether the certificate agrees."],
  ["Listing fields", "Battery and compliance attributes on Amazon against what the documents actually say."],
];

const steps = [
  {
    title: "Send what you have",
    text: "Tell me what happened, or what you’re launching, and share the notice and documents you already have. The free first look comes first.",
    eg: "For example: the Amazon notice, a CPC, the UN38.3 summary, the SDS and your listing details.",
  },
  {
    title: "I compare the full document set",
    text: "Every document is read against the others, against the product and against your listing: model numbers, battery data, named parties, dates and labs.",
  },
  {
    title: "I flag what doesn’t line up",
    text: "Each issue is named, quoted from the documents and given a priority, so you know what matters and what can wait.",
    flags: true,
  },
  {
    title: "You get a clear action list",
    text: "Questions to send your supplier, corrections to make to the listing, and a checklist for resubmitting. For rejection reviews, I can re-check the corrected package.",
  },
];

const audiences = [
  { title: "You have an Amazon compliance notice", text: "A document request, rejection or suppressed listing, often with a vague reason attached.", slug: "rejection-review" },
  { title: "You’re launching a battery-powered product", text: "A new SKU, variant or supplier where the UN38.3 summary, SDS and listing need to agree.", slug: "battery-sku-readiness" },
  { title: "You sell children’s products in the US", text: "Toys or baby products where a CPC may be requested and has to match the test report and listing.", slug: "childrens-product-certificate" },
  { title: "You have several regulated SKUs", text: "A growing catalog, a new factory, or a busy season coming up.", slug: "catalog-document-audit" },
];

export default function Home() {
  const [first, ...rest] = sampleReview.findings;
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));

  return (
    <>
      {/* Hero ------------------------------------------------------------ */}
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__copy">
            <h1>Amazon compliance documents, checked before they cost you a listing.</h1>
            <p className="lede hero__lede">
              Averis cross-checks CPCs, UN38.3 summaries, SDS files, FCC documentation, test reports and your Amazon
              listing data for inconsistencies, before you submit or resubmit.
            </p>
            <div className="btn-row hero__ctas">
              <Link to="/contact" className="btn btn--primary">
                Get a free first look
              </Link>
              <Link to="/sample-review" className="btn btn--secondary">
                See a sample review
              </Link>
            </div>
            <p className="hero__human">You send what you have. I’ll tell you what doesn’t line up.</p>
            <p className="hero__facts">
              <span>Fixed prices from $195</span>
              <span className="hero__sep" aria-hidden="true">
                ·
              </span>
              <span>Most reviews back in 24–48 hours</span>
            </p>
          </div>

          <div className="hero__example">
            <Compare
              size="lg"
              intro
              field="Battery model"
              rows={[
                { source: "Amazon listing", value: "LP-503040" },
                { source: "UN38.3 summary", value: "LP-503040" },
                { source: "Safety data sheet", value: "LP-503045" },
              ]}
              flag={{ row: 2, against: 1, mode: "chars" }}
              note="The supplier’s SDS references a different battery model."
            />
            <p className="hero__caption">A fictional example of what a review turns up.</p>
          </div>
        </div>
      </section>

      {/* Problem ---------------------------------------------------------- */}
      <section className="band band--wash" aria-labelledby="problem-title">
        <div className="wrap">
          <div className="problem__intro">
            <h2 id="problem-title">Documents can be valid individually and still fail together.</h2>
            <div>
              <p>
                Your lab wrote the test report. Your supplier sent the SDS. Your team wrote the listing. Each can be
                correct on its own terms and still disagree with the others on a model number, a battery, a brand name
                or an age grade.
              </p>
              <p>
                When documents are requested, they tend to be read as a set. If they don’t clearly describe the same
                product, the answer is often a rejection that says little more than “insufficient documentation”.
              </p>
            </div>
          </div>

          <figure className="fragments">
            <div className="fragments__row">
              <div className="frag">
                <p className="frag__doc">Test report</p>
                <p className="frag__line">
                  <span className="frag__label">Model</span>
                  <span className="frag__value id">AB-200</span>
                </p>
              </div>
              <div className="frag">
                <p className="frag__doc">Safety data sheet</p>
                <p className="frag__line">
                  <span className="frag__label">Product model</span>
                  <span className="frag__value id">
                    AB-200<mark>B</mark>
                  </span>
                </p>
              </div>
              <div className="frag">
                <p className="frag__doc">Amazon listing</p>
                <p className="frag__line">
                  <span className="frag__label">Model number</span>
                  <span className="frag__value id">
                    AB
                    <mark className="frag__gap">
                      <span className="visually-hidden">(missing hyphen)</span>
                    </mark>
                    200
                  </span>
                </p>
              </div>
            </div>
            <figcaption className="fragments__caption">
              <strong>One product, three identities.</strong> Sometimes nothing is missing — the documents just don’t
              agree.
            </figcaption>
          </figure>

          <div className="checks">
            <h3>What I check across the set</h3>
            <dl className="checks__grid">
              {checks.map(([term, detail]) => (
                <div key={term}>
                  <dt>{term}</dt>
                  <dd>{detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Services ---------------------------------------------------------- */}
      <section className="band" id="services" aria-labelledby="services-title">
        <div className="wrap">
          <div className="section-intro">
            <h2 id="services-title">Four fixed-price reviews</h2>
            <p>One for a problem you already have, three for products you’re preparing. Each has a set price and a clear scope.</p>
          </div>
          <ServiceIndex />
          <div className="first-look-note">
            <p>
              <strong>Not sure which one you need?</strong> Start with a free first look. I’ll point out the one or two
              most obvious issues and tell you whether a paid review is worth it.
            </p>
            <Link to="/contact" className="btn btn--primary">
              Get a free first look
            </Link>
          </div>
        </div>
      </section>

      {/* Sample ------------------------------------------------------------ */}
      <section className="band band--wash" aria-labelledby="sample-title">
        <div className="wrap sample">
          <div className="sample__intro">
            <h2 id="sample-title">What you get back</h2>
            <p>
              A written report you can forward to your supplier. Every finding shows the documents involved, the values
              that conflict, how much it matters and what to do about it.
            </p>
            <ul className="sample__legend">
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
            <Link to="/sample-review" className="more">
              Read the full sample review
            </Link>
          </div>
          <ReportShell titleId="home-report">
            <FindingItem finding={first} number={1} open />
            {rest.map((finding, i) => (
              <FindingItem key={finding.title} finding={finding} number={i + 2} />
            ))}
          </ReportShell>
        </div>
      </section>

      {/* Process ----------------------------------------------------------- */}
      <section className="band" id="how-it-works" aria-labelledby="process-title">
        <div className="wrap process">
          <div className="process__intro">
            <h2 id="process-title">How a review works</h2>
            <p>It starts with a message, not a sales call. Most of it happens over email.</p>
          </div>
          <ol className="steps">
            {steps.map((step, i) => (
              <li key={step.title} className="step">
                <span className="step__num" aria-hidden="true">
                  {i + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  {step.eg && <p className="step__eg">{step.eg}</p>}
                  {step.flags && (
                    <ul className="step__flags" aria-label="For example">
                      <li>
                        Battery model mismatch <SeverityTag severity="high" />
                      </li>
                      <li>
                        Listing battery count <SeverityTag severity="medium" />
                      </li>
                      <li>
                        SDS issue date <SeverityTag severity="low" />
                      </li>
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Audience ---------------------------------------------------------- */}
      <section className="band band--wash" aria-labelledby="audience-title">
        <div className="wrap audience-wrap">
          <h2 id="audience-title">You’ll probably want a review if…</h2>
          <div>
            <ul className="audience">
              {audiences.map((a) => {
                const service = bySlug[a.slug];
                return (
                  <li key={a.slug}>
                    <Link to={`/services#${a.slug}`} className="audience__row">
                      <span className="audience__text">
                        <span className="audience__title">{a.title}</span>
                        <span className="audience__detail">{a.text}</span>
                      </span>
                      <span className="audience__svc">
                        {service.shortName} · {service.price}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="audience__partners">
              Work at an Amazon agency, prep centre, sourcing company or shipping firm? Averis can take document-review
              cases that fall outside your team’s scope. <Link to="/contact?topic=referral">Let’s talk about referrals</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Founder ----------------------------------------------------------- */}
      <section className="band" aria-labelledby="founder-title">
        <div className="wrap founder">
          <div className="founder__words">
            <h2 id="founder-title" className="visually-hidden">
              Who you’ll be working with
            </h2>
            <blockquote className="founder__quote">
              <p>
                Averis is run by {site.founder}. I do every review myself, so the person who reads your documents is also
                the person who replies to your email.
              </p>
            </blockquote>
            <p className="founder__more">
              The work is deliberately narrow: the documents that sit between your supplier, your product and your
              Amazon listing. I’ll tell you plainly if I don’t think you need a paid review.
            </p>
            <p className="founder__sign">
              — {site.founder} · <Link to="/about">More about how I work</Link>
            </p>
          </div>

          <div className="scope">
            <div>
              <h3>What I do</h3>
              <ul className="ticks">
                <li>Read the notice and the documents you already have</li>
                <li>Compare them with each other, the product and the listing</li>
                <li>Flag inconsistencies and missing information, in order of priority</li>
                <li>Write the questions to send your supplier</li>
              </ul>
            </div>
            <div>
              <h3>What I don’t do</h3>
              <ul className="crosses">
                <li>Contact Amazon on your behalf</li>
                <li>Give legal advice</li>
                <li>Test products or issue certificates</li>
                <li>Create, alter or “fix” documents</li>
                <li>Guarantee approval by Amazon or any regulator</li>
              </ul>
            </div>
            <p className="scope-note scope__note">{scopeStatement}</p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
