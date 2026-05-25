const photos = [
  { src: "/images/kafeterka/leila20.jpg", alt: "Kafeterka – útulný koutek" },
  { src: "/images/kafeterka/gm55.jpg", alt: "Kafeterka – exteriér kavárny" },
  { src: "/images/kafeterka/leila21.jpg", alt: "Kafeterka – posezení u okna" },
  { src: "/images/kafeterka/gm60.jpg", alt: "Kafeterka – interiér s regálem" },
  { src: "/images/kafeterka/leila12.jpg", alt: "Kafeterka – rohový koutek s rostlinami" },
];

export default function GalleryKontakt() {
  return (
    <section className="gallery-kontakt section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Najdete nás</span>
          <h2>Naše místo</h2>
          <p>Podívejte se, jak vypadá Kafeterka zevnitř i venku.</p>
        </div>

        <div className="gallery-kontakt-grid reveal">
          {photos.map((photo, i) => (
            <div className={`gallery-kontakt-cell gk-${i + 1}`} key={photo.alt}>
              <img src={photo.src} alt={photo.alt} />
              <div className="g-overlay" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
