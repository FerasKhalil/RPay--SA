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

  // Duplicate to create a seamless loop (x3 for safety on wide screens)
  const logoSets = Array(3).fill(partnerLogos).flat();

  return (
    <>
      <section
        className={`w-full py-16 overflow-hidden bg-white ${className}`}
        aria-label="Our trusted partners"
      >
        {/* Marquee styles */}
        <style>{`
        .logos-viewport {
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }
        .logos-track {
          display: inline-flex;
          gap: 5rem; /* approx space-x-20 */
          will-change: transform;
          animation-name: logos-marquee;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          transform: translate3d(0,0,0);
        }
        /* Default (desktop) duration */
        .logos-track { animation-duration: 28s; }

        /* Tablet: faster */
        @media (max-width: 1024px) {
          .logos-track { animation-duration: 20s; }
        }
        /* Mobile: fastest */
        @media (max-width: 640px) {
          .logos-track { animation-duration: 12s; }
        }

        /* Pause on hover for desktop (optional, ignored on touch) */
        @media (hover: hover) and (pointer: fine) {
          .logos-viewport:hover .logos-track { animation-play-state: paused; }
        }

        /* Reduced motion: stop animation */
        @media (prefers-reduced-motion: reduce) {
          .logos-track { animation: none !important; transform: none !important; }
        }

        /* Keyframes: move left by 33.333% to loop 3x content */
        @keyframes logos-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.333%, 0, 0); }
        }
      `}</style>

        <div className="relative w-full logos-viewport">
          {/* Single animated track containing 3x logos for seamless loop */}
          <div className="logos-track">
            {logoSets.map((logo, index) => (
              <div key={`logo-${index}`} className="flex-shrink-0">
                <img
                  src={logo.url}
                  alt={logo.alt}
                  className="h-16 w-full object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});

LogosSection.displayName = "LogosSection";
export default LogosSection;
