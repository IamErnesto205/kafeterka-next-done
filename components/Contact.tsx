export default function Contact() {
  return (
    <section className="contact section" id="kontakt">
      <div className="container">
        <div className="reveal">
          <div className="contact-icon" aria-hidden="true">
            <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
              <path d="M26 46 C26 46 26 32 26 26" stroke="#3F5F48" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M26 26 C26 18 18 10 10 13 C2 16 2 26 10 29 C18 32 26 26 26 26" stroke="#3F5F48" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M26 26 C26 18 34 10 42 13 C50 16 50 26 42 29 C34 32 26 26 26 26" stroke="#3F5F48" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M26 26 C18 26 10 18 13 10 C16 2 26 2 29 10 C32 18 26 26 26 26" stroke="#3F5F48" strokeWidth="1.8" strokeLinecap="round"/>
              <path d="M26 26 C34 26 42 18 39 10 C36 2 26 2 23 10 C20 18 26 26 26 26" stroke="#3F5F48" strokeWidth="1.8" strokeLinecap="round"/>
              <circle cx="26" cy="26" r="5" stroke="#3F5F48" strokeWidth="1.8"/>
            </svg>
          </div>
          <h2>Máte další otázky?</h2>
          <p>Nejrychleji nás kontaktujete přes Instagram nebo telefonicky.</p>
          <div className="contact-btns">
            <a href="mailto:kafeterka@example.cz" className="btn btn-primary">Kontakt</a>
            <a href="#rezervace" className="btn btn-outline">Rezervovat stůl</a>
          </div>
        </div>
      </div>
    </section>
  );
}
