import { memo } from "react";

interface PaymentMethod {
  id: string;
  name: string;
  logo: string;
  alt: string;
}

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = memo(({
  className = ""
}) => {
  const paymentMethods: PaymentMethod[] = [
    {
      id: 'mada',
      name: 'Mada',
      logo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=60&h=40&fit=crop',
      alt: 'Mada payment card logo'
    },
    {
      id: 'mastercard',
      name: 'Mastercard',
      logo: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=60&h=40&fit=crop',
      alt: 'Mastercard payment logo'
    },
    {
      id: 'american-express',
      name: 'American Express',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=60&h=40&fit=crop',
      alt: 'American Express payment logo'
    },
    {
      id: 'visa',
      name: 'Visa',
      logo: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=60&h=40&fit=crop',
      alt: 'Visa payment card logo'
    },
    {
      id: 'apple-pay',
      name: 'Apple Pay',
      logo: 'https://images.unsplash.com/photo-1611532736946-4e5dae86c6d8?w=60&h=40&fit=crop',
      alt: 'Apple Pay digital payment logo'
    },
    {
      id: 'samsung-pay',
      name: 'Samsung Pay',
      logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=60&h=40&fit=crop',
      alt: 'Samsung Pay digital payment logo'
    }
  ];

  return (
    <section
      className={`relative w-full bg-[#EDEDED] overflow-hidden py-16 lg:py-24 ${className}`}
      aria-labelledby="integrated-payment-heading"
    >
      {/* Right gradient half circle - Background for device */}
      <div
        className="absolute top-0 right-0 w-96 h-full rounded-l-full"
        style={{
          background: 'linear-gradient(to bottom, #54B1F2, #0D3259)'
        }}
        aria-hidden="true"
      />

      {/* Decorative WiFi Icons */}
      <div className="absolute top-10 right-20 w-16 h-16 opacity-30 z-10">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 9.5a15.5 15.5 0 0120 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="absolute top-32 right-32 w-12 h-12 opacity-20 z-10">
        <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
          <path d="M12 20h.01M8.5 16.5a5 5 0 017 0M5 13a10 10 0 0114 0M2 9.5a15.5 15.5 0 0120 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Arabic Heading */}
            <h2
              className="text-foreground font-bold leading-tight"
              style={{
                direction: 'ltr',
                fontSize: 'clamp(24px, 5vw, 48px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                color: "#002741"
              }}
              id="integrated-payment-heading"
            >
              حلول ذكية
            </h2>
            <h2
              className="text-foreground font-bold leading-tight"
              style={{
                direction: 'ltr',
                fontSize: 'clamp(4px, 4vw, 38px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                color: "#002741"
              }}
              id="integrated-payment-heading"
            >
              لمستقبـــــــــل أفضــــــل
            </h2>

            {/* Arabic Subheading */}
            <div className="">
              <img
                src="/lovable-uploads/98afb416-bf26-43aa-87c9-a5336bb6f2bb.png"
                alt="R.Pay integrated smart payment device showing Remote Pay interface with contactless payment capabilities"
                className="w-[200px] h-auto object-contain relative z-10"
              />

            </div>
          </div>

          {/* Right Content - Device Image */}
          <div className="relative z-20 flex justify-center lg:justify-end">
            <div className="relative">
              <img
                src="/lovable-uploads/cbd4e09c-f16f-4a62-8a2b-415b5cc9b864.png"
                alt="R.Pay integrated smart payment device showing Remote Pay interface with contactless payment capabilities"
                className="w-[600px] h-[450px]  drop-shadow-4xl relative z-10"
                loading="lazy"
              />

            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;