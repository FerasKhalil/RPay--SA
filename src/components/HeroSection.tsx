import { useState, useEffect } from "react";

const HeroSection = () => {
  return (
    <section className="relative w-full bg-[#EDEDED] overflow-hidden">
      {/* Right gradient half circle */}
      <div className="absolute top-0 right-0 w-96 h-full right-gradient-circle transform translate-x-48 rounded-l-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            {/* Arabic Heading - حلول ذكية */}
            <div className="space-y-4">
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
              
              {/* Arabic Subtitle - لمستقبل افضل */}
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
              
              {/* English Heading */}
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
            <div className="mt-8">
              <img 
                src="https://via.placeholder.com/332x151/54B1F2/FFFFFF?text=R.Pay"
                alt="R.Pay Logo"
                style={{ width: '332.26px', height: '150.72px' }}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="relative z-10">
            <img 
              src="https://via.placeholder.com/1155x716/333333/FFFFFF?text=Dashboard+Mockup"
              alt="R.Pay Dashboard on devices"
              style={{ width: '1154.5px', height: '716px' }}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;