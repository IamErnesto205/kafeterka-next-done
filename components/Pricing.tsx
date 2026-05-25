function CheckIcon() {
  return (
    <svg className="p-check" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8 L6.5 12.5 L14 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Pricing() {
  return (
    <section className="pricing section" id="nabidka">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Ceny</span>
          <h2>Naše nabídka</h2>
          <p>Orientační ceny našich nejoblíbenějších položek</p>
        </div>

        <div className="pricing-grid">

          <div className="pricing-card reveal">
            <div className="p-badge">Nejoblíbenější</div>
            <h3>Kousek dortu</h3>
            <p className="p-sub">Čerstvý dort na místě</p>
            <div className="price">
              <span className="price-num">65 Kč</span>
              <span className="price-unit">za porci</span>
            </div>
            <a href="#kontakt" className="p-btn">Více informací</a>
            <div className="p-features">
              <div className="p-feature"><CheckIcon />Pečeme každý den</div>
              <div className="p-feature"><CheckIcon />Bez umělých přísad</div>
              <div className="p-feature"><CheckIcon />Domácí recepty</div>
            </div>
          </div>

          <div className="pricing-card featured reveal reveal-d2">
            <div className="p-badge">Na objednávku</div>
            <h3>Celý dort</h3>
            <p className="p-sub">Na objednávku</p>
            <div className="price">
              <span className="price-num">Od 450 Kč</span>
              <span className="price-unit">dle velikosti</span>
            </div>
            <a href="#kontakt" className="p-btn">Objednat</a>
            <div className="p-features">
              <div className="p-feature"><CheckIcon />Vlastní design</div>
              <div className="p-feature"><CheckIcon />Speciální příležitosti</div>
              <div className="p-feature"><CheckIcon />Domácí krémy</div>
              <div className="p-feature"><CheckIcon />Komunikace změn</div>
              <div className="p-feature"><CheckIcon />Kvalitní ingredience</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
