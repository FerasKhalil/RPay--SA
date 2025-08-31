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
                direction: 'rtl',
                fontSize: 'clamp(24px, 5vw, 48px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                color: "#002741"
              }}
              id="integrated-payment-heading"
            >
              حلول ذكية            </h2>
            <h2
              className="text-foreground font-bold leading-tight"
              style={{
                direction: 'rtl',
                fontSize: 'clamp(24px, 5vw, 48px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                color: "#002741"
              }}
              id="integrated-payment-heading"
            >
              حلول ذكية            </h2>

            {/* Arabic Subheading */}
            <h3
              className="text-primary font-semibold leading-tight"
              style={{
                direction: 'rtl',
                fontSize: 'clamp(16px, 3vw, 24px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
              }}
            >
              كيف يعمل
            </h3>

            {/* Arabic Description */}
            <p
              className="text-foreground/80 leading-relaxed"
              style={{
                direction: 'rtl',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              وحدة دفع إلكترونية داخل كل جهاز تدعم البطاقات والمحافظ الرقمية غير
              العمليات مباشرة في لوحة التحكم
            </p>

            {/* English Heading */}
            <h4
              className="text-foreground font-bold leading-tight mt-8"
              style={{
                fontSize: 'clamp(20px, 4vw, 36px)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Integrated Smart Payment
            </h4>

            {/* How it works */}
            <div className="space-y-4">
              <h5
                className="text-primary font-semibold"
                style={{
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                How it works
              </h5>

              <p
                className="text-foreground/80 leading-relaxed"
                style={{
                  fontSize: 'clamp(13px, 2vw, 16px)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.6'
                }}
              >
                Embedded electronic payment unit in every machine Supports cards and digital wallets with real-time dashboard integration
              </p>
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              <h5
                className="text-primary font-semibold"
                style={{
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Benefits
              </h5>

              <p
                className="text-foreground/80 leading-relaxed"
                style={{
                  fontSize: 'clamp(13px, 2vw, 16px)',
                  fontFamily: 'Inter, sans-serif',
                  lineHeight: '1.6'
                }}
              >
                Secure seamless payment, Less cash handling, and enhanced professionalism
              </p>
            </div>

            {/* Payment Methods */}
            <div className="space-y-4">
              <h6
                className="text-foreground font-medium"
                style={{
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Supported Payment Methods
              </h6>

              <div className="flex flex-wrap items-center gap-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.id}
                    className="bg-white rounded-lg p-2 shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <img
                      src={method.logo}
                      alt={method.alt}
                      className="w-12 h-8 object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
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