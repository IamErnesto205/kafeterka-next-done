"use client";
import { useState } from "react";

export default function KontaktForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ jmeno: "", email: "", zprava: "", souhlas: false });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="kontakt-form-section section">
      <div className="container">
        <div className="kontakt-form-grid">
          <div className="kontakt-form-left reveal">
            <span className="label">Napište nám</span>
            <h2>Pošlete nám zprávu</h2>
            <p className="kontakt-form-lead">Máte dotazy nebo chcete rezervovat? Jsme tady pro vás.</p>

            {sent ? (
              <div className="form-success">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
                  <circle cx="26" cy="26" r="24" stroke="var(--green)" strokeWidth="2" />
                  <path d="M15 26 L23 34 L37 18" stroke="var(--green)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <p>Zpráva odeslána! Ozveme se vám co nejdříve.</p>
              </div>
            ) : (
              <form className="kontakt-form" onSubmit={handleSubmit}>
                <div className="form-field">
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Jméno"
                    value={form.jmeno}
                    onChange={e => setForm(f => ({ ...f, jmeno: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-field">
                  <input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-field">
                  <textarea
                    className="form-textarea"
                    placeholder="Zpráva"
                    rows={5}
                    value={form.zprava}
                    onChange={e => setForm(f => ({ ...f, zprava: e.target.value }))}
                    required
                  />
                </div>
                <div className="form-checkbox-wrap">
                  <input
                    type="checkbox"
                    id="souhlas"
                    checked={form.souhlas}
                    onChange={e => setForm(f => ({ ...f, souhlas: e.target.checked }))}
                    required
                  />
                  <label htmlFor="souhlas">Souhlasím s podmínkami</label>
                </div>
                <button type="submit" className="btn btn-primary">Odeslat</button>
              </form>
            )}
          </div>

          <div className="kontakt-form-right reveal reveal-d1">
            <div className="kontakt-form-img">
              <img
                src="/images/kafeterka/gm74.jpg"
                alt="Kafeterka kavárna"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
