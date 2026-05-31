export default function Features() {
  return (
    <section className="features section" id="o-nas">
      <div className="container">
        <div className="features-inner">

          <div className="features-photo reveal">
            <img
              src="/images/kafeterka/brunch.png"
              alt="Kafeterka – brunch a nápoje"
            />
          </div>

          <div className="features-grid">

            <div className="feature-card reveal">
              <div className="feature-icon">
                <img src="/images/icons/dort.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
              </div>
              <h3>Čerstvé dorty</h3>
              <p>Pečeme každý den a nepoužíváme kompromisy v poctivosti.</p>
              <a href="/dorty-na-objednavku#objednat" className="feature-more">Objednat dort <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d1">
              <div className="feature-icon">
                <img src="/images/icons/zrno.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
              </div>
              <h3>Výběrová káva</h3>
              <p>Speciality připravujeme s vášní a jemným řemeslem.</p>
            </div>

            <div className="feature-card reveal reveal-d2">
              <div className="feature-icon">
                <img src="/images/icons/zidle.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
              </div>
              <h3>Terasa a zahrada</h3>
              <p>Klidné místo k posezení v létě i místo konání různých akcí.</p>
              <a href="#galerie" className="feature-more">Fotky <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d3">
              <div className="feature-icon">
                <img src="/images/icons/srdce.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
              </div>
              <h3>Osobní přístup</h3>
              <p>Známe naše hosty a jejich oblíbené dezerty a nápoje.</p>
              <a href="/kontakt" className="feature-more">Kontakt <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d2">
              <div className="feature-icon">
                <img src="/images/icons/ruce.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
              </div>
              <h3>Místo pro setkání</h3>
              <p>Na kávu, oslavu, práci nebo chvíli klidu.</p>
              <a href="/kontakt" className="feature-more">Kontakt <span aria-hidden="true">→</span></a>
            </div>

            <div className="feature-card reveal reveal-d3">
              <div className="feature-icon">
                <img src="/images/icons/domek.svg" alt="" aria-hidden="true" style={{ height: "50px", width: "auto" }} />
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
