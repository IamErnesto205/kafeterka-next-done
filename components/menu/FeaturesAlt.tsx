const items = [
  {
    num: "01",
    cat: "Ruční úprava",
    label: "Přístup",
    heading: "Dorty se dělají rukama",
    text: "Nešetříme na množství, pečeme poctivě. Každý dort se rodí z péče a z každodenní rutiny. Vždy to, co servírujeme, jsme ochutnali sami.",
    img: "/images/kafeterka/leila19.jpg",
    alt: "Ruční příprava dortu",
  },
  {
    num: "02",
    cat: "Bez umělých přísad",
    label: "Přístup",
    heading: "Jen to, co patří do dortu",
    text: "Čistá másla, mouka, vejce, čerstvé ovoce. Nic víc. Nic méně. Ač je to jednoduchý přístup, vždy se projeví v každém soustu, které ochutnáte.",
    img: "/images/kafeterka/gm12.jpg",
    alt: "Čisté ingredience",
  },
  {
    num: "03",
    cat: "Čerstvost každý den",
    label: "Příprava",
    heading: "Dorty se pečou ráno",
    text: "Každé přijde s přednochí a jede hned k polici vždy čerstvé. Dorty jsou upečeny ráno a servírujeme vždy v nejlepší kondici a aktuálnosti.",
    img: "/images/kafeterka/leila10.jpg",
    alt: "Čerstvě upečené dorty ráno",
  },
];

export default function FeaturesAlt() {
  return (
    <section className="features-alt section">
      <div className="container">
        {items.map((item) => (
          <div className="features-alt-item reveal" key={item.num}>
            <div className="features-alt-content">
              <div className="features-alt-meta">
                <span className="features-alt-num">{item.num}</span>
                <span className="features-alt-cat">{item.cat}</span>
              </div>
              <span className="label" style={{ marginBottom: 16, display: "block" }}>{item.label}</span>
              <h2>{item.heading}</h2>
              <p>{item.text}</p>
              <div className="features-alt-actions">
                <a href="/dorty-na-objednavku#objednat" className="btn btn-outline">Objednat</a>
                <a href="/dorty-na-objednavku" className="features-alt-link">
                  {item.num} <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>

            <div className="features-alt-photo">
              <img src={item.img} alt={item.alt} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
