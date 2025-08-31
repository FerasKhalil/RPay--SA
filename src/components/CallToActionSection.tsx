import { memo } from "react";

interface CallToActionSectionProps {
  className?: string;
}

const CallToActionSection: React.FC<CallToActionSectionProps> = memo(({ 
  className = "" 
}) => {
  const whatsappNumber = "+966 50 123 4567"; // Replace with actual number
  const whatsappMessage = encodeURIComponent("مرحباً، أريد معرفة المزيد عن خدمات R.Pay");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=${whatsappMessage}`, '_blank');
  };

  return (
    <section 
      className={`relative w-full overflow-hidden py-16 lg:py-24 ${className}`}
      style={{ 
        background: 'linear-gradient(to bottom, #4387C7, #214261)' 
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Professional with Device Overlay */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="relative">
              {/* Main Professional Image */}
              <img 
                src="/lovable-uploads/e56e07ba-f2ae-4c18-8a72-a8c40c6b8c0b.png"
                alt="Professional Saudi businessman working with laptop for R.Pay smart payment solutions"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              
              {/* R.Pay Device Positioned Near Hand */}
              <div className="absolute bottom-20 right-20 z-20">
                <img 
                  src="/lovable-uploads/1d5e5fc0-e557-4b4e-86a3-3df569b2f051.png"
                  alt="R.Pay payment device"
                  className="w-16 h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Right Content - Call to Action with Bubble */}
          <div className="space-y-8 relative z-10 order-1 lg:order-2">
            {/* Main CTA Bubble */}
            <div className="relative">
              <div className="bg-gray-900/95 rounded-3xl p-8 backdrop-blur-sm">
                {/* Arabic Heading */}
                <h2 
                  className="text-white font-bold leading-tight mb-4"
                  style={{ 
                    direction: 'rtl',
                    fontSize: 'clamp(18px, 4vw, 32px)',
                    fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                    lineHeight: '1.2'
                  }}
                  id="cta-heading"
                >
                  انضم إلينا وابدأ البيع الذاتي الآن بكل سهولة
                </h2>

                {/* English Heading */}
                <h3 
                  className="text-white/90 font-semibold leading-tight"
                  style={{ 
                    fontSize: 'clamp(16px, 3vw, 24px)',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.3'
                  }}
                >
                  Join us and start self-selling with ease now
                </h3>
              </div>
            </div>

            {/* WhatsApp CTA Button */}
            <div className="mt-8">
              <button
                onClick={handleWhatsAppClick}
                className="group inline-flex items-center space-x-4 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-300"
                aria-label="Contact us on WhatsApp to start with R.Pay"
              >
                {/* WhatsApp Icon */}
                <div className="bg-white rounded-full p-2">
                  <svg 
                    className="w-6 h-6 text-green-500" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
                  </svg>
                </div>

                {/* Contact Information */}
                <div className="flex flex-col items-start">
                  <span 
                    className="text-sm font-medium"
                    style={{ fontFamily: 'DIN Next LT Arabic, Inter, sans-serif' }}
                  >
                    احصل على عرض سعرك الآن
                  </span>
                  <span 
                    className="text-xs opacity-90"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Grab Your Quote Now
                  </span>
                </div>

                {/* Hand Cursor Icon */}
                <div className="text-white/80 group-hover:text-white transition-colors">
                  <svg 
                    className="w-6 h-6" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"/>
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CallToActionSection.displayName = 'CallToActionSection';

export default CallToActionSection;