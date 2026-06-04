export default function KontaktInfo() {
  return (
    <section className="kontakt-info section" id="kontakt">
      <div className="container">
        <div className="kontakt-info-grid">
          <div className="kontakt-info-left reveal">
            <h2>Kontaktujte nás</h2>
            <p className="kontakt-info-lead">Rádi vám odpovíme na všechny vaše otázky.</p>

            <div className="kontakt-details">
              <div className="kontakt-detail">
                <div className="kontakt-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <span className="kontakt-detail-label">Napište nám</span>
                  <a href="mailto:kafeterka@email.cz" className="kontakt-detail-value">kafeterka@email.cz</a>
                </div>
              </div>

              <div className="kontakt-detail">
                <div className="kontakt-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 9.5a19.72 19.72 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.29 6.29l1.28-.89a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <span className="kontakt-detail-label">Zavolejte nám</span>
                  <a href="tel:+420774295710" className="kontakt-detail-value">774 295 710</a>
                </div>
              </div>

              <div className="kontakt-detail">
                <div className="kontakt-detail-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <span className="kontakt-detail-label">Adresa</span>
                  <span className="kontakt-detail-value">Mariánské nám. 308, 688 01 Uherský Brod 1</span>
                  <a href="https://maps.google.com/?q=Mariánské+nám.+308,+688+01+Uherský+Brod" target="_blank" rel="noopener noreferrer" className="kontakt-map-link">
                    Mapy <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="kontakt-info-right reveal reveal-d1" style={{ maxWidth: "80%", marginLeft: "auto" }}>
            <div className="kontakt-info-img" style={{ height: "auto" }}>
              <img
                src="/images/kafeterka/gm54.jpg"
                alt="Kafeterka exteriér"
                style={{ width: "100%", height: "auto", objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
