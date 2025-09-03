import { memo } from "react";

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
    { name: "AlNadej", url: "/lovable-uploads/al_nadej_logo.png", alt: "Al Nadej Logo" },
    { name: "BoulevardWord", url: "/lovable-uploads/boulevard_world_logo.svg", alt: "Boulevard World Logo" },
    { name: "Deera", url: "/lovable-uploads/deera_logo.png", alt: "Deera Logo" },
    { name: "Khozama", url: "/lovable-uploads/khozama_logo.png", alt: "Khozama Logo" },
    { name: "Lulu", url: "/lovable-uploads/lulu_logo.webp", alt: "Lulu Logo" },
    { name: "Sela", url: "/lovable-uploads/sela_logo.svg", alt: "Sela Logo" },
    { name: "BoulevardCity", url: "/lovable-uploads/boulevard_city_logo.svg", alt: "Boulevard City Logo" },
    { name: "DarAlArkan", url: "/lovable-uploads/dar_al_arkan.png", alt: "Dar Al Arkan Logo" },
    { name: "Hamat", url: "/lovable-uploads/hamat_logo.webp", alt: "Hamat Logo" },
    { name: "Kinan", url: "/lovable-uploads/kinan_logo.png", alt: "Kinan Logo" },
    { name: "Rawshan", url: "/lovable-uploads/rawshan_logo.svg", alt: "Rawshan Logo" },
    { name: "ShawarmaHouse", url: "/lovable-uploads/shawarma_house_logo.png", alt: "Shawarma House Logo" },
  ];

  return (
    <section
      className={`w-full py-16 overflow-hidden bg-white ${className}`}
      aria-label="Our trusted partners"
    >
      {/* Marquee styles */}
      <style>{`
        .logos-viewport {
          position: relative;
          overflow: hidden;
          /* Soft fade on edges */
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        /* The long strip that moves */
        .logos-strip {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;      /* shrink-to-fit actual content width */
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0,0,0);
          animation: logos-marquee 15s linear infinite;
          gap: 4rem;               /* space between logos */
          align-items: center;
        }

        /* One "set" of logos inside the strip */
        .logos-set {
          display: inline-flex;
          flex-wrap: nowrap;
          width: max-content;
          gap: 4rem;
          align-items: center;
        }

        /* Responsive speeds */
        @media (max-width: 1024px) {
          .logos-strip { animation-duration: 20s; }
        }
        @media (max-width: 640px) {
          .logos-strip { animation-duration: 12s; }
        }

        /* Pause on hover for desktops */
        @media (hover: hover) and (pointer: fine) {
          .logos-viewport:hover .logos-strip { animation-play-state: paused; }
        }

        /* Reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .logos-strip { animation: none !important; transform: none !important; }
        }

        /* Move exactly half of the total width (since we render two identical sets) */
        @keyframes logos-marquee {
          0%   { transform: translate3d(0%, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        /* Image sizing: fixed height, natural width, no jump */
        .logo-img {
          height: 4rem;   /* ~44px; adjust as you like */
          width: auto;
          object-fit: contain;
          opacity: 0.75;
          transition: opacity 200ms ease;
        }
        .logo-img:hover { opacity: 1; }
      `}</style>

      <div className="logos-viewport">
        {/* We render TWO identical sets back-to-back so the loop is seamless */}
        <div className="logos-strip" aria-hidden="false">
          <div className="logos-set">
            {partnerLogos.map((logo, i) => (
              <img
                key={`setA-${i}-${logo.name}`}
                src={logo.url}
                alt={logo.alt}
                className="logo-img"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="logos-set" aria-hidden="true">
            {partnerLogos.map((logo, i) => (
              <img
                key={`setB-${i}-${logo.name}`}
                src={logo.url}
                alt={logo.alt}
                className="logo-img"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LogosSection.displayName = "LogosSection";
export default LogosSection;
