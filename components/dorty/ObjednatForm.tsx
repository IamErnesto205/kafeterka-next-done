"use client";
import { useState, FormEvent } from "react";

export default function ObjednatForm() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="form-section" id="objednat">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Objednat</span>
          <h2>Vaše dort</h2>
          <p>Řekněte nám, co si představujete</p>
        </div>

        <div className="form-inner reveal">
          {sent ? (
            <div style={{ textAlign: "center", padding: "48px 0" }}>
              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" style={{ margin: "0 auto 20px", display: "block" }} aria-hidden="true">
                <circle cx="26" cy="26" r="24" stroke="#3F5F48" strokeWidth="1.8" />
                <path d="M14 26 L22 34 L38 18" stroke="#3F5F48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <h3 style={{ fontFamily: "var(--font-display)", color: "var(--kf-text)", marginBottom: 10 }}>Odesláno!</h3>
              <p>Ozve se vám co nejdříve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="form-field">
                <label className="form-label" htmlFor="jmeno">Jméno</label>
                <input
                  id="jmeno"
                  name="jmeno"
                  type="text"
                  className="form-input"
                  placeholder="Vaše jméno"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="vas@email.cz"
                  required
                />
              </div>

              <div className="form-field">
                <label className="form-label" htmlFor="zprava">Zpráva</label>
                <textarea
                  id="zprava"
                  name="zprava"
                  className="form-textarea"
                  placeholder="Popište svůj dort — příchu, velikost, příležitost..."
                  required
                />
              </div>

              <div className="form-checkbox-wrap">
                <input type="checkbox" id="souhlas" name="souhlas" required />
                <label htmlFor="souhlas">
                  Souhlasím s&nbsp;<a href="#" style={{ color: "var(--green)", textDecoration: "underline" }}>podmínkami</a> zpracování osobních údajů.
                </label>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center", padding: "16px" }}>
                Odeslat
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
