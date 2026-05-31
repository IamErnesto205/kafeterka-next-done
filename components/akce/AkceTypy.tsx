const typy = [
  {
    eyebrow: "Oslavy a soukromé akce",
    title: "Narozeniny, výročí a rodinná setkání",
    text: "Pomůžeme vám s občerstvením, dortem, dezerty i celkovým sladěním nabídky tak, aby vše působilo krásně a chutnalo ještě lépe.",
    img: "/images/kafeterka/dort-ruzovy.png",
    imgAlt: "Dort na oslavu",
  },
  {
    eyebrow: "Sweet bary",
    title: "Sladké stoly a dezertní kouty na míru",
    text: "Připravujeme sweet bary od menších sladkých koutků až po větší dezertní stoly pro svatby, oslavy nebo firemní akce. Dorty, mini dezerty, cupcakes, makronky a další dobroty.",
    img: "/images/kafeterka/akce-sweetbar.png",
    imgAlt: "Sweet bar s dezerty",
  },
  {
    eyebrow: "Firemní večírky a pracovní setkání",
    title: "Občerstvení pro váš tým i klienty",
    text: "Firemní večírek, meeting, školení nebo setkání s kolegy — připravíme občerstvení na zakázku. Sladké dezerty, slané pohoštění, káva, nápoje nebo kombinace podle potřeby.",
    img: "/images/kafeterka/brunch.png",
    imgAlt: "Firemní pohoštění",
    featured: true,
  },
  {
    eyebrow: "Rozlučky se svobodou",
    title: "Nezapomenutelná oslava s přáteli",
    text: "Ať už plánujete klidnější posezení nebo veselou oslavu, rádi pro vás připravíme dort, dezerty, sweet bar nebo pohoštění sladěné podle tématu i vašich představ.",
    img: "/images/kafeterka/akce-rozlucka.jpg",
    imgAlt: "Rozlučka se svobodou v Kafeterce",
  },
  {
    eyebrow: "Občerstvení na zakázku",
    title: "Potřebujete něco mimo běžnou nabídku?",
    text: "Ozvěte se nám. Rádi se domluvíme na možnostech podle termínu, počtu osob a typu akce. Jsme otevření vašim nápadům.",
    img: "/images/kafeterka/akce-obcerstveni.jpg",
    imgAlt: "Kafeterka – záhrada a prostory",
  },
];

export default function AkceTypy() {
  return (
    <section className="vyhody section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Co pro vás připravíme</span>
          <h2>Typy akcí a služeb</h2>
          <p>Každá akce je jiná — vždy se domlouváme individuálně</p>
        </div>

        <div className="vyhody-grid">
          {typy.map((typ, i) => (
            <div key={i} className={`vyhody-card${typ.featured ? " featured" : ""} reveal${i > 0 ? ` reveal-d${Math.min(i, 3)}` : ""}`} style={typ.featured ? { gridRow: "span 2" } : undefined}>
              {typ.featured ? (
                <>
                  <div className="vyhody-card-img lg">
                    <img src={typ.img} alt={typ.imgAlt} />
                  </div>
                  <div className="vyhody-card-body">
                    <p className="eyebrow">{typ.eyebrow}</p>
                    <h3>{typ.title}</h3>
                    <p>{typ.text}</p>
                    <a href="#kontakt-akce" className="link-arrow" style={{ marginTop: 18, display: "inline-flex", alignItems: "center", gap: 6 }}>
                      Ozvěte se nám <span aria-hidden="true">→</span>
                    </a>
                  </div>
                </>
              ) : (
                <div className="vyhody-card-body">
                  <div className="vyhody-card-thumb">
                    <img src={typ.img} alt={typ.imgAlt} />
                  </div>
                  <p className="eyebrow">{typ.eyebrow}</p>
                  <h3>{typ.title}</h3>
                  <p>{typ.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
