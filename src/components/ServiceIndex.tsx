import { Link } from "react-router";
import { services } from "../content/services";
import "./service-index.css";

export function ServiceIndex({ open = false, headingLevel: Heading = "h3" }: { open?: boolean; headingLevel?: "h2" | "h3" }) {
  const Sub = Heading === "h2" ? "h3" : "h4";
  return (
    <ol className="svc-list">
      {services.map((service, i) => (
        <li key={service.slug} id={service.slug}>
          <details className="svc" open={open}>
            <summary className="svc__sum">
              <span className="svc__num">{String(i + 1).padStart(2, "0")}</span>
              <span className="svc__main">
                <Heading className="svc__name">{service.shortName}</Heading>
                <span className="svc__brief">{service.brief}</span>
              </span>
              <span className="svc__terms">
                <span className="svc__price">
                  {service.price} <small>{service.priceNote}</small>
                </span>
                <span className="svc__note">{service.turnaround}</span>
              </span>
              <span className="svc__toggle">
                <span className="svc__toggle-open">View scope</span>
                <span className="svc__toggle-close">Hide scope</span>
              </span>
            </summary>

            <div className="svc__detail">
              <div className="svc__lead">
                <p className="svc__full">{service.name}</p>
                <p>{service.summary}</p>
                <p className="svc__scope">
                  <strong>Scope:</strong> {service.scope}
                </p>
                {service.addOns.length > 0 && (
                  <ul className="svc__addons">
                    {service.addOns.map((addOn) => (
                      <li key={addOn.label}>
                        <span>{addOn.label}</span>
                        <strong>{addOn.price}</strong>
                      </li>
                    ))}
                  </ul>
                )}
                <Link to={`/contact?service=${service.slug}`} className="btn btn--secondary btn--sm">
                  Ask about this review
                </Link>
              </div>
              <div className="svc__lists">
                <div>
                  <Sub className="svc__list-title">Typical triggers</Sub>
                  <ul className="dots">
                    {service.triggers.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Sub className="svc__list-title">Documents reviewed</Sub>
                  <ul className="dots">
                    {service.reviewed.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Sub className="svc__list-title">You receive</Sub>
                  <ul className="ticks">
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <Sub className="svc__list-title">Not included</Sub>
                  <ul className="crosses">
                    {service.notIncluded.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </details>
        </li>
      ))}
    </ol>
  );
}
