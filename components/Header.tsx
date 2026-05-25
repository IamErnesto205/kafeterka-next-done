"use client";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <>
      <header className={`header${scrolled ? " scrolled" : ""}`} id="header">
        <div className="container">
          <div className="header-inner">
            <a href="/" className="logo" aria-label="Kafeterka – domovská stránka">
              <Logo height={34} className="logo-svg" />
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="/">Domů</a>
              <a href="/menu">Menu</a>
              <a href="/kontakt">Kontakt</a>
              <a href="/kontakt#rezervace">Rezervace</a>
              <a href="/dorty-na-objednavku">Dorty</a>
            </nav>

            <div className="header-actions">
              <a href="/kontakt#rezervace" className="btn btn-outline">Rezervace</a>
              <a href="/dorty-na-objednavku#objednat" className="btn btn-primary">Objednat</a>
            </div>

            <button
              className={`hamburger${menuOpen ? " open" : ""}`}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label="Otevřít menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav">
          <a href="/" onClick={closeMenu}>Domů</a>
          <a href="/menu" onClick={closeMenu}>Menu</a>
          <a href="/kontakt" onClick={closeMenu}>Kontakt</a>
          <a href="/kontakt#rezervace" onClick={closeMenu}>Rezervace</a>
          <a href="/dorty-na-objednavku" onClick={closeMenu}>Dorty</a>
        </nav>
        <div className="mobile-cta">
          <a href="/kontakt#rezervace" className="btn btn-outline" onClick={closeMenu}>Rezervace</a>
          <a href="/dorty-na-objednavku#objednat" className="btn btn-primary" onClick={closeMenu}>Objednat dort</a>
        </div>
      </div>
    </>
  );
}
