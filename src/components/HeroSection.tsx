import { memo } from "react";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = memo(({ className = "" }) => {
  return (
    <section 
      className={`relative w-full overflow-hidden min-h-screen ${className}`}
      style={{
        background: 'linear-gradient(135deg, #4387C7 0%, #214261 100%)'
      }}
      aria-labelledby="hero-heading"
    >
      
      <div className="relative w-full h-full">
        {/* Device Mockup - Desktop positioned absolutely */}
        <div 
          className="absolute z-10 hidden lg:block" 
          style={{ left: '453px', top: '312px' }}
        >
          <img 
            src="/lovable-uploads/ba46e715-85a6-4b8c-b71c-485d882f82de.png"
            alt="R.Pay dashboard interface displayed on laptop and mobile devices showing analytics and payment management"
            style={{ width: '1154.5px', height: '716px' }}
            className="w-full h-auto object-contain"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Arabic Heading - حلول ذكية */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '193.25px', top: '450px' }}
        >
          <h1 
            className="text-white font-bold leading-tight" 
            style={{ 
              direction: 'rtl',
              fontSize: '65px',
              width: '365.23px',
              height: '79.56px',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
            }}
            id="hero-heading"
          >
            حلول ذكية
          </h1>
        </div>
        
        {/* Arabic Subtitle - لمستقبل أفضل */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '51px', top: '534.23px' }}
        >
          <h2 
            className="text-white leading-tight"
            style={{ 
              direction: 'rtl',
              fontSize: '65px',
              width: '648.77px',
              height: '80px',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
            }}
          >
            لمستقبل أفضل
          </h2>
        </div>
        
        {/* English Heading */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '128.66px', top: '618.44px' }}
        >
          <h3 
            className="text-white font-bold leading-tight"
            style={{ 
              fontSize: '65px',
              width: '494.39px',
              height: '79.56px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            Smart Solutions
          </h3>
        </div>

        {/* R.Pay Logo in Blue Frame */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '218px', top: '722px' }}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg" style={{ width: '332.26px', height: '150.72px' }}>
            <img 
              src="/lovable-uploads/98afb416-bf26-43aa-87c9-a5336bb6f2bb.png"
              alt="R.Pay company logo"
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Mobile responsive layout */}
      <div className="block lg:hidden relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8 relative z-10">
          <header className="space-y-4 text-center">
            <h1 
              className="text-white font-bold text-4xl" 
              style={{ 
                direction: 'rtl', 
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' 
              }}
            >
              حلول ذكية
            </h1>
            <h2 
              className="text-white text-4xl" 
              style={{ 
                direction: 'rtl', 
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' 
              }}
            >
              لمستقبل أفضل
            </h2>
            <h3 className="text-white font-bold text-4xl">
              Smart Solutions
            </h3>
          </header>
          
          <div className="bg-white p-4 rounded-lg shadow-lg mx-auto w-64">
            <img 
              src="/lovable-uploads/98afb416-bf26-43aa-87c9-a5336bb6f2bb.png"
              alt="R.Pay company logo"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
          
          <img 
            src="/lovable-uploads/ba46e715-85a6-4b8c-b71c-485d882f82de.png"
            alt="R.Pay dashboard interface"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </div>

      {/* Spacing for absolute positioning */}
      <div className="h-screen lg:h-[900px]" aria-hidden="true" />
    </section>
  );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;