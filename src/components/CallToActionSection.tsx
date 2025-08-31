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
        background: 'linear-gradient(to right, #43B7C7, #214261)' 
      }}
      aria-labelledby="cta-heading"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Professional Image */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/7fafbc66-8a75-4fb9-b90a-33d4dd14078e.png"
                alt="Professional Saudi businessman working with R.Pay system at modern office desk with laptop and payment device"
                className="w-full h-auto object-contain"
                loading="lazy"
              />
              
              {/* Subtle glow effect */}
              <div 
                className="absolute inset-0 -z-10 bg-gradient-to-br from-white/10 to-transparent rounded-3xl blur-2xl"
                aria-hidden="true"
              />
            </div>
          </div>

          {/* Right Content - Call to Action */}
          <div className="space-y-8 relative z-10 order-1 lg:order-2">
            {/* Arabic Heading */}
            <h2 
              className="text-white font-bold leading-tight"
              style={{ 
                direction: 'rtl',
                fontSize: 'clamp(24px, 5vw, 48px)',
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
                fontSize: 'clamp(18px, 4vw, 32px)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.3'
              }}
            >
              Join us and start self-selling with ease now
            </h3>

            {/* WhatsApp CTA Button */}
            <div className="mt-12">
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
                    تواصل معنا عبر واتساب
                  </span>
                  <span 
                    className="text-xs opacity-90"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {whatsappNumber}
                  </span>
                </div>

                {/* Hand Cursor Icon */}
                <div className="text-white/80 group-hover:text-white transition-colors">
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M10.5 15L15.5 10l-5-5v10z"/>
                    <path d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5z" opacity="0.3"/>
                  </svg>
                </div>
              </button>
            </div>

            {/* Additional Contact Info */}
            <div className="mt-8 space-y-2">
              <p 
                className="text-white/80 text-sm"
                style={{ 
                  fontSize: 'clamp(12px, 2vw, 14px)',
                  fontFamily: 'Inter, sans-serif'
                }}
              >
                Ready to transform your business with smart payment solutions?
              </p>
              <p 
                className="text-white/70 text-xs"
                style={{ 
                  direction: 'rtl',
                  fontSize: 'clamp(11px, 1.5vw, 13px)',
                  fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
                }}
              >
                فريقنا جاهز لمساعدتك في بدء رحلتك مع أحدث تقنيات الدفع
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

CallToActionSection.displayName = 'CallToActionSection';

export default CallToActionSection;