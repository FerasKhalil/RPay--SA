import deviceMockup from "@/assets/device-mockup.png";

const HeroSection = () => {
  return (
    <section className="w-full px-6 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Arabic Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight" style={{ direction: 'rtl' }}>
                حلول ذكية
                <br />
                لمستقبل أفضل
              </h1>
              
              {/* English Heading */}
              <h2 className="text-3xl lg:text-4xl font-semibold text-primary">
                Smart Solutions
              </h2>
            </div>

            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-light to-primary rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-primary-foreground font-bold text-2xl">R</span>
              </div>
              <span className="text-4xl font-light text-primary-light">Pay</span>
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-md leading-relaxed">
              Experience the future of payments with our intelligent, secure, and user-friendly platform designed for modern businesses.
            </p>
          </div>

          {/* Right Content - Device Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={deviceMockup} 
                alt="R.Pay Dashboard on devices - showing payment terminals, reports, and transaction management interface"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>
            
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary-light/10 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl -z-20"></div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-primary-light/15 rounded-full blur-3xl -z-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;