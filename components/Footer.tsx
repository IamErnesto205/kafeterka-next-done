import Logo from "@/components/Logo";

export default function Footer() {
  return (
    <footer className="footer" id="rezervace">
      <div className="container">
        <div className="footer-main">

          <div className="footer-brand">
            <a href="/" aria-label="Kafeterka – domovská stránka" style={{ display: "inline-block", color: "#fff" }}>
              <Logo height={40} />
            </a>
            <p>Útulná kavárna na Mariánském náměstí v Uherském Brodě. Čerstvé dorty a výběrová káva každý den.</p>
            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                </svg>
              </a>
              <a href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#" aria-label="Google">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M21.8 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.5c-.2 1.2-1 2.3-2 3v2.5h3.3c1.9-1.8 3-4.4 3-7.3z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M12 22c2.7 0 5-.9 6.6-2.5l-3.2-2.5c-.9.6-2 1-3.4 1-2.6 0-4.8-1.8-5.6-4.1H3.1v2.5C4.7 19.9 8.1 22 12 22z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M6.4 13.9c-.2-.6-.3-1.2-.3-1.9s.1-1.3.3-1.9V7.6H3.1C2.4 9 2 10.5 2 12s.4 3 1.1 4.4l3.3-2.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M12 5.9c1.5 0 2.8.5 3.8 1.5l2.8-2.8C16.9 2.9 14.7 2 12 2 8.1 2 4.7 4.1 3.1 7.6l3.3 2.5C7.2 7.7 9.4 5.9 12 5.9z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="mailto:kafeterka@example.cz" aria-label="E-mail">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="3" stroke="currentColor" strokeWidth="1.8"/>
                  <path d="M2 8l10 7 10-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Navigace</h4>
            <ul>
              <li><a href="#">Domů</a></li>
              <li><a href="#o-nas">Menu</a></li>
              <li><a href="#rezervace">Rezervace</a></li>
              <li><a href="#kontakt">Kontakt</a></li>
              <li><a href="#dorty">Dorty</a></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kontakt</h4>
            <ul>
              <li><a href="#">Mariánské náměstí</a></li>
              <li><a href="#">Uherský Brod</a></li>
              <li><a href="tel:+420123456789">+420 xxx xxx xxx</a></li>
              <li><a href="mailto:kafeterka@example.cz">kafeterka@example.cz</a></li>
            </ul>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Kafeterka. Všechna práva vyhrazena.</p>
          <div className="footer-legal">
            <a href="#">Ochrana osobních údajů</a>
            <a href="#">Podmínky použití</a>
            <a href="#">Nastavení souborů cookie</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
