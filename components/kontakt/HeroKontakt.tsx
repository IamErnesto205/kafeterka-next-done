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
          <span className="label label-light">Přijďte</span>
          <h1>Jsme tu pro vás</h1>
          <p>
            Najdete nás na Mariánském náměstí v Uherském Brodě.<br />
            Rezervujte si místo nebo nás kontaktujte.
          </p>
          <div className="hero-btns">
            <a href="#rezervace" className="btn btn-white">Rezervovat</a>
            <a href="#kontakt" className="btn btn-ghost-white">Kontakt</a>
          </div>
        </div>
      </div>
    </section>
  );
}
