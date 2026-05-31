export default function Contact() {
  return (
    <section className="contact section" id="kontakt">
      <div className="container">
        <div className="reveal">
          <div className="contact-icon" aria-hidden="true">
            <img src="/images/icons/croisanz.svg" alt="" style={{ height: "120px", width: "auto" }} />
          </div>
          <h2>Máte další otázky?</h2>
          <p>Nejrychleji nás kontaktujete přes formulář nebo telefonicky.</p>
          <div className="contact-btns">
            <a href="/kontakt" className="btn btn-primary">Kontakt</a>
          </div>
        </div>
      </div>
    </section>
  );
}
