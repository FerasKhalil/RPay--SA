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
    { name: "Beka", url: "/lovable-uploads/ecfd9f93-3b9d-45b2-9d49-bf56870f5e1c.png", alt: "Beka - Technology partner" },
    { name: "BlvdCity", url: "/lovable-uploads/41b38bae-5bc8-47af-ab6a-de13b7bd7ece.png", alt: "BlvdCity - Strategic partner" },
    { name: "Kinan", url: "/lovable-uploads/a2223f5f-cbe1-448a-901b-347a312bad21.png", alt: "Kinan - Business partner" },
    { name: "BlvdWorld", url: "/lovable-uploads/24afde7f-c420-4988-a527-eec640ab9ae0.png", alt: "BlvdWorld - Innovation partner" },
    { name: "Rozana", url: "/lovable-uploads/bb5315a7-4bfc-4709-9a98-e83ccd80450f.png", alt: "Rozana - Cultural partner" },
    { name: "LuLu", url: "/lovable-uploads/9692ff63-9b6c-42d2-9694-419455a12cbf.png", alt: "LuLu - Retail partner" },
    { name: "Zaha", url: "/lovable-uploads/db128ec3-1a8c-469f-925a-09a31829f263.png", alt: "Zaha - Development partner" },
  ];

  // Duplicate to create a seamless loop (x3 for safety on wide screens)
  const logoSets = Array(3).fill(partnerLogos).flat();

  return (
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
                className="h-16 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

LogosSection.displayName = "LogosSection";
export default LogosSection;
