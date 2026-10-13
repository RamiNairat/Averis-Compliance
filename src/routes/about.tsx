import { Link } from "react-router";
import { CtaBand } from "../components/CtaBand";
import { pageMeta } from "../lib/meta";
import { scopeStatement, site } from "../site";
import "./text-page.css";

export const meta = () =>
  pageMeta({
    path: "/about",
    title: "About",
    description:
      "Averis is a small, founder-run document review practice focused on the gap between supplier documents, the product and the Amazon listing.",
  });

export default function About() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>A small practice for one specific gap.</h1>
          <p className="lede">
            Averis is run by {site.founder}. It works on the space between the documents your suppliers produce and the
            product you sell on Amazon.
          </p>
        </div>
      </header>

      <div className="wrap">
        <dl className="facts">
          <div>
            <dt>Who reviews</dt>
            <dd>{site.founder}, personally</dd>
          </div>
          <div>
            <dt>How</dt>
            <dd>By email, with a written report</dd>
          </div>
          <div>
            <dt>Pricing</dt>
            <dd>
              Fixed, from $195 · <Link to="/services">all prices</Link>
            </dd>
          </div>
          <div>
            <dt>Turnaround</dt>
            <dd>About 24 hours to 5 business days</dd>
          </div>
          <div>
            <dt>First step</dt>
            <dd>
              <Link to="/contact">Free first look</Link>
            </dd>
          </div>
        </dl>
      </div>

      <div className="wrap band text-page">
        <section>
          <h2>Why Averis exists</h2>
          <div>
            <p>
              Compliance requests from marketplaces are often vague. A seller is told their documentation is
              insufficient, but not which document, which field or which value caused the problem.
            </p>
            <p>
              Every document in the package comes from somewhere different. A lab writes the test report. A battery
              supplier issues the UN38.3 summary and SDS. A factory fills in the certificate details. The seller’s own
              team writes the listing. Each party is responsible for its own document; nobody is responsible for whether
              they agree.
            </p>
            <p>
              That gap is where Averis works: reading the package as one set, and finding the model number, battery,
              date or listing field that doesn’t line up before someone else does.
            </p>
          </div>
        </section>

        <section>
          <h2>How I work</h2>
          <dl className="principles">
            <div>
              <dt>Directly</dt>
              <dd>I do every review myself. You talk to the person reading your documents, by email.</dd>
            </div>
            <div>
              <dt>In writing</dt>
              <dd>
                Every paid review ends in a written report you can forward to your supplier or keep on file. See the{" "}
                <Link to="/sample-review">sample review</Link>.
              </dd>
            </div>
            <div>
              <dt>At a fixed price</dt>
              <dd>
                Each service has a set price and a stated scope, listed on the <Link to="/services">services page</Link>.
              </dd>
            </div>
            <div>
              <dt>Honestly</dt>
              <dd>If your documents look fine, I’ll say so. If a paid review won’t help, I’ll say that before you pay.</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2>What I won’t do</h2>
          <div>
            <p>
              I don’t create, alter or backdate documents, and I won’t work on a case where I believe documents have
              been altered. Corrected documents have to come from whoever issued them. I also don’t speak to Amazon on
              your behalf, give legal advice or predict how a marketplace will decide.
            </p>
          </div>
        </section>

        <section>
          <h2>Referrals</h2>
          <div>
            <p>
              If you run an Amazon agency, a prep centre, a sourcing company or a shipping firm, your clients probably
              bring you document problems that sit outside your team’s scope. Averis can take those cases as referrals.{" "}
              <Link to="/contact?topic=referral">Get in touch</Link> to talk about how that would work.
            </p>
            <p className="scope-note">
              {scopeStatement} Averis is independent and not affiliated with Amazon.com, Inc.
            </p>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
