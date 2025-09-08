import { memo, useEffect, useRef } from "react";
import {
  CreditCard,
  Gamepad2,
  RefreshCw,
  Cog,
  MapPin,
  Package,
  Tags,
  BarChart3,
  Monitor,
  Users,
  Plus,
  Smartphone,
} from "lucide-react";

interface Feature {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  titleAr: string;
  titleEn: string;
}

const FeaturesSection = () => {
  const features: Feature[] = [
    { id: "direct-rewards", icon: CreditCard, titleAr: "التحصيل المباشر في حساب العميل أو المستخدم", titleEn: "Direct rewards collection to the owner or user account" },
    { id: "game-activation", icon: Gamepad2, titleAr: "تشغيل الألعاب", titleEn: "Game activation" },
    { id: "automatic-refund-games", icon: RefreshCw, titleAr: "استرداد تلقائي", titleEn: "Automatic refund" },
    { id: "remote-control", icon: Cog, titleAr: "تحكم التحديث عن بُعد", titleEn: "Remote control and updates" },
    { id: "gps-geofencing", icon: MapPin, titleAr: "تتبع جغرافي", titleEn: "GPS Geofencing" },
    { id: "inventory-management", icon: Package, titleAr: "إدارة المخزون", titleEn: "Inventory management" },
    { id: "white-label", icon: Tags, titleAr: "اضافة علامتك التجارية", titleEn: "White label option" },
    { id: "real-time-dashboard", icon: BarChart3, titleAr: "لوحة مبيعات وتحليلات لحظية", titleEn: "Real-time sales dashboard and analytics" },
    { id: "device-monitoring", icon: Monitor, titleAr: "مراقبة حالة الجهاز الفورية", titleEn: "Instant device status monitoring" },
    { id: "remote-training", icon: Users, titleAr: "تدريب ودعم عن بُعد", titleEn: "Remote training and support" },
    { id: "machine-management", icon: Plus, titleAr: "إضافة/الإزالة الآلات عن بُعد", titleEn: "Remote addition/removal of machines" },
  ];

  // Refs: header + each card
  const headerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const targets: HTMLElement[] = [];
    if (headerRef.current) targets.push(headerRef.current);
    cardRefs.current.forEach((el) => el && targets.push(el));

    if (prefersReduced) {
      targets.forEach((el) => el.classList.add("reveal"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            node.classList.add("reveal");
            io.unobserve(node);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    // Stagger: header first, then cards 80ms apart
    targets.forEach((el, i) => {
      el.style.setProperty("--delay", i === 0 ? "0ms" : `${80 * i}ms`);
      io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section className="w-full bg-background py-16 lg:py-24">
      {/* Animation styles */}
      <style>{`
                  .fadeUp {
            opacity: 0;
            transform: translateY(10px);
            transition:
              opacity 220ms ease-out var(--delay, 0ms),
              transform 220ms ease-out var(--delay, 0ms);
            will-change: opacity, transform;
          }
          .fadeUp.reveal { opacity: 1; transform: translateY(0); }

          @media (prefers-reduced-motion: reduce) {
            .fadeUp { opacity: 1 !important; transform: none !important; transition: none !important; }
          }

      `}</style>


      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div ref={headerRef} className="fadeUp text-center mb-16">
          <h2
            className="text-primary font-bold mb-4"
            style={{ fontSize: "clamp(20px, 4vw, 38px)", fontFamily: "DIN Next LT Arabic, Inter, sans-serif" }}
          >
            <span>R.Pay Features</span>
            <span className="mx-4">•</span>
            <span style={{ direction: "rtl" }}>مزايا ار باي</span>
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={feature.id}
                ref={(el) => (cardRefs.current[idx] = el)}
                className="fadeUp group bg-white rounded-lg p-6 shadow-soft hover:shadow-medium transition-all duration-300 border border-border hover:border-primary/20 hover:scale-105 cursor-pointer"
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* Arabic Title */}
                <h3
                  className="text-foreground font-semibold mb-2 leading-tight"
                  style={{
                    direction: "rtl",
                    fontSize: "20px",
                    fontFamily: "DIN Next LT Arabic, Inter, sans-serif",
                    minHeight: "48px",
                    color: "#214261"
                  }}
                >
                  {feature.titleAr}
                </h3>

                {/* English Title */}
                <p
                  className="text-muted-foreground text-sm leading-relaxed"
                  style={{ fontFamily: "Inter, sans-serif", minHeight: "40px", fontSize: "16px" }}
                >
                  {feature.titleEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default memo(FeaturesSection);
