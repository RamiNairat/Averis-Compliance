import { Link } from "react-router";
import { scopeShort, site } from "../site";
import "./footer.css";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__top">
          <div>
            <p className="site-footer__mark">Averis</p>
            <p className="site-footer__desc">Product compliance document review.</p>
          </div>
          <nav aria-label="Footer" className="site-footer__nav">
            <Link to="/services">Services</Link>
            <Link to="/sample-review">Sample review</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
          </nav>
          <a className="site-footer__mail" href={`mailto:${site.email}`}>
            {site.email}
          </a>
        </div>
        <p className="site-footer__small">{scopeShort} Not affiliated with Amazon.com, Inc.</p>
        <p className="site-footer__small">
          © {new Date().getFullYear()} Averis Compliance · <Link to="/privacy">Privacy</Link> ·{" "}
          <Link to="/terms">Terms</Link>
        </p>
      </div>
    </footer>
  );
}
