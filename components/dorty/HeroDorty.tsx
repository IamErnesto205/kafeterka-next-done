export default function HeroDorty() {
  return (
    <section className="hero hero-page" aria-label="Dorty na objednávku">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/gm38.jpg"
          alt="Kafeterka – dort na objednávku"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">Na míru pro každou příležitost</div>
          <h1>Dorty na objednávku</h1>
          <p className="hero-sub">
            Každý dort přizpůsobený vaší oslavě a vašim představám, pečený čerstvě s poctivými ingrediencemi.
          </p>
          <div className="hero-cta">
            <a href="#objednat" className="btn btn-white">Objednat</a>
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
