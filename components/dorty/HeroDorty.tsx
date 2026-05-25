export default function HeroDorty() {
  return (
    <section className="hero hero-page" aria-label="Dorty na objednávku">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/dort-hero.png"
          alt="Kafeterka – dort na objednávku"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-content" style={{ textAlign: "center" }}>
          <div className="hero-badge">Na míru pro každou příležitost</div>
          <h1>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>Dorty</span>
            {" "}na objednávku
          </h1>
          <p className="hero-sub" style={{ textAlign: "center", margin: "0 auto 44px" }}>
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
