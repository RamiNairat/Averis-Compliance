import { pageMeta } from "../lib/meta";
import { site } from "../site";
import "./text-page.css";

export const meta = () =>
  pageMeta({
    path: "/terms",
    title: "Terms of service",
    description: "The terms that apply when you engage Averis Compliance for a document review.",
  });

export default function Terms() {
  return (
    <>
      <header className="page-head">
        <div className="wrap">
          <h1>Terms of service</h1>
          <p className="lede">By engaging Averis Compliance, you agree to the following terms.</p>
        </div>
      </header>

      <div className="wrap band text-page">
        <section>
          <h2>Scope of the service</h2>
          <div>
            <p>
              Averis Compliance provides document review and operational compliance support for sellers and brands. The
              analysis is based on the documents and information you provide and on professional experience with
              marketplace document requests.
            </p>
            <p>
              Averis is not a law firm and does not provide legal advice. The service is not a substitute for legal
              counsel, laboratory testing or certification by an accredited body. Averis does not issue certificates and
              does not communicate with Amazon on your behalf.
            </p>
          </div>
        </section>
        <section>
          <h2>No guarantee of outcome</h2>
          <div>
            <p>
              Averis cannot guarantee that Amazon, a regulator or any other party will accept your documents or
              reinstate a listing. Their review processes are their own and can change without notice.
            </p>
            <p>
              Payment is for the time and expertise spent reviewing your documents and preparing findings, not for a
              specific outcome.
            </p>
          </div>
        </section>
        <section>
          <h2>Your responsibility</h2>
          <div>
            <p>
              You are responsible for the accuracy and authenticity of the documents you submit to Amazon or anyone
              else. Averis does not create, modify or backdate documents.
            </p>
            <p>
              Averis does not work with fake, forged or altered documents. If such documents are identified, the service
              may be discontinued.
            </p>
          </div>
        </section>
        <section>
          <h2>Limitation of liability</h2>
          <div>
            <p>
              Averis Compliance is not liable for any direct, indirect, incidental or consequential damages resulting
              from the use of its services, including listing suppression, account suspension or loss of revenue.
            </p>
          </div>
        </section>
        <section>
          <h2>Right to decline</h2>
          <div>
            <p>
              Averis may decline or discontinue an engagement, particularly where it involves unethical practices or
              documents that raise integrity concerns.
            </p>
          </div>
        </section>
        <section>
          <h2>Contact</h2>
          <div>
            <p>
              Questions about these terms: <a href={`mailto:${site.email}`}>{site.email}</a>.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
