function CheckIcon() {
  return (
    <svg className="p-check" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8 L6.5 12.5 L14 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function TarifyCake() {
  return (
    <section className="pricing section" id="tarify">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Ceny</span>
          <h2>Velikosti a tarify</h2>
          <p>Vyberte si velikost, která vyhovuje vaší oslavě</p>
        </div>

        <div className="pricing-grid">

          <div className="pricing-card reveal">
            <div className="p-badge">Malý dort</div>
            <h3>Malý dort</h3>
            <p className="p-sub">Dort ad 6 porcí, ideální pro menší oslavu</p>
            <div className="price">
              <span className="price-num">450</span>
              <span className="price-unit">Kč</span>
            </div>
            <a href="#objednat" className="p-btn">Objednat</a>
            <div className="p-features">
              <div className="p-feature"><CheckIcon />Čerstvé ingredience</div>
              <div className="p-feature"><CheckIcon />Volba příchutí</div>
              <div className="p-feature"><CheckIcon />Jednoduché přizpůsobení</div>
            </div>
          </div>

          <div className="pricing-card featured reveal reveal-d2">
            <div className="p-badge">Střední dort</div>
            <h3>Střední dort</h3>
            <p className="p-sub">Dort ad 12 porcí, skvělý na větší příležitosti</p>
            <div className="price">
              <span className="price-num">750</span>
              <span className="price-unit">Kč</span>
            </div>
            <a href="#objednat" className="p-btn">Objednat</a>
            <div className="p-features">
              <div className="p-feature"><CheckIcon />Individuální úpravy</div>
              <div className="p-feature"><CheckIcon />Vlastní design</div>
              <div className="p-feature"><CheckIcon />Bez konzervantů</div>
              <div className="p-feature"><CheckIcon />Bez umělých barviv</div>
              <div className="p-feature"><CheckIcon />Osobní konzultace</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
