const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#EDEDED] overflow-hidden min-h-screen">
      {/* Right gradient half circle */}
      <div className="absolute top-0 right-0 w-96 h-full right-gradient-circle transform translate-x-48 rounded-l-full"></div>
      
      <div className="relative w-full h-full">
        {/* Device Mockup - Positioned absolutely */}
        <div className="absolute z-10" style={{ left: '453px', top: '312px' }}>
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1155&h=716&fit=crop"
            alt="R.Pay Dashboard on devices"
            style={{ width: '1154.5px', height: '716px' }}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Arabic Heading - حلول ذكية */}
        <div 
          className="absolute z-10"
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
          className="absolute z-10"
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
            لمستقبل افضل
          </h2>
        </div>
        
        {/* English Heading */}
        <div 
          className="absolute z-10"
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
          className="absolute z-10"
          style={{ left: '218px', top: '722px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=332&h=151&fit=crop"
            alt="R.Pay Logo"
            style={{ width: '332.26px', height: '150.72px' }}
            className="object-cover rounded-lg"
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
              لمستقبل افضل
            </h2>
            <h3 className="text-brand-dark font-bold text-4xl">Smart Solutions</h3>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=332&h=151&fit=crop"
            alt="R.Pay Logo"
            className="w-64 h-auto object-cover rounded-lg"
          />
          <img 
            src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop"
            alt="R.Pay Dashboard"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;