import { memo } from "react";

interface DeviceType {
  id: string;
  nameAr: string;
  nameEn: string;
  imageUrl: string;
  alt: string;
}

interface DevicesSectionProps {
  className?: string;
}

const DevicesSection: React.FC<DevicesSectionProps> = memo(({ 
  className = "" 
}) => {
  const supportedDevices: DeviceType[] = [
    {
      id: 'boxing-machine',
      nameAr: 'آلة الملاكمة',
      nameEn: 'Boxing Machine',
      imageUrl: '/lovable-uploads/ebf5f335-252d-40b3-a723-e629a53bfbec.png',
      alt: 'Professional boxing arcade machine with digital scoring display and punching bag'
    },
    {
      id: 'arcade-game',
      nameAr: 'آلة الألعاب',
      nameEn: 'Arcade Game Machine',
      imageUrl: '/lovable-uploads/206c4192-0b6f-41a4-9f5b-2867eb163cc9.png',
      alt: 'Classic arcade game machine with colorful display and control buttons'
    },
    {
      id: 'vending-machine',
      nameAr: 'آلة البيع الآلي',
      nameEn: 'Vending Machine',
      imageUrl: '/lovable-uploads/ee2b7f02-7476-4186-b258-e3cafae6d576.png',
      alt: 'Modern vending machine with snacks and beverages display'
    },
    {
      id: 'coffee-machine',
      nameAr: 'آلة القهوة',
      nameEn: 'Coffee Machine',
      imageUrl: '/lovable-uploads/d35d1f41-7bab-4fcc-ac1e-a4a486eaad0c.png',
      alt: 'Professional coffee vending machine with multiple beverage options'
    }
  ];

  return (
    <section 
      className={`relative w-full overflow-hidden py-16 lg:py-24 ${className}`}
      style={{
        background: 'linear-gradient(to bottom, #4387C7, #214261)'
      }}
      aria-labelledby="devices-heading"
    >
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-400 rounded-full opacity-20 blur-xl" aria-hidden="true" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-cyan-300 rounded-full opacity-15 blur-2xl" aria-hidden="true" />
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-6">
          {/* Arabic Heading with Bubble */}
          <div className="relative inline-block">
            <div className="absolute -top-2 -right-4 w-32 h-16 bg-cyan-400 rounded-full opacity-60 blur-lg" aria-hidden="true" />
            
            <div className="relative bg-cyan-400/90 rounded-3xl px-8 py-4 backdrop-blur-sm">
              <h2 
                className="text-white font-bold leading-tight"
                style={{ 
                  direction: 'rtl',
                  fontSize: 'clamp(18px, 4vw, 32px)',
                  fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
                }}
                id="devices-heading"
              >
                جهاز ار باي يدعم جميع أجهزة البيع الذاتي
              </h2>
            </div>
          </div>

          {/* English Heading */}
          <h3 
            className="text-white font-semibold leading-tight"
            style={{ 
              fontSize: 'clamp(16px, 3vw, 24px)',
              fontFamily: 'Inter, sans-serif'
            }}
          >
            The R Pay device supports all self-service machines
          </h3>
        </div>

        {/* Devices Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {supportedDevices.map((device, index) => (
            <div
              key={device.id}
              className="group relative bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Device Image */}
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={device.imageUrl}
                  alt={device.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
              </div>

              {/* Device Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <h4 
                  className="text-white font-semibold text-center leading-tight"
                  style={{ 
                    direction: 'rtl',
                    fontSize: 'clamp(12px, 2vw, 16px)',
                    fontFamily: 'DIN Next LT Arabic, Inter, sans-serif'
                  }}
                >
                  {device.nameAr}
                </h4>
                <p 
                  className="text-white/90 text-center mt-1"
                  style={{ 
                    fontSize: 'clamp(10px, 1.5vw, 12px)',
                    fontFamily: 'Inter, sans-serif'
                  }}
                >
                  {device.nameEn}
                </p>
              </div>

              {/* R.Pay Compatible Badge */}
              <div className="absolute top-3 right-3 bg-primary/90 text-white text-xs font-medium px-2 py-1 rounded-full backdrop-blur-sm">
                R.Pay
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Description */}
        <div className="text-center mt-12">
          <p 
            className="text-white/90 leading-relaxed max-w-3xl mx-auto"
            style={{ 
              fontSize: 'clamp(14px, 2.5vw, 18px)',
              fontFamily: 'Inter, sans-serif',
              lineHeight: '1.6'
            }}
          >
            Our versatile payment solution seamlessly integrates with various self-service machines, 
            providing operators with comprehensive control and customers with convenient payment options.
          </p>
        </div>
      </div>
    </section>
  );
});

DevicesSection.displayName = 'DevicesSection';

export default DevicesSection;