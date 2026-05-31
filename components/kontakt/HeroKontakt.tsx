export default function HeroKontakt() {
  return (
    <section className="hero hero-page">
      <div className="hero-bg">
        <img
          src="/images/kafeterka/leila14.jpg"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-overlay" />
      </div>
      <div className="container">
        <div className="hero-content">
          <h1>
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontStyle: "normal" }}>Jsme tu</span>
            {" "}pro vás
          </h1>
          <p style={{ color: "#fff" }}>
            Najdete nás na Mariánském náměstí v Uherském Brodě.<br />
            Rezervujte si místo nebo nás kontaktujte.
          </p>
          <div className="hero-btns">
            <a href="#kontakt" className="btn btn-white">Kontakt</a>
          </div>
        </div>
      </div>
    </section>
  );
}
