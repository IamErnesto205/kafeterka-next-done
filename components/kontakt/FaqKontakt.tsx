"use client";
import { useState } from "react";

const items = [
  {
    q: "Jak si rezervuji místo?",
    a: "Stačí nám napsat svůj email v sekci Rezervace a my se vám ozveme. Domluvíme se na datu a čase, který vám vyhovuje. Rádi vám poradíme s výběrem.",
  },
  {
    q: "Máte parkování?",
    a: "Parkování je dostupné na Mariánském náměstí a v okolí. Najdete nás snadno, k dispozici je i placené parkoviště v blízkosti náměstí.",
  },
  {
    q: "Lze si objednat dorty?",
    a: "Ano, nabízíme dorty na objednávku. Každý dort připravíme přesně podle vašich přání — příchu, design i počet porcí. Objednejte na naší stránce Dorty.",
  },
  {
    q: "Jaké máte otevírací doby?",
    a: "Jsme otevřeni každý den od 8:00 do 18:00. Dorty pečeme ráno, takže nejlepší výběr máte dopoledne. O svátcích doporučujeme sledovat naše sociální sítě.",
  },
  {
    q: "Pořádáte události?",
    a: "Ano, rádi si vás u nás zapíšeme na soukromé akce, narozeninové oslavy nebo firemní setkání. Kontaktujte nás pro detaily a domluvíme se.",
  },
];

export default function FaqKontakt() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq section" id="faq-kontakt">
      <div className="container">
        <div className="section-header reveal">
          <h2>Otázky</h2>
          <p>Odpovíme na vše, co vás zajímá o místě a službách.</p>
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
                    <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
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

        <div className="faq-footer reveal">
          <p>Máte další dotazy? Neváhejte nás kontaktovat přímo.</p>
          <a href="mailto:info@kafeterka.cz" className="btn btn-outline">Napsat</a>
        </div>
      </div>
    </section>
  );
}
