export default function HeroAkce() {
  return (
    <section className="hero hero-page" aria-label="Akce v Kafeterce">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/akce-hero.png"
          alt="Kafeterka – akce a oslavy v zahradě"
          loading="eager"
          style={{ objectPosition: "center 100%" }}
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-content" style={{ textAlign: "center" }}>
          <div className="hero-badge">Oslavy, sweet bary, firemní večírky</div>
          <h1>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>Akce</span>
            {" "}v Kafeterce
          </h1>
          <p className="hero-sub" style={{ textAlign: "center", margin: "0 auto 44px" }}>
            Hledáte místo nebo občerstvení pro svou oslavu, firemní večírek nebo jinou speciální příležitost? Rádi pomáháme vytvářet chvíle, na které se nezapomíná.
          </p>
          <div className="hero-cta">
            <a href="#kontakt-akce" className="btn btn-white">Ozvěte se nám</a>
          </div>
        </div>
      </div>

    </section>
  );
}
