"use client";
import { useState } from "react";

const items = [
  {
    q: "Jak dlouho trvá příprava?",
    a: "Dorty připravujeme na objednávku čerstvě. Pro větší dorty doporučujeme objednat alespoň 5–7 dní dopředu. Vždy domluvíme přesný termín předání, aby byl váš dort v nejlepší kondici.",
  },
  {
    q: "Jaké příchutě nabízíte?",
    a: "Máte na výběr z klasických příchutí – čokoláda, vanilka, karamel, ovocné náplně – i ze sezónních specialit. Rádi poradíme a přizpůsobíme dort vašemu vkusu.",
  },
  {
    q: "Lze upravit alergeny?",
    a: "Samozřejmě. Při objednávce nám sdělte své alergenní požadavky a my se pokusíme najít ideální řešení. Pracujeme s čerstvými ingrediencemi a vždy se snažíme vyjít vstříc.",
  },
  {
    q: "Kde si dort vyzvednete?",
    a: "Dorty si vyzvednete u nás na Mariánském náměstí v Uherském Brodě. Domluvíme se na přesném čase vyzvednutí, aby byl váš dort čerstvý a připravený.",
  },
  {
    q: "Přijímáte speciální požadavky?",
    a: "Ano! Ať jde o specifickou příchu, design nebo počet porcí, vždy se snažíme najít řešení. Kontaktujte nás a společně vymyslíme ten správný dort.",
  },
];

export default function FaqDorty() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="faq section" id="faq-dorty">
      <div className="container">
        <div className="section-header reveal">
          <h2>Otázky</h2>
          <p>Vše, co potřebujete vědět o našich objednávkách</p>
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
      </div>
    </section>
  );
}
