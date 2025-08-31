const MissionSection = () => {
  return (
    <section className="relative w-full bg-primary overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Text */}
          <div className="space-y-8 relative z-10">
            {/* Logo/Icon */}
            <div className="flex items-center space-x-4 mb-8">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-primary rounded-full"></div>
              </div>
              <span className="text-white text-xl font-medium">مهمتنا</span>
            </div>

            {/* Arabic Text */}
            <p 
              className="text-white leading-relaxed"
              style={{ 
                direction: 'rtl',
                fontSize: '18px',
                fontFamily: 'DIN Next LT Arabic, Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              تمكين المشغلين من تعزيز الكفاءة التشغيلية وتقديم
              تجربة خدمة ملائمة للمستخدم
            </p>

            {/* English Heading */}
            <h2 
              className="text-white font-bold leading-tight"
              style={{ 
                fontSize: '48px',
                fontFamily: 'Inter, sans-serif'
              }}
            >
              Our Mission
            </h2>
            
            {/* English Description */}
            <p 
              className="text-white/90 leading-relaxed"
              style={{ 
                fontSize: '18px',
                fontFamily: 'Inter, sans-serif',
                lineHeight: '1.6'
              }}
            >
              To empower operators by enhancing operational efficiency and delivering a smooth service experience
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="relative z-10">
            <img 
              src="/lovable-uploads/58dbf48f-731c-4576-92c4-770c18ae4261.png"
              alt="Saudi professional with R.Pay tablet"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;