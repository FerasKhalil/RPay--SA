import { memo, useEffect, useRef, useState } from "react";
import alnadej_logo from "../assets/alnadej_logo.png"
import boulevard_world_logo from "../assets/boulevard_world_logo.png"
import deera_logo from "../assets/deera_logo.png"
import khozama_logo from "../assets/khozama_logo.png"
import lulu_logo from "../assets/lulu_logo.png"
import sela_logo from "../assets/sela_logo.png"
import boulevard_city_logo from "../assets/boulevard_city_logo.png"
import malahi_logo from "../assets/malahi_logo.png"
import alarkan_logo from "../assets/alarkan_logo.png"
import hamat_logo from "../assets/hamat_logo.png"
import kinan_logo from "../assets/kinan_logo.png"
import rawshan_logo from "../assets/rawshan_logo.svg"
import shawarma_house_logo from "../assets/shawarma_house_logo.png"
interface LogosSectionProps {
  className?: string;
}

interface PartnerLogo {
  name: string;
  url: string;
  alt: string;
}

const LogosSection: React.FC<LogosSectionProps> = memo(({ className = "" }) => {
  const partnerLogos: PartnerLogo[] = [
    { name: "AlNadej", url: alnadej_logo, alt: "Al Nadej Logo" },
    { name: "BoulevardWord", url: boulevard_world_logo, alt: "Boulevard World Logo" },
    { name: "Deera", url: deera_logo, alt: "Deera Logo" },
    { name: "Khozama", url: khozama_logo, alt: "Khozama Logo" },
    { name: "Lulu", url: lulu_logo, alt: "Lulu Logo" },
    { name: "Sela", url: sela_logo, alt: "Sela Logo" },
    { name: "BoulevardCity", url: boulevard_city_logo, alt: "Boulevard City Logo" },
    { name: "Malahi", url: malahi_logo, alt: "Malahi Logo Logo" },
    { name: "DarAlArkan", url: alarkan_logo, alt: "Dar Al Arkan Logo" },
    { name: "Hamat", url: hamat_logo, alt: "Hamat Logo" },
    { name: "Kinan", url: kinan_logo, alt: "Kinan Logo" },
    { name: "Rawshan", url: rawshan_logo, alt: "Rawshan Logo" },
    { name: "ShawarmaHouse", url: shawarma_house_logo, alt: "Shawarma House Logo" },
  ];

  // Start anim only when the first set is loaded + next paint, to avoid any initial snap.
  const [ready, setReady] = useState(false);
  const loadedCountRef = useRef(0);
  const firstSetCount = partnerLogos.length;

  const handleImgSettled = () => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current >= firstSetCount) {
      // Wait for layout to settle
      requestAnimationFrame(() => requestAnimationFrame(() => setReady(true)));
    }
  };

  return (
    <section
      className={`w-full py-12 sm:py-16 overflow-hidden bg-white ${className}`}
      aria-label="Our trusted partners"
    >
      <style>{`
        .logos-viewport {
          position: relative;
          overflow: hidden;
          /* Soft fade at edges */
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        /* Two identical tracks side-by-side; we translate -50% for a perfect loop */
        .logos-strip {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          will-change: transform;
          transform: translate3d(0,0,0);
          backface-visibility: hidden;
          gap: 0; /* tracks sit flush */
          --speed: 26s; /* desktop default */
          animation: none;
        }
        .logos-strip.is-ready {
          animation: logos-marquee var(--speed) linear infinite;
        }

        /* Each track contains one "set" of logos */
        .logos-set {
          display: inline-flex;
          flex-wrap: nowrap;
          width: max-content;
          align-items: center;
          gap: 3rem; /* space between logos */
        }

        /* Give every logo a fixed-width cell to eliminate layout shift */
        .logo-cell {
          flex: 0 0 9rem;         /* fixed cell width (adjust as needed) */
          height: 6rem;           /* fixed row height */
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-img {
          max-width: 100%;
          max-height: 100%;
          width: 9rem;
          height: auto;
          object-fit: contain;
          opacity: 0.8;
          transition: opacity 200ms ease;
        }
        .logo-img:hover { opacity: 1; }

        /* Speeds per breakpoint */
        @media (max-width: 1024px) { .logos-strip.is-ready { --speed: 20s; } }
        @media (max-width: 640px)  { .logos-strip.is-ready { --speed: 14s; } }

        /* Pause on hover for desktops */
        @media (hover: hover) and (pointer: fine) {
          .logos-viewport:hover .logos-strip.is-ready { animation-play-state: paused; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .logos-strip { animation: none !important; transform: none !important; }
        }

        @keyframes logos-marquee {
          0%   { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
      `}</style>

      <div className="logos-viewport">
        <div className={`logos-strip ${ready ? "is-ready" : ""}`}>
          {/* Track A */}
          <div className="logos-set" aria-hidden="false">
            {partnerLogos.map((logo, i) => (
              <div className="logo-cell" key={`A-${i}-${logo.name}`}>
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="logo-img"
                  width={144}  /* hint to layout (matches 9rem cell width) */
                  height={64}  /* hint to layout (matches 4rem height) */
                  loading="eager"         /* first set eager to stabilize layout quickly */
                  decoding="async"
                  onLoad={handleImgSettled}
                  onError={handleImgSettled}
                />
              </div>
            ))}
          </div>

          {/* Track B (identical to A) */}
          <div className="logos-set" aria-hidden="true">
            {partnerLogos.map((logo, i) => (
              <div className="logo-cell" key={`B-${i}-${logo.name}`}>
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="logo-img"
                  width={144}
                  height={64}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LogosSection.displayName = "LogosSection";
export default LogosSection;
