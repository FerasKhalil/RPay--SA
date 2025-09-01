import { memo } from "react";

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = memo(({ className = "" }) => {
  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #4387C7, #214261)'
      }}
      aria-labelledby="mission-heading"
    >
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Logo/Icon */}
            <div className="flex items-center space-x-4 mb-8" dir="rtl">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </div>
              <span
                className="text-white text-xl font-medium pr-4"
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                مهمتنا
              </span>

            </div>

            {/* Arabic Text */}
            <p
              className="text-white leading-relaxed"
              style={{
                direction: 'rtl',
                fontSize: 'clamp(16px, 2.5vw, 18px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              تمكين المشغلين من تعزيز الكفاءة التشغيلية وتقديم
              تجربة خدمة ملائمة للمستخدم
            </p>

            {/* English Heading */}

            <div className="flex items-center space-x-4 mb-8" dir="ltr">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full" />
              </div>
              <span
                className="text-white text-xl font-medium pr-4"
                style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Our Mission
              </span>

            </div>

            {/* English Description */}
            <p
              className="text-white/90 leading-relaxed"
              style={{
                fontSize: 'clamp(16px, 2.5vw, 18px)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              To empower operators by enhancing operational efficiency and delivering a smooth service experience
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-10 -mb-20">
            <img
              src="/lovable-uploads/7d76c3b9-ef60-4f7a-a76e-e4e99161aaf7.png"
              alt="Saudi professional demonstrating R.Pay tablet interface for smart payment solutions"
              className="w-full h-auto object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

MissionSection.displayName = 'MissionSection';

export default MissionSection;