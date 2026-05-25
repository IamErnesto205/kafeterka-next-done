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
        <div className="hero-content">
          <div className="hero-badge">Dneska v Kafeterce</div>
          <h1>Co máme dnes</h1>
          <p className="hero-sub">
            Dorty pečeme každý den s výběrem z nejlepších surovin — kvůli vzpomínkám a chutím, které zůstávají.
          </p>
          <div className="hero-cta">
            <a href="#menu-nabidka" className="btn btn-white">Objednat</a>
            <a href="/#rezervace" className="btn btn-ghost-white">Rezervovat</a>
          </div>
        </div>
      </div>

      <div className="hero-scroll" aria-hidden="true">
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
}
