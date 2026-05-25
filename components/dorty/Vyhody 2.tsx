export default function Vyhody() {
  return (
    <section className="vyhody section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Výhody</span>
          <h2>Proč si vybrat naše dorty</h2>
          <p>Každý dort je připraven s láskou a péčí</p>
        </div>

        <div className="vyhody-grid">

          {/* Card 1 – text only, small thumbnail, compact */}
          <div className="vyhody-card reveal">
            <div className="vyhody-card-body">
              <div className="vyhody-card-thumb">
                <img
                  src="https://images.unsplash.com/photo-1587668178277-295251f900ce?w=200&auto=format&fit=crop&q=82"
                  alt="Čerstvý dort"
                />
              </div>
              <p className="eyebrow">Čerstvost</p>
              <h3>Pečeme každý den podle objednávky</h3>
              <p>Dorty pečeme čerstvě přímo pro vás, nikdy neskladujeme hotové výrobky zbytečně dlouho.</p>
              <div className="vyhody-tags">
                <span className="vyhody-tag">Dort</span>
                <span className="vyhody-tag">Volba</span>
              </div>
              <a href="#objednat" className="link-arrow" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Více <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          {/* Card 2 – full-width photo at top, text below */}
          <div className="vyhody-card reveal reveal-d1">
            <div className="vyhody-card-img">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=700&auto=format&fit=crop&q=82"
                alt="Kvalitní přírodní ingredience"
              />
            </div>
            <div className="vyhody-card-body">
              <p className="eyebrow">Kvalita</p>
              <h3>Přírodní a vybrané podle vašich přání</h3>
              <p style={{ fontSize: "0.78rem", fontWeight: 600, color: "var(--green)", margin: "6px 0 8px", letterSpacing: "0.04em" }}>
                Poctivé
              </p>
              <p>Používáme jen nejlepší lokální ingredience bez zbytečných příměsí.</p>
            </div>
          </div>

          {/* Card 3 – featured, larger photo, more text */}
          <div className="vyhody-card featured reveal reveal-d2">
            <div className="vyhody-card-img lg">
              <img
                src="https://images.unsplash.com/photo-1535141192574-5d4897c12636?w=700&auto=format&fit=crop&q=82"
                alt="Dort navržený na míru"
              />
            </div>
            <div className="vyhody-card-body">
              <p className="eyebrow">Design</p>
              <h3>Dorty navržené přesně podle vašich představ</h3>
              <p>
                Každý dort je unikátní výtvor s osobní konzultací — od příchutě po vizuální zpracování.
                Rádi se přizpůsobíme každé příležitosti a vašim konkrétním požadavkům.
              </p>
              <a href="#objednat" className="link-arrow" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6 }}>
                Kontaktovat <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
