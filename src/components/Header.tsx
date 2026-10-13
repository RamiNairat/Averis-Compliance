import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import "./header.css";

const navItems = [
  { to: "/services", label: "Services" },
  { to: "/sample-review", label: "Sample review" },
  { to: "/about", label: "About" },
];

export function Wordmark() {
  return (
    <Link to="/" className="wordmark" aria-label="Averis Compliance, home">
      <span className="wordmark__name">Averis</span>
      <span className="wordmark__flag" aria-hidden="true" />
      <span className="wordmark__desc">Compliance document review</span>
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!open) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header" data-open={open}>
      <div className="wrap site-header__bar">
        <Wordmark />

        <nav className="site-nav" aria-label="Main">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className="site-nav__link">
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary btn--sm site-nav__cta">
            Get a free first look
          </Link>
        </nav>

        <button
          ref={buttonRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <nav id="mobile-nav" className="mobile-nav" aria-label="Main" hidden={!open}>
        <div className="wrap">
          {[...navItems, { to: "/contact", label: "Contact" }].map((item) => (
            <NavLink key={item.to} to={item.to} className="mobile-nav__link">
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary mobile-nav__cta">
            Get a free first look
          </Link>
        </div>
      </nav>
    </header>
  );
}
