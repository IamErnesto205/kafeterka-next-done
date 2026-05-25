"use client";
import { useState } from "react";

export default function RezervaceKontakt() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="rezervace-k section" id="rezervace">
      <div className="container">
        <div className="rezervace-k-header reveal">
          <h2>Rezervujte si místo u nás</h2>
          <p>Chcete si zajistit místo? Napište nám svůj email a my se vám ozveme.</p>
        </div>

        <div className="rezervace-k-form-wrap reveal">
          {sent ? (
            <p className="rezervace-k-success">Ozveme se vám co nejdříve!</p>
          ) : (
            <form className="rezervace-k-form" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Váš email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="btn btn-primary">Rezervovat</button>
            </form>
          )}
          <p className="rezervace-k-note">Obvykle odpovídáme během několika minut a rádi vás pozveme.</p>
        </div>

        <div className="rezervace-k-img reveal">
          <img
            src="/images/kafeterka/gm71.jpg"
            alt="Kafeterka prostor"
          />
        </div>
      </div>
    </section>
  );
}
