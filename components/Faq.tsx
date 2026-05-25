"use client";
import { useState } from "react";

const items = [
  {
    q: "Jak objednám dort?",
    a: "Můžete nás kontaktovat telefonicky nebo napsat přes Instagram nebo kontaktní formulář. Domluvíme termín, velikost a chuť dortu.",
  },
  {
    q: "Jak dlouho trvá příprava?",
    a: "Dorty připravujeme podle domluvy. Doporučujeme objednat alespoň několik dní dopředu.",
  },
  {
    q: "Jaké máte alergeny?",
    a: "Alergeny se liší podle konkrétního dortu. Rádi vám je sdělíme před objednávkou.",
  },
  {
    q: "Mohu si rezervovat stůl?",
    a: "Ano, rezervaci nám můžete napsat nebo zavolat. V teplých dnech doporučujeme rezervovat i místo na zahrádce.",
  },
  {
    q: "Jaká máte otevírací doba?",
    a: "Aktuální otevírací dobu najdete na našem Instagramu nebo Google profilu.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq section" id="faq">
      <div className="container">
        <div className="section-header reveal">
          <h2>Otázky</h2>
          <p>Odpovědi na nejčastější dotazy o našich dortech a službách</p>
        </div>

        <div className="faq-wrap reveal">
          {items.map((item, i) => (
            <div
              key={i}
              className={`faq-item${open === i ? " open" : ""}`}
            >
              <button
                className="faq-btn"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <h3>{item.q}</h3>
                <span className="faq-ico" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </span>
              </button>
              <div className="faq-body">
                <div className="faq-body-inner">
                  <p>{item.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
