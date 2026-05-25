export default function Suroviny() {
  return (
    <section className="suroviny section">
      <div className="container">
        <div className="section-header reveal">
          <span className="label">Každý den nově</span>
          <h2>Poctivé suroviny v každém kousku</h2>
        </div>

        <div className="suroviny-grid">
          <div className="suroviny-col">

            <div className="card-photo reveal">
              <div className="card-photo-img">
                <img
                  src="/images/kafeterka/gm33.jpg"
                  alt="Kafeterka – tým s dortem"
                />
              </div>
              <div className="card-photo-body">
                <p className="eyebrow">Dorty bez zbytečných příměsí</p>
                <h3>Používáme jen to, co patří do dobrého dortu.</h3>
                <a href="#dorty" className="link-arrow">Čerstvost cítíte <span aria-hidden="true">→</span></a>
              </div>
            </div>

            <div className="card-text reveal">
              <p className="eyebrow">Denní rutina</p>
              <h3>Pečeme ráno, servírujeme den.</h3>
              <p>Každé ráno voní Kafeterka čerstvě upečeným těstem. Přijďte ještě teplé.</p>
              <a href="#dorty" className="link-arrow">Objednat <span aria-hidden="true">→</span></a>
              <div className="card-deco" aria-hidden="true">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path d="M10 90 C10 50 30 10 70 5 C90 2 95 20 90 40 C80 70 40 85 10 90Z" stroke="#3F5F48" strokeWidth="2.5" strokeLinecap="round"/>
                  <path d="M10 90 L55 45" stroke="#3F5F48" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
            </div>

          </div>

          <div className="suroviny-col">

            <div className="card-small reveal" style={{ background: "var(--cream)" }}>
              <div className="icon">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                  <path d="M8 28 C8 28 6 20 9 13 C12 6 19 3 26 5 C32 7 33 16 28 21 C23 26 15 26 12 24" stroke="#3F5F48" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M12 24 C12 24 10 31 8 28" stroke="#3F5F48" strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="eyebrow">Rodinný recept</p>
              <h3>Jako by vám je připravila babička.</h3>
              <p>Tradiční postupy, domácí ingredience, poctivý výsledek bez zkratek.</p>
              <a href="#dorty" className="link-arrow">Naše dorty <span aria-hidden="true">→</span></a>
              <div className="card-small-deco" aria-hidden="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M40 75 C40 50 50 20 70 8 C80 2 82 12 78 25 C70 50 55 65 40 75Z" stroke="#3F5F48" strokeWidth="2"/>
                  <path d="M40 75 L62 38" stroke="#3F5F48" strokeWidth="1.5"/>
                </svg>
              </div>
            </div>

            <div className="card-small reveal reveal-d2" style={{ background: "var(--green-light)" }}>
              <div className="icon">
                <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
                  <path d="M8 21 H26 L24 30 H10 Z" stroke="#3F5F48" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M17 14 C17 14 14.5 11 14.5 8.5 C14.5 6.5 15.5 5 17 5 C18.5 5 19.5 6.5 19.5 8.5 C19.5 11 17 14 17 14Z" stroke="#3F5F48" strokeWidth="1.7" strokeLinecap="round"/>
                  <path d="M8 21 C8 21 11 18 17 18 C23 18 26 21 26 21" stroke="#3F5F48" strokeWidth="1.7" strokeLinecap="round"/>
                </svg>
              </div>
              <p className="eyebrow">Každý den jiný výběr</p>
              <h3>Dorty, které překvapí.</h3>
              <p>Každý den připravujeme různé druhy dortů a zákusků — vždy čerstvé.</p>
              <a href="#nabidka" className="link-arrow">Naše nabídka <span aria-hidden="true">→</span></a>
              <div className="card-small-deco" aria-hidden="true">
                <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
                  <path d="M40 70 C40 50 40 30 40 20 M40 20 C40 8 28 2 18 6 C8 10 8 22 18 26 C28 30 40 20 40 20 M40 20 C40 8 52 2 62 6 C72 10 72 22 62 26 C52 30 40 20 40 20" stroke="#3F5F48" strokeWidth="2"/>
                  <circle cx="40" cy="20" r="5" stroke="#3F5F48" strokeWidth="1.8"/>
                </svg>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
