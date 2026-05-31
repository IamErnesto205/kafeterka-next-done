const clanky = [
  {
    zdroj: "ohmybean.coffee",
    titulek: "Kavárnu bych dnes nejspíš neotevřela — přesto nelituji ani minuty",
    popis: "Rozhovor s provozovatelkou Kafeterky o tom, jaké to je provozovat kavárnu, co přineslo radost a co bylo naopak nejtěžší.",
    href: "https://www.ohmybean.coffee/blog/kavarnu-bych-dnes-nejspis-neotevrela--presto-nelituji-ani-minuty/",
    img: "/images/kafeterka/drby-ohmybean.webp",
    imgAlt: "Rozhovor s Kafeterkou – ohmybean.coffee",
  },
  {
    zdroj: "zlinsko-luhacovicko.cz",
    titulek: "Kafeterka Uherský Brod",
    popis: "Tip na výlet a místní kavárny na Zlínsku — Kafeterka jako doporučené místo pro dobrou kávu a domácí dorty v srdci Uherského Brodu.",
    href: "https://www.zlinsko-luhacovicko.cz/misto/136/531-kafeterka-uhersky-brod",
    img: "/images/kafeterka/gm54.jpg",
    imgAlt: "Kafeterka exteriér – zlinsko-luhacovicko.cz",
  },
];

export default function Drby() {
  return (
    <section className="section" style={{ background: "var(--cream)", padding: "80px 0" }}>
      <div className="container">
        <div className="section-header reveal">
          <span className="label">V médiích</span>
          <h2>Drby o Kafeterce</h2>
          <p>Co o nás napsali druzí</p>
        </div>

        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "22px",
            marginTop: "48px",
          }}
        >
          {clanky.map((clanek, i) => (
            <a
              key={i}
              href={clanek.href}
              target="_blank"
              rel="noopener noreferrer"
              className="drby-card"
            >
              <div className="drby-card-img">
                <img src={clanek.img} alt={clanek.imgAlt} />
              </div>
              <div className="drby-card-body">
                <span className="drby-zdroj">{clanek.zdroj}</span>
                <h3>{clanek.titulek}</h3>
                <p>{clanek.popis}</p>
                <span className="link-arrow" style={{ display: "inline-flex", alignItems: "center", gap: 6, marginTop: 12 }}>
                  Přečíst článek <span aria-hidden="true">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
