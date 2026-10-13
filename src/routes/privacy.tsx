import { pageMeta } from "../lib/meta";
import { site } from "../site";
import "./text-page.css";

export const meta = () =>
  pageMeta({
    path: "/privacy",
    title: "Privacy policy",
    description: "How Averis Compliance collects, uses and protects the information you send.",
  });

export default function Privacy() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Privacy policy</h1>
          <p className="lede">How Averis Compliance collects, uses and protects the information you send.</p>
        </div>
      </header>

      <div className="wrap band text-page">
        <section>
          <h2>What I collect</h2>
          <div>
            <p>When you contact Averis or engage a review, I may receive:</p>
            <ul className="dots">
              <li>Your name, email address and company</li>
              <li>ASINs, listing details and the text of Amazon notices</li>
              <li>Compliance documents such as test reports, certificates, SDS files and UN38.3 summaries</li>
              <li>Invoices and product photos, where relevant to a review</li>
            </ul>
          </div>
        </section>
        <section>
          <h2>How it’s used</h2>
          <div>
            <ul className="dots">
              <li>To perform the review you asked for</li>
              <li>To communicate with you about your case</li>
              <li>To keep reasonable records of past engagements</li>
            </ul>
            <p>
              I don’t sell, trade or rent your information, and I don’t share your documents with Amazon or your
              suppliers.
            </p>
          </div>
        </section>
        <section>
          <h2>Service providers</h2>
          <div>
            <p>
              The contact form is processed by Formspree, which delivers submissions to my email. The site is hosted on
              Vercel, which keeps standard server logs. Email is handled by Google. These providers process data under
              their own privacy policies.
            </p>
          </div>
        </section>
        <section>
          <h2>Retention</h2>
          <div>
            <p>
              I keep information only as long as needed to provide the service and maintain reasonable records of past
              engagements.
            </p>
          </div>
        </section>
        <section>
          <h2>Your rights</h2>
          <div>
            <p>
              You can ask for access to, correction of or deletion of your information at any time by emailing{" "}
              <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </section>
        <section>
          <h2>Security</h2>
          <div>
            <p>
              I take reasonable measures to protect your information and limit access to it. No method of transmission
              over the internet is completely secure, so I can’t guarantee absolute security.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
