const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#EDEDED] overflow-hidden min-h-screen">
      {/* Left gradient half circle - Full height */}
      <div className="absolute top-0 left-0 w-80 h-full left-gradient-circle rounded-r-full"></div>
      
      <div className="relative w-full h-full">
        {/* Left Content - Image */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '0px', top: '1420px' }}
        >
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=652&h=607&fit=crop"
            alt="R.Pay Mobile App Preview"
            style={{ width: '652.24px', height: '607px' }}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Arabic Heading - عن ار باي */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '1171.56px', top: '1428.23px' }}
        >
          <h2 
            className="text-brand-dark font-bold leading-tight" 
            style={{ 
              direction: 'rtl',
              fontSize: '65px',
              width: '374.44px',
              height: '82px',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
            }}
          >
            عن ار باي
          </h2>
        </div>
        
        {/* Arabic Description */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '595px', top: '1541.59px' }}
        >
          <p 
            className="text-black leading-relaxed"
            style={{ 
              direction: 'rtl',
              fontSize: '24.63px',
              fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}
          >
            ار باي هي شركة سعودية تقدّم حلولًا تقنية ذكية لقطاع الأجهزة والخدمات الذاتية، تتيح للمشغلين التحكم الكامل ومتابعة عملياتهم في الوقت الفعلي من خلال نظام موحد يجمع الدفع الإلكتروني والمراقبة التشغيلية. نهدف إلى دعم نمو الأعمال بكفاءة ومرونة
          </p>
        </div>

        {/* English Heading - About R Pay */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '607.4px', top: '1718.72px' }}
        >
          <h3 
            className="text-brand-dark font-bold leading-tight"
            style={{ 
              fontSize: '65px',
              width: '374.44px',
              height: '82px',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            About R Pay
          </h3>
        </div>
        
        {/* English Description */}
        <div 
          className="absolute z-10 hidden lg:block"
          style={{ left: '607.4px', top: '1821.45px' }}
        >
          <p 
            className="text-black leading-relaxed"
            style={{ 
              fontSize: '24.63px',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.6',
              maxWidth: '600px'
            }}
          >
            R Pay is a Saudi company offering smart tech solutions for the self-service and device sector. Our unified system enables operators to manage and monitor their operations in real time, integrating e-payment and operational control. We aim to support business growth with efficiency and flexibility
          </p>
        </div>
      </div>

      {/* Mobile responsive layout */}
      <div className="block lg:hidden relative max-w-7xl mx-auto px-6 py-12 mt-8">
        <div className="space-y-8 relative z-10">
          <img 
            src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop"
            alt="R.Pay Mobile App Preview"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
          <div className="space-y-6">
            <h2 className="text-brand-dark font-bold text-4xl" style={{ direction: 'rtl', fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}>
              عن ار باي
            </h2>
            <p className="text-black text-lg leading-relaxed" style={{ direction: 'rtl', fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}>
              ار باي هي شركة سعودية تقدّم حلولًا تقنية ذكية لقطاع الأجهزة والخدمات الذاتية، تتيح للمشغلين التحكم الكامل ومتابعة عملياتهم في الوقت الفعلي من خلال نظام موحد يجمع الدفع الإلكتروني والمراقبة التشغيلية. نهدف إلى دعم نمو الأعمال بكفاءة ومرونة
            </p>
            <h3 className="text-brand-dark font-bold text-4xl">About R Pay</h3>
            <p className="text-black text-lg leading-relaxed">
              R Pay is a Saudi company offering smart tech solutions for the self-service and device sector. Our unified system enables operators to manage and monitor their operations in real time, integrating e-payment and operational control. We aim to support business growth with efficiency and flexibility
            </p>
          </div>
        </div>
      </div>

      {/* Extra spacing for absolute positioning */}
      <div className="h-screen lg:h-[120vh]"></div>
    </section>
  );
};

export default AboutSection;