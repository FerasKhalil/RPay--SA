const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#EDEDED] overflow-hidden min-h-screen">
      {/* Right gradient half circle - Full height */}
      <div className="absolute top-0 right-0 w-80 h-full right-gradient-circle rounded-l-full"></div>
      
      <div className="relative w-full h-full">
        {/* Device Mockup - Positioned absolutely */}
        <div className="absolute z-10 hidden lg:block" style={{ left: '453px', top: '312px' }}>
          <img 
            src="/lovable-uploads/ab03388b-9ae5-4ff1-92a5-d92d04875365.png"
            alt="R.Pay Dashboard on devices"
            style={{ width: '1154.5px', height: '716px' }}
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Arabic Heading - حلول ذكية */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '193.25px', top: '450px' }}
        >
          <h1 
            className="text-brand-dark font-bold leading-tight" 
            style={{ 
              direction: 'rtl',
              fontSize: '65px',
              width: '365.23px',
              height: '79.56px',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
            }}
          >
            حلول ذكية
          </h1>
        </div>
        
        {/* Arabic Subtitle - لمستقبل افضل */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '51px', top: '534.23px' }}
        >
          <h2 
            className="text-brand-dark leading-tight"
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
            className="text-brand-dark font-bold leading-tight"
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

        {/* R.Pay Logo */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '218px', top: '722px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=332&h=151&fit=crop"
            alt="R.Pay Logo"
            style={{ width: '332.26px', height: '150.72px' }}
            className="object-contain"
          />
        </div>
      </div>

      {/* Mobile responsive layout */}
      <div className="block lg:hidden relative max-w-7xl mx-auto px-6 py-12">
        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <h1 className="text-brand-dark font-bold text-4xl" style={{ direction: 'rtl', fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}>
              حلول ذكية
            </h1>
            <h2 className="text-brand-dark text-4xl" style={{ direction: 'rtl', fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}>
              لمستقبل أفضل
            </h2>
            <h3 className="text-brand-dark font-bold text-4xl">Smart Solutions</h3>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=332&h=151&fit=crop"
            alt="R.Pay Logo"
            className="w-64 h-auto object-contain"
          />
          <img 
            src="/lovable-uploads/ab03388b-9ae5-4ff1-92a5-d92d04875365.png"
            alt="R.Pay Dashboard"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Spacing for absolute positioning */}
      <div className="h-screen lg:h-[900px]"></div>
    </section>
  );
};

export default HeroSection;