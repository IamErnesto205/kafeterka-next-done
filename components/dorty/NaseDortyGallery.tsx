export default function NaseDortyGallery() {
  return (
    <section className="gallery-dorty section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Dorty</span>
          <h2>Naše dorty</h2>
          <p>Každý dort je připraven z čerstvých ingrediencí s péčí</p>
        </div>

        <div className="gallery-dorty-layout reveal">
          <div className="gallery-dorty-main">
            <img
              src="/images/kafeterka/dort-matcha.png"
              alt="Kafeterka – matcha dort s jahodami"
            />
            <div className="g-overlay">
              <span className="g-caption">Matcha dort s jahodami</span>
            </div>
          </div>

          <div className="gallery-dorty-thumbs">
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/dort-cokolada.png"
                alt="Kafeterka – čokoládový dort s arašídy a borůvkami"
              />
              <div className="g-overlay"><span className="g-caption">Čokoládový dort s arašídy</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/dort-malinovy.png"
                alt="Kafeterka – malinový dort"
              />
              <div className="g-overlay"><span className="g-caption">Malinový dort</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/dort-marakuja.png"
                alt="Kafeterka – dort s mango a marakujou"
              />
              <div className="g-overlay"><span className="g-caption">Mango-marakuja dort</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/dort-karamel.png"
                alt="Kafeterka – karamelový dort s čokoládou"
              />
              <div className="g-overlay"><span className="g-caption">Karamelový dort s čokoládou</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
