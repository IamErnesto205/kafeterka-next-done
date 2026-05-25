function Check() {
  return (
    <svg className="p-check" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M2 8 L6.5 12.5 L14 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function NaseMenuPricing() {
  return (
    <section className="menu-pricing section" id="menu-nabidka">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Nabídka</span>
          <h2>Naše menu</h2>
          <p>Každý den pečeme čerstvé dorty a připravíme nejlepší kávu.</p>
        </div>

        <div className="pricing-grid">

          <div className="pricing-card reveal">
            <div className="p-badge">Čerstvé dorty každý den</div>
            <h3>Domácí dorty</h3>
            <p className="p-sub">Pečeme každý den — přijďte ochutnat</p>
            <div className="price">
              <span className="price-num">120 Kč</span>
              <span className="price-unit">od / kousek</span>
            </div>
            <a href="/dorty-na-objednavku#objednat" className="p-btn">Objednat</a>
            <div className="p-features">
              <div className="p-feature"><Check />Čokoládový dort s ornamentem</div>
              <div className="p-feature"><Check />Jahodový dort s pudingem</div>
              <div className="p-feature"><Check />Tvarohový cheesecake</div>
            </div>
          </div>

          <div className="pricing-card featured reveal reveal-d2">
            <div className="p-badge">Speciální káva s láskou</div>
            <h3>Speciální káva</h3>
            <p className="p-sub">Výběrová káva připravená s řemeslem</p>
            <div className="price">
              <span className="price-num">65 Kč</span>
              <span className="price-unit">od / šálek</span>
            </div>
            <a href="/#rezervace" className="p-btn">Rezervovat</a>
            <div className="p-features">
              <div className="p-feature"><Check />Espresso ze sezónní kávy</div>
              <div className="p-feature"><Check />Cappuccino s třtinovým cukrem</div>
              <div className="p-feature"><Check />Filtrovaná káva</div>
              <div className="p-feature"><Check />Domácí pěnové mléko</div>
              <div className="p-feature"><Check />Čerstvě připraveno</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
