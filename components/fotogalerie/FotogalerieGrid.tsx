const photos = [
  { src: "/images/kafeterka/leila13.jpg", alt: "Kafeterka – káva a dort na stole" },
  { src: "/images/kafeterka/gm53.jpg", alt: "Kafeterka – domácí dort s ovocem" },
  { src: "/images/kafeterka/leila2.jpg", alt: "Kafeterka – latte art výběrová káva" },
  { src: "/images/kafeterka/leila9.jpg", alt: "Kafeterka – tým s dortem" },
  { src: "/images/kafeterka/gm72.jpg", alt: "Kafeterka – útulný koutek kavárny" },
  { src: "/images/kafeterka/leila11.jpg", alt: "Kafeterka – čerstvé zákusky a dezerty" },
  { src: "/images/kafeterka/brunch.png", alt: "Kafeterka – brunch a nápoje" },
  { src: "/images/kafeterka/leila1.jpg", alt: "Kafeterka – káva" },
  { src: "/images/kafeterka/leila3.jpg", alt: "Kafeterka – dezerty" },
  { src: "/images/kafeterka/leila4.jpg", alt: "Kafeterka – dort" },
  { src: "/images/kafeterka/leila5.jpg", alt: "Kafeterka – interiér" },
  { src: "/images/kafeterka/leila6.jpg", alt: "Kafeterka – nápoj" },
  { src: "/images/kafeterka/leila7.jpg", alt: "Kafeterka – zákusek" },
  { src: "/images/kafeterka/leila8.jpg", alt: "Kafeterka – káva a dort" },
  { src: "/images/kafeterka/leila10.jpg", alt: "Kafeterka – pult kavárny" },
  { src: "/images/kafeterka/leila12.jpg", alt: "Kafeterka – dezerty na výběr" },
  { src: "/images/kafeterka/leila14.jpg", alt: "Kafeterka – detail dortu" },
  { src: "/images/kafeterka/leila15.jpg", alt: "Kafeterka – snídaně" },
  { src: "/images/kafeterka/leila16.jpg", alt: "Kafeterka – nápoje" },
  { src: "/images/kafeterka/leila17.jpg", alt: "Kafeterka – terasa" },
  { src: "/images/kafeterka/leila18.jpg", alt: "Kafeterka – dort s dekorací" },
  { src: "/images/kafeterka/leila19.jpg", alt: "Kafeterka – detail kávy" },
  { src: "/images/kafeterka/leila20.jpg", alt: "Kafeterka – zákusky" },
  { src: "/images/kafeterka/leila21.jpg", alt: "Kafeterka – interiér kavárny" },
  { src: "/images/kafeterka/leila22.jpg", alt: "Kafeterka – výběr dortů" },
  { src: "/images/kafeterka/gm07.jpg", alt: "Kafeterka – kavárna" },
  { src: "/images/kafeterka/gm10.jpg", alt: "Kafeterka – dezert" },
  { src: "/images/kafeterka/gm11.jpg", alt: "Kafeterka – dort" },
  { src: "/images/kafeterka/gm12.jpg", alt: "Kafeterka – zákusek" },
  { src: "/images/kafeterka/gm15.jpg", alt: "Kafeterka – káva" },
  { src: "/images/kafeterka/gm18.jpg", alt: "Kafeterka – nápoj" },
  { src: "/images/kafeterka/gm20.jpg", alt: "Kafeterka – dort" },
  { src: "/images/kafeterka/gm24.jpg", alt: "Kafeterka – bar a pult kavárny" },
  { src: "/images/kafeterka/gm33.jpg", alt: "Kafeterka – čokoládový dort" },
  { src: "/images/kafeterka/gm38.jpg", alt: "Kafeterka – detail dezertu" },
  { src: "/images/kafeterka/gm40.jpg", alt: "Kafeterka – kavárna interiér" },
  { src: "/images/kafeterka/gm45.jpg", alt: "Kafeterka – zákusek" },
  { src: "/images/kafeterka/gm49.jpg", alt: "Kafeterka – dort s ovocem" },
  { src: "/images/kafeterka/gm54.jpg", alt: "Kafeterka – nápoje" },
  { src: "/images/kafeterka/gm55.jpg", alt: "Kafeterka – pečivo" },
  { src: "/images/kafeterka/gm60.jpg", alt: "Kafeterka – kavárna" },
  { src: "/images/kafeterka/gm61.jpg", alt: "Kafeterka – dezerty" },
  { src: "/images/kafeterka/gm67.jpg", alt: "Kafeterka – interiér" },
  { src: "/images/kafeterka/gm71.jpg", alt: "Kafeterka – dort" },
  { src: "/images/kafeterka/gm74.jpg", alt: "Kafeterka – kavárna detail" },
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
