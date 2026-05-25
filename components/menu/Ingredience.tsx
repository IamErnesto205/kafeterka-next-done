const cards = [
  {
    img: "/images/kafeterka/leila15.jpg",
    alt: "Bezlepkové dorty",
    title: "Bez lepku",
    text: "Dorty pro ty, kteří milují sladké bez kompromisů. Nabízíme výběr bezlepkových dezertů.",
  },
  {
    img: "/images/kafeterka/gm49.jpg",
    alt: "Vegánské dezerty",
    title: "Vegánské dezerty",
    text: "Každý z sezónních dezertů tvoříme čerstvě pečený, bez živočišných produktů.",
  },
  {
    img: "/images/kafeterka/gm10.jpg",
    alt: "Lokální dodavatelé",
    title: "Místní dodavatelé",
    text: "Suroviny odebíráme od lokálních farmářů a pekařů — čerstvé a kvalitní.",
  },
];

export default function Ingredience() {
  return (
    <section className="ingredience section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Hodnoty</span>
          <h2>Ingredience, které máme rádi</h2>
          <p>
            Nejlepší dorty pro vás pečeme jen z nejlepších přírodních surovin.
            Vegánské dezerty tvoříme čerstvě bez syntetických produktů.
            Suroviny odebíráme od lokálních dodavatelů, kterým věříme.
          </p>
        </div>

        <div className="ingredience-grid">
          {cards.map((card, i) => (
            <div className={`ingredience-card reveal${i > 0 ? ` reveal-d${i}` : ""}`} key={card.title}>
              <div className="ingredience-card-img">
                <img src={card.img} alt={card.alt} />
              </div>
              <div className="ingredience-card-body">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="ingredience-footer reveal">
          <a href="/dorty-na-objednavku#objednat" className="btn btn-outline">Objednat</a>
          <span className="ingredience-counter">
            <span>03</span>
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </section>
  );
}
