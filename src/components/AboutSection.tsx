import { memo } from "react";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = memo(({ className = "" }) => {
  return (
    <section 
      className={`relative w-full bg-[#EDEDED] overflow-hidden ${className}`}
      aria-labelledby="about-heading"
    >
      {/* Left gradient half circle - Full height */}
      <div 
        className="absolute top-0 left-0 w-80 h-full left-gradient-circle rounded-r-full" 
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Mobile Device Image */}
          <div className="relative z-10">
            <img 
              src="/lovable-uploads/9c708dad-0a12-4cd6-b549-b2bb51e8c402.png"
              alt="R.Pay mobile application interface showing payment and service management features"
              style={{ width: '652.24px', height: '607px' }}
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Arabic Heading - عن ار باي */}
            <h2 
              className="text-brand-dark font-bold leading-tight" 
              style={{ 
                direction: 'rtl',
                fontSize: 'clamp(32px, 5vw, 65px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
              }}
              id="about-heading"
            >
              عن ار باي
            </h2>
            
            {/* Arabic Description */}
            <p 
              className="text-black leading-relaxed"
              style={{ 
                direction: 'rtl',
                fontSize: 'clamp(16px, 2.5vw, 24.63px)',
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
                fontSize: 'clamp(32px, 5vw, 65px)',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              About R Pay
            </h3>
            
            {/* English Description */}
            <p 
              className="text-black leading-relaxed"
              style={{ 
                fontSize: 'clamp(16px, 2.5vw, 24.63px)',
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
});

AboutSection.displayName = 'AboutSection';

export default AboutSection;