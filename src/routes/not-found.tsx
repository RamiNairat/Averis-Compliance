import { Link } from "react-router";
import { pageMeta } from "../lib/meta";

export const meta = () => pageMeta({ path: "/404", title: "Page not found", noindex: true });

export default function NotFound() {
  return (
    <div className="wrap band">
      <h1>There’s nothing at this address.</h1>
      <p className="lede" style={{ marginTop: 14, maxWidth: "34rem" }}>
        Some older links to the site have moved. Here’s where you probably wanted to go:
      </p>
      <div className="btn-row" style={{ marginTop: 26 }}>
        <Link to="/contact" className="btn btn--primary">
          Get a free first look
        </Link>
        <Link to="/services" className="btn btn--secondary">
          Services
        </Link>
        <Link to="/sample-review" className="btn btn--secondary">
          Sample review
        </Link>
        <Link to="/" className="btn btn--secondary">
          Home
        </Link>
      </div>
    </div>
  );
}
