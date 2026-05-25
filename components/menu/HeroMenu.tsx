export default function HeroMenu() {
  return (
    <section className="hero hero-page" aria-label="Menu Kafeterky">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/leila18.jpg"
          alt="Kafeterka – latte art v ruce"
          loading="eager"
        />
      </div>
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container">
        <div className="hero-content" style={{ textAlign: "center" }}>
          <h1 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>
            Přijďte si k nám na
            <br />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic" }}>
              matchu, dort, kafe nebo sandwich.
            </span>
          </h1>
          <p className="hero-sub" style={{ textAlign: "center", margin: "0 auto 44px" }}>
            Dorty pečeme každý den s výběrem z nejlepších surovin — kvůli vzpomínkám a chutím, které zůstávají.
          </p>
          <div className="hero-cta">
            <a href="#menu-nabidka" className="btn btn-white">Objednat</a>
            <a href="/#rezervace" className="btn btn-ghost-white">Rezervovat</a>
          </div>
        </div>
      </div>
    </section>
  );
}
