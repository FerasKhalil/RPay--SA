import { memo, useEffect, useRef } from "react";

interface AboutSectionProps {
  className?: string;
}

const AboutSection: React.FC<AboutSectionProps> = memo(({ className = "" }) => {
  // Refs for staggered animations (order = Arabic h2, Arabic p, English h3, English p)
  const arHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const arParaRef = useRef<HTMLParagraphElement | null>(null);
  const enHeadingRef = useRef<HTMLHeadingElement | null>(null);
  const enParaRef = useRef<HTMLParagraphElement | null>(null);

  // Left gradient circle ref
  const circleRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const targets: Array<{ el: HTMLElement | null; delay: string }> = [
      { el: arHeadingRef.current, delay: "0ms" },
      { el: arParaRef.current, delay: "120ms" },
      { el: enHeadingRef.current, delay: "240ms" },
      { el: enParaRef.current, delay: "360ms" },
      { el: circleRef.current, delay: "300ms" }, // circle comes in a bit later
    ];

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      targets.forEach((t) => t.el?.classList.add("reveal"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const node = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            node.classList.add("reveal");
            if (node.dataset.float === "1") node.classList.add("floaty");
            io.unobserve(node);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.2 }
    );

    targets.forEach((t) => {
      if (!t.el) return;
      t.el.style.setProperty("--delay", t.delay);
      if (t.el === circleRef.current) {
        t.el.dataset.float = "1"; // start float after reveal
      }
      io.observe(t.el);
    });

    return () => io.disconnect();
  }, []);

  return (
    <section
      className={`relative w-full bg-[#EDEDED] overflow-hidden ${className}`}
      aria-labelledby="about-heading"
    >
      {/* Local CSS for animations (same as HeroSection) */}
      <style>{`
        /* Text elements: fade + slide up */
        .fadeUp {
          opacity: 0;
          transform: translateY(14px);
          transition:
            opacity 600ms ease-out var(--delay, 0ms),
            transform 600ms ease-out var(--delay, 0ms);
          will-change: opacity, transform;
        }
        .fadeUp.reveal { opacity: 1; transform: translateY(0); }

        /* Circle: enter animation (fade + slight slide/scale) */
        .circleEnter {
          opacity: 0;
          transform: translateX(-16px) scale(0.98);
          transition:
            opacity 700ms ease-out var(--delay, 0ms),
            transform 700ms ease-out var(--delay, 0ms);
          will-change: opacity, transform;
        }
        .circleEnter.reveal {
          opacity: 1;
          transform: translateX(0) scale(1);
        }

        /* Gentle float loop after reveal */
        @keyframes floaty {
          0%   { transform: translateY(0); }
          50%  { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .floaty { animation: floaty 6s ease-in-out 800ms infinite; }

        /* Reduced motion safety */
        @media (prefers-reduced-motion: reduce) {
          .fadeUp, .circleEnter { opacity: 1 !important; transform: none !important; transition: none !important; }
          .floaty { animation: none !important; }
        }
      `}</style>

      {/* Left gradient half circle - Full height (hidden on mobile like hero) */}
      <div
        ref={circleRef}
        className="circleEnter absolute top-0 left-0 hidden h-full w-80 rounded-r-full md:block left-gradient-circle"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content - Mobile Device Image */}
          <div className="relative z-10">
            <img
              src="/lovable-uploads/rpay_device.png"
              alt="R.Pay mobile application interface showing payment and service management features"
              style={{ width: "652.24px", height: "607px" }}
              className="h-auto w-full object-contain
                sm: translate-x-20 sm: translate-y-20 
                lg:translate-y-2 
                xl:-translate-x-20
                z-30
              "
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Right Content - Text */}
          <div className="relative z-10 space-y-8">
            {/* Arabic Heading - عن ار باي */}
            <h2
              ref={arHeadingRef}
              className="fadeUp text-brand-dark font-bold leading-tight"
              style={{
                direction: "rtl",
                fontSize: "clamp(32px, 5vw, 65px)",
                fontFamily: "DIN Next LT Arabic, Inter, sans-serif",
              }}
              id="about-heading"
            >
              عن ار باي
            </h2>

            {/* Arabic Description */}
            <p
              ref={arParaRef}
              className="fadeUp text-black leading-relaxed"
              style={{
                direction: "rtl",
                fontSize: "clamp(16px, 2.5vw, 24.63px)",
                fontFamily: "DIN Next LT Arabic, Inter, sans-serif",
                lineHeight: "1.6",
              }}
            >
              ار باي هي شركة سعودية تقدّم حلولًا تقنية ذكية لقطاع الأجهزة والخدمات الذاتية، تتيح للمشغلين التحكم الكامل ومتابعة عملياتهم في الوقت الفعلي من خلال نظام موحد يجمع الدفع الإلكتروني والمراقبة التشغيلية. نهدف إلى دعم نمو الأعمال بكفاءة ومرونة
            </p>

            {/* English Heading - About R Pay */}
            <h3
              ref={enHeadingRef}
              className="fadeUp text-brand-dark font-bold leading-tight mt-8"
              style={{
                fontSize: "clamp(32px, 5vw, 65px)",
                fontFamily: "Inter, sans-serif",
              }}
            >
              About R Pay
            </h3>

            {/* English Description */}
            <p
              ref={enParaRef}
              className="fadeUp text-black leading-relaxed"
              style={{
                fontSize: "clamp(16px, 2.5vw, 24.63px)",
                fontFamily: "Inter, sans-serif",
                lineHeight: "1.6",
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

AboutSection.displayName = "AboutSection";
export default AboutSection;
