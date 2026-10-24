import React, { useEffect, useState } from "react";

const links = [
  { href: "#nasa-prica", label: "Naša porodica" },
  { href: "#proces-meda", label: "Kako nastaje med" },
  { href: "#price", label: "Priče iz košnice" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash);

  useEffect(() => {
    const updateActiveHash = () => setActiveHash(window.location.hash);
    window.addEventListener("hashchange", updateActiveHash);
    return () => window.removeEventListener("hashchange", updateActiveHash);
  }, []);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const desktopQuery = window.matchMedia("(min-width: 801px)");
    const closeMenu = () => setMenuOpen(false);

    document.addEventListener("keydown", closeOnEscape);
    desktopQuery.addEventListener("change", closeMenu);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      desktopQuery.removeEventListener("change", closeMenu);
    };
  }, [menuOpen]);

  return (
    <>
      <a className="skip-link" href="#sadrzaj">Preskoči na sadržaj</a>
      <header className="site-header">
        <a className="brand" href="#pocetna" aria-label="Farma meda — početna">
          <span className="brand__name">Farma meda</span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="glavna-navigacija"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__label">Meni</span>
          <span className="menu-toggle__icon" aria-hidden="true" />
        </button>
        <nav
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          id="glavna-navigacija"
          aria-label="Glavna navigacija"
        >
          {links.map(({ href, label }) => (
            <a
              href={href}
              key={href}
              aria-current={activeHash === href ? "page" : undefined}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
    </>
  );
}
