export default function Features() {
  return (
    <section className="features section" id="o-nas">
      <div className="container">
        <div className="features-inner">

          <div className="features-photo reveal">
            <img
              src="/images/kafeterka/gm24.jpg"
              alt="Kafeterka – bar a pult kavárny"
            />
          </div>

          <div className="features-grid">

            <div className="feature-card reveal">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M6 18 H22 L20 26 H8 Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 12 C14 12 11 9 11 6.5 C11 4.5 12.3 3 14 3 C15.7 3 17 4.5 17 6.5 C17 9 14 12 14 12Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6 18 C6 18 9 15 14 15 C19 15 22 18 22 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Čerstvé dorty</h3>
              <p>Pečeme každý den a nepoužíváme kompromisy v poctivosti.</p>
              <a href="#dorty" className="feature-more">Objednat <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d1">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M5 11 H19 L17 22 H7 Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 13 H22 C23.7 13 25 14.3 25 16 C25 17.7 23.7 19 22 19 H19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 7 C10 7 11 5 10 3.5 M15 6.5 C15 6.5 16 4.5 15 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  <path d="M3 24 H21" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Výběrová káva</h3>
              <p>Speciality připravujeme s vášní a jemným řemeslem.</p>
              <a href="#o-nas" className="feature-more">Menu <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d2">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M4 24 C4 24 7 14 14 10 C21 6 26 5 26 5 C26 5 25 10 21 14 C17 18 7 26 4 24Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 24 L14 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Terasa a zahrada</h3>
              <p>Klidné místo k posezení v létě i venkovních chvílích.</p>
              <a href="#galerie" className="feature-more">Fotky <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d3">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M14 25 C14 25 3 18 3 10.5 C3 7.5 5.7 5 9 5 C11 5 12.8 6 14 7.5 C15.2 6 17 5 19 5 C22.3 5 25 7.5 25 10.5 C25 18 14 25 14 25Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Osobní přístup</h3>
              <p>Známe naše hosty a jejich oblíbené dezerty a nápoje.</p>
              <a href="#kontakt" className="feature-more">Kontakt <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d2">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <circle cx="10" cy="9" r="4" stroke="currentColor" strokeWidth="1.6"/>
                  <path d="M3 24 C3 20 6.1 17 10 17 C13.9 17 17 20 17 24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="20" cy="10" r="3.2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M18 24 C18 21.2 19.8 19 22 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <h3>Místo pro setkání</h3>
              <p>Na kávu, oslavu, práci nebo chvíli klidu.</p>
              <a href="#rezervace" className="feature-more">Rezervovat <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d3">
              <div className="feature-icon">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                  <path d="M3 13.5 L14 4 L25 13.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M5.5 12 V24 H11 V18 H17 V24 H22.5 V12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Domácí atmosféra</h3>
              <p>Prostor, kam se lidé rádi vrací.</p>
              <a href="#galerie" className="feature-more">Galerie <span aria-hidden="true">→</span></a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
