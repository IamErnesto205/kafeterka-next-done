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
              src="/images/kafeterka/leila9.jpg"
              alt="Kafeterka – tým s dortem"
            />
            <div className="g-overlay">
              <span className="g-caption">Slavnostní dort</span>
            </div>
          </div>

          <div className="gallery-dorty-thumbs">
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/leila22.jpg"
                alt="Kafeterka – čerstvý dort"
              />
              <div className="g-overlay"><span className="g-caption">Čokoládový dort</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/leila4.jpg"
                alt="Kafeterka – dezert s ovocem"
              />
              <div className="g-overlay"><span className="g-caption">Ovocný dort</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/leila7.jpg"
                alt="Kafeterka – krémový zákusek"
              />
              <div className="g-overlay"><span className="g-caption">Krémový dort</span></div>
            </div>
            <div className="gallery-dorty-thumb">
              <img
                src="/images/kafeterka/leila17.jpg"
                alt="Kafeterka – narozeninový dort"
              />
              <div className="g-overlay"><span className="g-caption">Narozeninový dort</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
