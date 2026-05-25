const photos = [
  { src: "/images/kafeterka/gm67.jpg", alt: "Kafeterka – latte art", caption: "Latte art" },
  { src: "/images/kafeterka/gm20.jpg", alt: "Kafeterka – káva s latte art", caption: "Výběrová káva" },
  { src: "/images/kafeterka/gm07.jpg", alt: "Kafeterka – sendvič", caption: "Jídlo a svačiny" },
  { src: "/images/kafeterka/gm54.jpg", alt: "Kafeterka – exteriér kavárny", caption: "Naše kavárna" },
  { src: "/images/kafeterka/gm15.jpg", alt: "Kafeterka – vstup do kavárny", caption: "Vítejte" },
  { src: "/images/kafeterka/gm11.jpg", alt: "Kafeterka – dort a nápoje na tácu", caption: "Dort a nápoj" },
];

export default function GalleryMenu() {
  return (
    <section className="gallery-menu section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Galerie</span>
          <h2>Podívejte se na naší nabídku</h2>
          <p>Fotografie našich dortů a kávy ukazují, co vás čeká v Kafeterce</p>
        </div>

        <div className="gallery-menu-grid reveal">
          {photos.map((photo) => (
            <div className="gallery-menu-cell" key={photo.alt}>
              <img src={photo.src} alt={photo.alt} />
              <div className="g-overlay">
                <span className="g-caption">{photo.caption}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
