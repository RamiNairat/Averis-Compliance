import { Link } from "react-router";
import { site } from "../site";
import "./cta-band.css";

export function CtaBand({ title = "Have a compliance notice or a product going live?" }: { title?: string }) {
  return (
    <section className="cta-band" aria-labelledby="cta-band-title">
      <div className="wrap">
        <div className="cta-band__panel">
          <div className="cta-band__copy">
            <h2 id="cta-band-title">{title}</h2>
            <p>
              Send what you have. I’ll take a first look, point out one or two obvious issues, and tell you whether a
              paid review would actually help.
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/contact" className="btn btn--primary">
              Get a free first look
            </Link>
            <a className="cta-band__mail" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
