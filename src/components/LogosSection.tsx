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
    { 
      name: "Samsung", 
      url: "https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=120&h=60&fit=crop",
      alt: "Samsung - Technology partner"
    },
    { 
      name: "Beko", 
      url: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=120&h=60&fit=crop",
      alt: "Beko - Appliance partner"
    },
    { 
      name: "Toshiba", 
      url: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=120&h=60&fit=crop",
      alt: "Toshiba - Technology solutions partner"
    },
    { 
      name: "Apple", 
      url: "https://images.unsplash.com/photo-1611532736946-4e5dae86c6d8?w=120&h=60&fit=crop",
      alt: "Apple - Innovation partner"
    },
    { 
      name: "Microsoft", 
      url: "https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=120&h=60&fit=crop",
      alt: "Microsoft - Software solutions partner"
    },
    { 
      name: "Kinan", 
      url: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=120&h=60&fit=crop",
      alt: "Kinan - Business partner"
    },
    { 
      name: "LuLu", 
      url: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=120&h=60&fit=crop",
      alt: "LuLu - Retail partner"
    },
    { 
      name: "Blueicity", 
      url: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=120&h=60&fit=crop",
      alt: "Blueicity - Strategic partner"
    }
  ];

  // Create triple array for seamless infinite scroll
  const logoSets = Array(3).fill(partnerLogos).flat();

  return (
    <section 
      className={`w-full bg-[#FFFFFF] py-16 overflow-hidden ${className}`}
      aria-label="Our trusted partners"
    >
      <div className="relative w-full">
        <div className="flex logos-scroll">
          <div className="flex items-center space-x-20 min-w-full justify-center">
            {logoSets.map((logo, index) => (
              <div key={`logo-${index}`} className="flex-shrink-0">
                <img 
                  src={logo.url}
                  alt={logo.alt}
                  className="h-12 w-24 object-contain grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

LogosSection.displayName = 'LogosSection';

export default LogosSection;