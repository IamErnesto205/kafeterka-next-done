"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "@/components/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);
  const activeStyle = { color: "#1E1E1A", fontWeight: 700 };

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
              <Logo height={48} className="logo-svg" />
            </a>

            <nav className="nav" aria-label="Hlavní navigace">
              <a href="/" style={isActive("/") ? activeStyle : undefined}>Domů</a>
              <a href="/menu" style={isActive("/menu") ? activeStyle : undefined}>Menu</a>
              <a href="/kontakt" style={isActive("/kontakt") ? activeStyle : undefined}>Kontakt</a>
              <a href="/dorty-na-objednavku" style={isActive("/dorty-na-objednavku") ? activeStyle : undefined}>Dorty</a>
              <a href="/fotogalerie" style={isActive("/fotogalerie") ? activeStyle : undefined}>Fotogalerie</a>
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
          <a href="/" onClick={closeMenu} style={isActive("/") ? activeStyle : undefined}>Domů</a>
          <a href="/menu" onClick={closeMenu} style={isActive("/menu") ? activeStyle : undefined}>Menu</a>
          <a href="/kontakt" onClick={closeMenu} style={isActive("/kontakt") ? activeStyle : undefined}>Kontakt</a>
          <a href="/dorty-na-objednavku" onClick={closeMenu} style={isActive("/dorty-na-objednavku") ? activeStyle : undefined}>Dorty</a>
          <a href="/fotogalerie" onClick={closeMenu} style={isActive("/fotogalerie") ? activeStyle : undefined}>Fotogalerie</a>
        </nav>
        <div className="mobile-cta">
          <a href="/kontakt#rezervace" className="btn btn-outline" onClick={closeMenu}>Rezervace</a>
          <a href="/dorty-na-objednavku#objednat" className="btn btn-primary" onClick={closeMenu}>Objednat dort</a>
        </div>
      </div>
    </>
  );
}
