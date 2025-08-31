const AboutSection = () => {
  return (
    <section className="relative w-full bg-[#EDEDED] overflow-hidden">
      {/* Left gradient half circle */}
      <div className="absolute top-0 left-0 w-96 h-full left-gradient-circle transform -translate-x-48 rounded-r-full"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Image */}
          <div className="relative z-10">
            <img 
              src="https://via.placeholder.com/652x607/333333/FFFFFF?text=Mobile+App+Preview"
              alt="R.Pay Mobile App Preview"
              style={{ width: '652.24px', height: '607px' }}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Arabic Heading - عن ار باي */}
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
            
            {/* Arabic Description */}
            <p 
              className="text-black leading-relaxed"
              style={{ 
                direction: 'rtl',
                fontSize: '18px',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              ار باي هي شركة سعودية تقدّم حلولًا تقنية ذكية لقطاع الأجهزة والخدمات الذاتية، تتيح للمشغلين التحكم الكامل ومتابعة عملياتهم في الوقت الفعلي من خلال نظام موحد يجمع الدفع الإلكتروني والمراقبة التشغيلية. نهدف إلى دعم نمو الأعمال بكفاءة ومرونة
            </p>

            {/* English Heading - About R Pay */}
            <h3 
              className="text-brand-dark font-bold leading-tight mt-8"
              style={{ 
                fontSize: '65px',
                width: '374.44px',
                height: '82px',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              About R Pay
            </h3>
            
            {/* English Description */}
            <p 
              className="text-black leading-relaxed"
              style={{ 
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              R Pay is a Saudi company offering smart tech solutions for the self-service and device sector. Our unified system enables operators to manage and monitor their operations in real time, integrating e-payment and operational control. We aim to support business growth with efficiency and flexibility
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;