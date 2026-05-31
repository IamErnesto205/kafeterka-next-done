const photos = [
  { src: "/images/kafeterka/leila16.jpg", alt: "Kafeterka – tác s dorty a kávou" },
  { src: "/images/kafeterka/gm53.jpg", alt: "Kafeterka – dva espressa a domácí dorty" },
  { src: "/images/kafeterka/leila2.jpg", alt: "Kafeterka – bar a barové stoličky" },
  { src: "/images/kafeterka/leila9.jpg", alt: "Kafeterka – tým s dortem" },
  { src: "/images/kafeterka/gm71.jpg", alt: "Kafeterka – zahradní terasa" },
  { src: "/images/kafeterka/leila11.jpg", alt: "Kafeterka – kávovar a baristka" },
  { src: "/images/kafeterka/brunch.png", alt: "Kafeterka – brunch a nápoje" },
  { src: "/images/kafeterka/leila1.jpg", alt: "Kafeterka – interiér kavárny" },
  { src: "/images/kafeterka/leila3.jpg", alt: "Kafeterka – výběrové kávy na polici" },
  { src: "/images/kafeterka/leila4.jpg", alt: "Kafeterka – police s kávou a čajem" },
  { src: "/images/kafeterka/leila5.jpg", alt: "Kafeterka – rohový stolek se stoličkami" },
  { src: "/images/kafeterka/leila7.jpg", alt: "Kafeterka – skleněné dekorace" },
  { src: "/images/kafeterka/leila8.jpg", alt: "Kafeterka – příprava espressa" },
  { src: "/images/kafeterka/leila10.jpg", alt: "Kafeterka – dort s physalis" },
  { src: "/images/kafeterka/leila12.jpg", alt: "Kafeterka – police s kávou a čajem" },
  { src: "/images/kafeterka/leila15.jpg", alt: "Kafeterka – latte art detail" },
  { src: "/images/kafeterka/leila17.jpg", alt: "Kafeterka – zákaznice v interiéru" },
  { src: "/images/kafeterka/leila18.jpg", alt: "Kafeterka – káva v ruce" },
  { src: "/images/kafeterka/leila20.jpg", alt: "Kafeterka – rustikal místnost se zrcadly" },
  { src: "/images/kafeterka/leila21.jpg", alt: "Kafeterka – ratanová křesla a stůl" },
  { src: "/images/kafeterka/leila22.jpg", alt: "Kafeterka – menu a sušené květiny" },
  { src: "/images/kafeterka/gm07.jpg", alt: "Kafeterka – sendvič s croissantem" },
  { src: "/images/kafeterka/gm10.jpg", alt: "Kafeterka – dort a nápoje na terase" },
  { src: "/images/kafeterka/gm18.jpg", alt: "Kafeterka – latte a matcha latte" },
  { src: "/images/kafeterka/gm20.jpg", alt: "Kafeterka – latte na terase" },
  { src: "/images/kafeterka/gm24.jpg", alt: "Kafeterka – bar a dětský koutek" },
  { src: "/images/kafeterka/gm33.jpg", alt: "Kafeterka – čokoládové brownies" },
  { src: "/images/kafeterka/gm38.jpg", alt: "Kafeterka – dort s rozmarýnem a květinami" },
  { src: "/images/kafeterka/gm45.jpg", alt: "Kafeterka – koláč na terase" },
  { src: "/images/kafeterka/gm49.jpg", alt: "Kafeterka – matcha latte" },
  { src: "/images/kafeterka/gm54.jpg", alt: "Kafeterka – exteriér kavárny" },
  { src: "/images/kafeterka/gm60.jpg", alt: "Kafeterka – interiér s policemi" },
  { src: "/images/kafeterka/gm67.jpg", alt: "Kafeterka – cappuccino na tácu" },
  { src: "/images/kafeterka/gm74.jpg", alt: "Kafeterka – matcha a dort" },
];

export default function FotogalerieGrid() {
  return (
    <section className="section" style={{ paddingTop: "40px" }}>
      <div className="container">
        <div
          style={{
            columns: "3 280px",
            gap: "16px",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: "16px",
                borderRadius: "12px",
                overflow: "hidden",
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
