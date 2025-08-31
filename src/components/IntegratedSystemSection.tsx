interface IntegratedSystemSectionProps {
  className?: string;
}

const IntegratedSystemSection: React.FC<IntegratedSystemSectionProps> = ({ 
  className = "" 
}) => {
  return (
    <section 
      className={`relative w-full overflow-hidden py-16 lg:py-24 ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #4387C7, #214261)'
      }}
      aria-labelledby="integrated-system-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-cyan-400 rounded-full opacity-20 blur-xl" />
      <div className="absolute bottom-20 left-80 w-24 h-24 bg-cyan-300 rounded-full opacity-30 blur-lg" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Laptop Image */}
          <div className="relative z-10 order-2 lg:order-1">
            <div className="relative">
              <img 
                src="/lovable-uploads/7289d579-05a4-4ed4-956a-a785d553e06c.png"
                alt="R.Pay integrated dashboard system interface on laptop"
                className="w-full h-auto object-contain drop-shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Content - Text */}
          <div className="space-y-8 relative z-10 order-1 lg:order-2">
            {/* Arabic Section with Bubble */}
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-40 h-20 bg-cyan-400 rounded-full opacity-80 blur-sm" />
              
              <div className="relative bg-cyan-400/90 rounded-3xl p-6 backdrop-blur-sm">
                <h2 
                  className="text-white font-bold leading-tight text-center"
                  style={{ 
                    direction: 'rtl',
                    fontSize: 'clamp(18px, 4vw, 28px)',
                    fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
                  }}
                  id="integrated-system-heading"
                >
                  ار باي يقدم لك منظومة متكاملة لإدارة
                  <br />
                  مكائن البيع الذاتي
                </h2>
              </div>
            </div>

            {/* Arabic Description */}
            <p 
              className="text-white/90 leading-relaxed text-center lg:text-right"
              style={{ 
                direction: 'rtl',
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                lineHeight: '1.8'
              }}
            >
              نتيح لك قبول المدفوعات بسهولة، وتنظيم عملياتك بكفاءة، وزيادة مبيعاتك. كما 
              يمنح عملائك تجربة سلسة مدعومة بأدوات تحليل ذكية توفر لك رؤى أعمق وأداء أكثر 
              فعالية
            </p>

            {/* English Section with Bubble */}
            <div className="relative mt-12">
              <div className="absolute -bottom-4 -left-4 w-32 h-16 bg-cyan-300 rounded-full opacity-60 blur-sm" />
              
              <div className="relative bg-cyan-400/90 rounded-3xl p-6 backdrop-blur-sm">
                <h3 
                  className="text-white font-bold leading-tight text-center lg:text-left"
                  style={{ 
                    fontSize: 'clamp(18px, 4vw, 28px)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  R Pay offers you an integrated system for
                  <br />
                  managing self-service machines
                </h3>
              </div>
            </div>

            {/* English Description */}
            <p 
              className="text-white/90 leading-relaxed text-center lg:text-left"
              style={{ 
                fontSize: 'clamp(14px, 2.5vw, 18px)',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.8'
              }}
            >
              It enables you to accept payments easily, streamline your operations efficiently, and increase your sales. It 
              also provides your customers with a seamless experience supported by smart analytics tools that give you 
              deeper insights and enhanced performance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegratedSystemSection;