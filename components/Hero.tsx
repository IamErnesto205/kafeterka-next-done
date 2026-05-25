export default function Hero() {
  return (
    <section className="hero" aria-label="Uvítání">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/leila1.jpg"
          alt="Kafeterka – interiér kavárny v Uherském Brodě"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="hero-deco" aria-hidden="true">
        <svg width="220" height="220" viewBox="0 0 220 220" fill="none">
          <path d="M110 200 C110 200 110 145 110 110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M110 110 C110 82 88 60 66 66 C44 72 44 96 66 103 C88 110 110 110 110 110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M110 110 C110 82 132 60 154 66 C176 72 176 96 154 103 C132 110 110 110 110 110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M110 110 C82 110 60 88 66 66 C72 44 96 44 103 66 C110 88 110 110 110 110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M110 110 C138 110 160 88 154 66 C148 44 124 44 117 66 C110 88 110 110 110 110" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
          <circle cx="110" cy="110" r="10" stroke="white" strokeWidth="1.8"/>
          <path d="M50 55 C38 42 26 48 32 60 C38 72 52 65 50 55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50 55 C38 68 30 80 42 85 C54 90 58 74 50 55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50 55 C62 42 74 48 68 60 C62 72 48 65 50 55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M50 55 C62 68 70 80 58 85 C46 90 42 74 50 55" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M175 40 C165 30 155 35 160 44 C165 53 177 47 175 40" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M175 40 C165 49 160 58 169 62 C178 66 180 54 175 40" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M175 40 C185 30 195 35 190 44 C185 53 173 47 175 40" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
          <path d="M175 40 C185 49 190 58 181 62 C172 66 170 54 175 40" stroke="white" strokeWidth="1.3" strokeLinecap="round"/>
        </svg>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Mariánské náměstí, Uherský Brod</div>
          <h1>Čerstvé dorty každý den v Uherském Brodě</h1>
          <p className="hero-sub">
            Kafeterka vás vítá na Mariánském náměstí. Domácí dorty a výběrová káva s poctivým základem.
          </p>
          <div className="hero-cta">
            <a href="#dorty" className="btn btn-white">Objednat</a>
            <a href="#rezervace" className="btn btn-ghost-white">Rezervovat</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
