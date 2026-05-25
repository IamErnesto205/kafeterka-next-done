export default function Gallery() {
  return (
    <section className="gallery section" id="galerie">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Atmosféra</span>
          <h2>Fotografie Kafeterky</h2>
          <p>Interiér, terasa a naše čerstvé dorty</p>
        </div>

        <div className="gallery-layout reveal">
          <div className="gallery-main">
            <img
              src="/images/kafeterka/leila13.jpg"
              alt="Kafeterka – káva a dort na stole"
            />
            <div className="g-overlay">
              <span className="g-caption">Útulný interiér Kafeterky</span>
            </div>
          </div>

          <div className="gallery-thumbs">
            <div className="gallery-thumb">
              <img
                src="/images/kafeterka/gm53.jpg"
                alt="Kafeterka – domácí dort s ovocem"
              />
              <div className="g-overlay"><span className="g-caption">Domácí dort</span></div>
            </div>
            <div className="gallery-thumb">
              <img
                src="/images/kafeterka/leila2.jpg"
                alt="Kafeterka – latte art výběrová káva"
              />
              <div className="g-overlay"><span className="g-caption">Výběrová káva</span></div>
            </div>
            <div className="gallery-thumb">
              <img
                src="/images/kafeterka/gm72.jpg"
                alt="Kafeterka – útulný koutek kavárny"
              />
              <div className="g-overlay"><span className="g-caption">Naše terasa</span></div>
            </div>
            <div className="gallery-thumb">
              <img
                src="/images/kafeterka/leila11.jpg"
                alt="Kafeterka – čerstvé zákusky a dezerty"
              />
              <div className="g-overlay"><span className="g-caption">Čerstvý dezert</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
