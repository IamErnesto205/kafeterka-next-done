import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";

const images = [
  { src: "/images/slider/slider-1.png", alt: "Káva s latte art" },
  { src: "/images/slider/slider-2.png", alt: "Jahodový dort" },
  { src: "/images/slider/slider-3.png", alt: "Matcha latte" },
  { src: "/images/slider/slider-4.png", alt: "Růžový dort se zlatými kuličkami" },
  { src: "/images/slider/slider-5.png", alt: "Ledová matcha" },
  { src: "/images/slider/slider-6.png", alt: "Croissant se zeleninou" },
  { src: "/images/slider/slider-7.png", alt: "Čokoládový dort" },
  { src: "/images/slider/slider-8.png", alt: "Bagel s lososem" },
  { src: "/images/slider/slider-9.png", alt: "Červený koktejl" },
  { src: "/images/slider/slider-10.png", alt: "Pavlova s ovocem" },
];

export default function TaglineSlider() {
  return (
    <div style={{ background: "#fff", padding: "32px 0" }}>
      <div className="relative overflow-hidden">
        <InfiniteSlider gap={78} duration={59}>
          {images.map((img, i) => (
            <div key={i} style={{ height: "272px", flexShrink: 0, border: "none", background: "#fff" }}>
              <img
                src={img.src}
                alt={img.alt}
                style={{
                  height: "272px",
                  width: "auto",
                  objectFit: "contain",
                  display: "block",
                  border: "none",
                }}
              />
            </div>
          ))}
        </InfiniteSlider>
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 left-0 h-full w-[160px]"
          direction="left"
          blurIntensity={0.8}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute top-0 right-0 h-full w-[160px]"
          direction="right"
          blurIntensity={0.8}
        />
      </div>
    </div>
  );
}
